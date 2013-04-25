//"use strict";

var rekenruimte = rekenruimte || (function(){
    var stage = {}, canvas;

    function _init(){
        var width = $(".gamescreen").width(),height = 450;
        $("#gamecanvas").attr({width:width,height:height});
        stagecanvasWidth = width;
        stagecanvasHeight = height;
        canvas = document.getElementById("gamecanvas");
        stage = new createjs.Stage(canvas);

        return stage;
    }

    function _initGameLevel(){
        Session.set("answered",true);
        Session.set("gameStopped", false);
        Session.set("scored",0);
        Session.set("time-seconds",0);
    }

    function _setBackgroundColor (color) {
        canvas.style.background = color;
    }

    return {
        init : _init,
        initGameLevel : _initGameLevel,
        setBackgroundColor : _setBackgroundColor

    }
})(), config = {
    FPS: 24
};

Lessons = new Meteor.Collection("lessons");
Scores = new Meteor.Collection("scores");
Ranking = new Meteor.Collection("ranking");
Results = new Meteor.Collection("results");

Session.setDefault("defaultSelectedLesson",false);
Session.setDefault("resetTimer",false);
Session.setDefault("startScreen",true);
Session.setDefault("scored",0);
Session.setDefault("time-seconds",0);
Session.setDefault("questions",[]);
Session.setDefault("notifications",[]);
// Default active screen set
Session.setDefault('activescreen', "startscreen");
Session.setDefault('gamePaused', false);
Session.setDefault('gameStopped', false);
var spaceShips = [], moon, rock, rock2, spiral, planet, good, stars = [], starLength = 16,stagecanvasWidth,stagecanvasHeight, gameInitialized = false, deltaX = -2, questions = [];
$('.home').tooltip({animation:true});

Deps.autorun(function () {
    var oldest = _.unique(Scores.find().fetch(), function (score) {
        return score;
    });
    if (oldest){
        //Session.set("oldest", oldest.name);
        //console.log(oldest);
    }
});

Meteor.autosubscribe(function() {
    Scores.find().observe({
        added: function(item){
            Session.set("userScoredId",{user_id:item.user_id,lesson_id:item.lesson_id});
        }
    });
    Ranking.find().observe({
        added: function(item){
            var rankings,notifications,date,guid;
            if(typeof Session.get("userScoredId") !== "undefined" && Meteor.userId() !== Session.get("userScoredId").user_id){
                rankings = Ranking.find({lesson_id:Session.get("userScoredId").lesson_id}).fetch();
                for(var j= 0,ll=rankings.length;j<ll;j++){
                    if(rankings[j].users.indexOf(Session.get("userScoredId").user_id) > -1){
                        //Todo alert((j + 1) + "e plaats");
                        date = (function(){
                            var today = new Date(), dd = today.getDate(),mm = today.getMonth()+ 1,yyyy = today.getFullYear(),
                                hh = today.getHours(), mi = today.getMinutes(), ss = today.getSeconds();
                            if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} if(hh<10){hh='0'+hh}if(mi<10){mi='0'+mi}if(ss<10){ss='0'+ss}
                            today = mm+'/'+dd+'/'+yyyy+' '+hh+':'+mm+':'+ss;
                            return today;
                        })();
                        guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                            return v.toString(16);
                        });
                        notifications = Session.get("notifications");
                        notifications.push({id:guid,message:"Op " + date + " staat " + Meteor.users.findOne({_id:Session.get("userScoredId").user_id}).username + " op de " + (j + 1) + "e plaats"});
                        Session.set("notifications",notifications);
                        Session.set("userScoredId",undefined);
                        j = ll;
                    }
                }
            }
        }
    });
});

rekenruimte.levels =  (function(){
    function initlevel1(){
        initLevel1();
        return true;
    };

    function ticklevel1(){
        tickLevel1();
        return true;
    }

    function initlevel2(){
        initLevel2();
        return true;
    };

    function ticklevel2(){
        tickLevel2();
        return true;
    }

    return {
        initlevel1: initlevel1,
        ticklevel1: ticklevel1,
        initlevel2: initlevel2,
        ticklevel2: ticklevel2
    }
})();

rekenruimte.functions = (function(){
    // Random float between
    function randomFloatBetween( $min, $max, $precision ) {
        if( typeof( $precision ) == 'undefined') {
            $precision = 2;
        }
        return parseFloat( Math.min( $min + ( Math.random() * ( $max - $min ) ), $max ).toFixed( $precision ) );
    };

    return {
        randomFloatBetween : randomFloatBetween
    }
})();

rekenruimte.questions = (function(){
    function generateSizeQuestion( question, size ) {
        var values =  [
            {value : rekenruimte.functions.randomFloatBetween(0,10,1)},
            {value : rekenruimte.functions.randomFloatBetween(0,10,1)},
            {value : rekenruimte.functions.randomFloatBetween(0,10,1)}
        ],
            value1 = values[rekenruimte.functions.randomFloatBetween(0,2,0)].value, value2 = values[rekenruimte.functions.randomFloatBetween(0,2,0)].value,
            answer =  ((value1 + value2) * 10).toFixed(1),
            options =  [
                {value : answer},
                {value : parseFloat(values[rekenruimte.functions.randomFloatBetween(0,2,0)].value + values[rekenruimte.functions.randomFloatBetween(0,2,0)].value + 3).toFixed(1)},
                {value : parseFloat((values[rekenruimte.functions.randomFloatBetween(0,2,0)].value * 10) + values[rekenruimte.functions.randomFloatBetween(0,2,0)].value + 1).toFixed(1)}
            ],
            getIndex = function(ops){
            return (function(ops){
                var index = rekenruimte.functions.randomFloatBetween(0,2,0);
                if(ops.indexOf(index) === -1){
                    ops.push(index);
                    return index;
                }else{
                    return getIndex(ops);
                }
            })(ops);
            },
            question = {
                title : value1 + " m + " + value2 + " m",
                description : "Reken uit: geef je antwoord in decimeter",
                answer : parseFloat(answer),
                sum: value1 + " + " + value2,
                option1 : parseFloat(options[getIndex(options)].value),
                option2 : parseFloat(options[getIndex(options)].value),
                option3 : parseFloat(options[getIndex(options)].value)
            }
        //console.info(question);
        return question;
    }

    return {
        generateSizeQuestion : generateSizeQuestion
    }
})();

function tick(){
    //tickLeve1();
    rekenruimte.levels["tick" + Lessons.findOne({_id:Session.get("selectedLesson")}).callId].call();
}

//  METEOR

if (Meteor.isClient) {

    Meteor.startup(function () {
        Deps.autorun(function () {
            if (!Meteor.userId()) {
                Session.set("activescreen", "startscreen");
            }
        });
    });

    Meteor.setInterval(function(){
        var results;
        if(Session.get("resetTimer") === true){
            Session.set("timer",Session.get("time"));
            Session.set("resetTimer",false);
        }else{
            if(typeof Session.get("timer") !== "undefined"){
                if(Session.get("gamePaused") === false){
                    if(Session.get("timer") - 1 < 0){
                        if(Session.get("answered") === false){
                            results = (typeof Session.get("results") === "undefined") ? [] : Session.get("results");
                            results.push({answer:"leeg",result:false,question:Session.get("question")});
                            Session.set("results",results);
                            Session.set("time-seconds",parseInt(Session.get("time-seconds")) + (parseInt(Session.get("time")) - Session.get("timer")));
                            Session.set("answer", false);
                            Session.set("answered",true);
                        }
                    }else{
                        Session.set("timer",Session.get("timer") - 1);
                    }
                }
            }
        }
        if(gameInitialized === false && Session.get("activescreen") === "gamescreen"){
            //initLevel1();
            if(typeof Lessons.findOne({_id:Session.get("selectedLesson")}) !== "undefined"){
                rekenruimte.levels["init" + Lessons.findOne({_id:Session.get("selectedLesson")}).callId].call();
            }
        }
    },1000);

    /* SCREENS */

    // TITLE
    Template.screenTitle.classname =  function () {
        return (Session.get("activescreen") === "startscreen") ? "startscreen" : "";
    };

    Template.screenTitle.events({
        'click .home' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){Session.set("activescreen", "startscreen")};
        },
        'mouseover .home' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){$(".title .home").animate({color: "#33578A"},{ queue: false, duration: 200 })};
        },
        'mouseout .home' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){$(".title .home").animate({color: "#fff"},{ queue: false, duration: 200 })};
        },
        'click .user' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){Session.set("activescreen", "usersscreen")};
        },
        'mouseover .user' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){$(".title .user").animate({color: "#3399CC"},{ queue: false, duration: 200 })};
        },
        'mouseout .user' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){$(".title .user").animate({color: "#fff"},{ queue: false, duration: 200 })};
        },
        'click .trash' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){Session.set("activescreen", "usersscreen");Meteor.call('resetResults');};
        },
        'mouseover .trash' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){$(".title .trash").animate({color: "#3399CC"},{ queue: false, duration: 200 })};
        },
        'mouseout .trash' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){$(".title .trash").animate({color: "#fff"},{ queue: false, duration: 200 })};
        },
        'click .notification' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){$(".notification").find(".badge").text("");Session.set("activescreen", "notificationsscreen")};
        },
        'mouseover .notification' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){$(".title .notification").animate({color: "#3399CC"},{ queue: false, duration: 200 })};
        },
        'mouseout .notification' : function () {
            if(Session.get("activescreen") !== "gamescreen" && Session.get("activescreen") !== "startscreen"){$(".title .notification").animate({color: "#fff"},{ queue: false, duration: 200 })};
        }
    });

    Template.screenTitle.helpers({
        state: function () {
            return (Session.get("activescreen") === "gamescreen" || Session.get("activescreen") === "startscreen") ? "disabled" : "enabled";
        },
        administratorRole:  function () {
            var user = Meteor.users.findOne({_id:Meteor.userId()});
            return typeof user !== "undefined" && user.profile.role === "administrator" +
                "";
        },
        notStartScreen: function () {
            return (Session.get("activescreen") !== "startscreen");
        },
        notifications:  function () {
            return Session.get("notifications").length;
        },
        badgevisible: function () {
            var notifications = Session.get("notifications");
            return (notifications.length === 0) ? false : true;
        }
    });

    // STARTSCREEN
    Template.startScreen.visible =  function () {
        return Session.get("activescreen") === "startscreen";
    };

    Template.startScreen.events({
        'click .startbutton' : function () {
            if(Meteor.userId()){
                Session.set("activescreen", "lessonsscreen");
            }
        }
    });

    Template.startScreen.helpers({
        state: function () {
            return (Meteor.userId()) ? "enabled" : "disabled";
        }
    });

    // LESSONSSCREEN
    Template.lessonsScreen.visible = function () {
        return Session.get("activescreen") === "lessonsscreen";
    };

    Template.lessonsScreen.lessons = function () {
        var lessons = Lessons.find({}, {sort: {index: 1}});
        /*if(Session.get("defaultSelectedLesson") === true && typeof lessons.fetch()[0] !== "undefined"){
            Session.set("selectedLesson",Lessons.find({}, {sort: {score: -1, name: 1}}).fetch()[0]._id);
        }*/
        return lessons;
    };

    Template.lessonsScreen.events({
        'click .lesson' : function () {
            Session.set("selectedLesson", this._id);
            Session.set("activescreen", "gamescreen");
            Session.set("time", this.time);
            Session.set("gamePaused",false);
            Session.set("resetTimer",true);
            Session.set("answer", false);
            Session.set("answered",false);
            gameInitialized = false;
            deltaX = 0;
        },
        'mouseover .lesson' : function () {
            if(Session.get("selectedLesson") !== this._id){
                $("#" + this._id).animate({backgroundColor: "#3399CC"},{ queue: false, duration: 200 });
            }
        },
        'mouseout .lesson' : function () {
            if(Session.get("selectedLesson") !== this._id){
                $("#" + this._id).animate({backgroundColor: "#fff"},{ queue: false, duration: 200 });
            }
        },
        'click .backbutton' : function () {
            Session.set("selectedLesson","");
            Session.set("activescreen", "startscreen");
        }
    });

    Template.lesson.helpers({
        selected: function () {
            return (Session.get("selectedLesson") === this._id) ? "selected" : "";
        }
    });

    //  USERSSCREEN

    Template.usersScreen.visible = function () {
        return Session.get("activescreen") === "usersscreen";
    };

    Template.usersScreen.users = function () {
        return Meteor.users.find({}, {sort: { username: 1}}).fetch();
    };

    Template.user.username = function(){
        return this.username;
    }

    Template.usersScreen.events({
        'click .user' : function () {
            Session.set("selectedUser", this);
            Session.set("activescreen", "userdetailsscreen");

        },
        'mouseover .user' : function () {
            if(typeof Session.get("selectedUser") !== "undefined" && Session.get("selectedUser")._id !== this._id){
                $("#" + this._id).animate({backgroundColor: "#3399CC"},{ queue: false, duration: 200 });
            }
        },
        'mouseout .user' : function () {
            if(typeof Session.get("selectedUser") !== "undefined" && Session.get("selectedUser")._id !== this._id){
                $("#" + this._id).animate({backgroundColor: "#fff"},{ queue: false, duration: 200 });
            }
        },
        'click .backbutton' : function () {
            Session.set("selectedUser",{});
            Session.set("activescreen", "lessonsscreen");
        }
    });

    Template.user.helpers({
        selected: function () {
            return (typeof Session.get("selectedUser") !== "undefined" && Session.get("selectedUser")._id === this._id) ? "selected" : "";
        }
    });

    //  USERDETAILSSCREEN
    Template.userDetailsScreen.visible = function () {
        return Session.get("activescreen") === "userdetailsscreen";
    };

    Template.userDetailsScreen.lessons = function () {
        var lessons = Lessons.find({}, {sort: {score: -1, name: 1}});
        return lessons;
    };

    Template.userDetailsScreen.user = function () {
        if(typeof Session.get("selectedUser") !== "undefined"){
            return Session.get("selectedUser").username;
        }
    };

    Template.userDetailsScreen.events({
        'click .backbutton' : function () {
            Session.set("activescreen", "usersscreen");

        },
        'mouseover .ranking' : function (event) {
            $(event.target).popover('toggle');
        },
        'click .play' : function () {
            Session.set("selectedLesson", this._id);
            Session.set("activescreen", "gamescreen");
            Session.set("time", this.time);
            Session.set("gamePaused",false);
            Session.set("resetTimer",true);
            Session.set("answer", false);
            Session.set("answered",false);
            gameInitialized = false;
            deltaX = 0;
        },
        'mouseover .play' : function (event) {
            $(event.target).popover('toggle');
        }
    });

    Template.userDetails.score = function () {
        var scoreObject = Scores.findOne({lesson_id:this._id,user_id:Session.get("selectedUser")._id});
        if(typeof scoreObject !== "undefined"){
            return scoreObject.score;
        }else{
            return "***";
        }
    };

    Template.userDetails.time =  function () {
        var scoreObject = Scores.findOne({lesson_id:this._id,user_id:Session.get("selectedUser")._id});
        if(typeof scoreObject !== "undefined"){
            return scoreObject.time;
        }else{
            return "***";
        }
    }

    Template.userDetails.helpers({
        ranking: function () {
            var rankings = Ranking.find({lesson_id:this._id}).fetch();
            for(var j= 0,ll=rankings.length;j<ll;j++){
                if(rankings[j].users.indexOf(Session.get("selectedUser")._id) > -1){
                    return j + 1 + "e plaats";
                }
            }
            return "";
        },
        motivation: function () {
            var rankings = Ranking.find({lesson_id:this._id}).fetch(), ranking, rank;
            for(var j= 0,ll=rankings.length;j<ll;j++){
                if(rankings[j].users.indexOf(Session.get("selectedUser")._id) > -1){
                    rank = j + 1;
                    if(Meteor.userId() === Session.get("selectedUser")._id){
                        if(rank === 1){
                            ranking = (rankings[j].users.length > 1) ? "Je staat gezamelijk op de " + rank + "e plaats": "Je bent de beste!";
                        }else{
                            ranking = (rankings[j].users.length > 1) ? "Je staat gezamelijk op de " + rank + "e plaats": "Kom op, je kan veel beter!";
                        }
                    }else{
                        if(rank === 1){
                            ranking = (rankings[j].users.length > 1) ? Session.get("selectedUser").username + " staat gezamelijk op de " + rank + "e plaats": Session.get("selectedUser").username + " is de beste!";
                        }else{
                            ranking = (rankings[j].users.length > 1) ? Session.get("selectedUser").username + " staat gezamelijk op de " + rank  + "e plaats": Session.get("selectedUser").username + " zo zo...";
                        }
                    }
                    j = ll;
                }
            }
            return (typeof ranking !== "undefined") ?  ranking : "Deze moet " + Session.get("selectedUser").username + " nog doen!";
        },
        firstPlace: function () {
            var rankings = Ranking.find({lesson_id:this._id}).fetch(), ranking, rank;
            for(var j= 0,ll=rankings.length;j<ll;j++){
                if(rankings[j].users.indexOf(Session.get("selectedUser")._id) > -1){
                    rank = j + 1;

                        if(rank === 1){
                            return true;
                        }else{
                            return false;
                        }

                }
            }
        }
    });

    //  NOTIFICATIONSSCREEN

    Template.notificationsScreen.visible = function () {
        return Session.get("activescreen") === "notificationsscreen";
    };

    Template.notificationsScreen.notifications = function () {
        return Session.get("notifications");
    };

    Template.note.message = function(){
        return this.message;
    }

    Template.note.id = function(){
        return this.id;
    }

    Template.notificationsScreen.events({
        'mouseover .note' : function () {
            $("#" + this._id).animate({backgroundColor: "#3399CC"},{ queue: false, duration: 200 });
        },
        'mouseout .note' : function () {
            $("#" + this._id).animate({backgroundColor: "#fff"},{ queue: false, duration: 200 });
        },
        'click .backbutton' : function () {
            Session.set("activescreen", "lessonsscreen");
            Session.set("notifications",[]);
        },
        'click .note' : function (event) {
            var notifications = Session.get("notifications");
            for(var i= 0,l=notifications.length;i<l;i++){
                if(notifications[i].id === this.id){console.log(notifications.splice(i,1));
                    notifications.slice(i,1);
                    i = l;
                }
            }
            Session.set("notifications", notifications);
            if(notifications.length === 0){
                Session.set("activescreen", "lessonsscreen");
            }
        }
    });

    Template.note.helpers({

    });

    // GAMESCREEN
    Template.gameScreen.visible =  function () {
        return Session.get("activescreen") === "gamescreen";
    };

    Template.gameScreen.events({
        'click .pausebutton' : function () {
            Session.set("gamePaused",true);
            deltaX = 0;
        },
        'click .backbutton' : function () {
            Session.set("gamePaused",true);
            deltaX = 0;
            //Session.set("activescreen", "lessonsscreen");
        },
        'click .stopbutton' : function () {
            var processSpaceShipsDeferred = [];
            Session.set("scored",0);
            Session.set("gamePaused",false);
            Session.set("gameStopped",true);
            for (var i=spaceShips.length-1; i>=0; i--) {
                var spaceShip = spaceShips[i];
                processSpaceShipsDeferred.push(removeSpaceShips(spaceShip,i));
            }
            $.when.apply($, processSpaceShipsDeferred).then(function(){
                Session.set("activescreen", "lessonsscreen");
            });

        }
    });

    Template.gamepausecontent.events({
        'click .continuebutton' : function () {
            Session.set("gamePaused",false);
            deltaX = -2;
        }
    });

    Template.gamestopcontent.events({
        'click .continuebutton' : function () {
            Session.set("gamePaused",false);
            deltaX = -2;
        }
    });

    Template.gameEndContent.score =  function () {
        if(typeof Session.get("scored") !== "undefined"){
            return Session.get("scored");
        }
    };

    Template.gameEndContent.seconds =  function () {
        var sec =  Session.get("time-seconds");
        if(typeof sec !== "undefined"){
            return sec;
        }else{
            return "";
        }
    };

    Template.gameEndContent.events({
        'click .continuebutton' : function () {
            var scoreObject = Scores.findOne({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId()});
            if(typeof scoreObject === "undefined"){
                Meteor.call('createScore', {
                    user_id: Meteor.userId(),
                    lesson_id: Session.get("selectedLesson"),
                    score: Number(Session.get("scored")),
                    time: Number(Session.get("time-seconds"))
                }, function (error, score) {
                    if (error) {
                        console.log(error);
                    }
                });
                Meteor.call('setRanking');
            }else if(typeof scoreObject !== "undefined" && (scoreObject.score < Session.get("scored") || (scoreObject.score === Session.get("scored") && Session.get("time-seconds") < scoreObject.time))){
                //Scores.update(scoreObject._id, {$set: {score: Number(Session.get("scored"))}});
                Scores.update(scoreObject._id, {$set: {score: Number(Session.get("scored")),time: Session.get("time-seconds")}});
                Meteor.call('setRanking');
            }else{
                /*Meteor.call('createScore', {
                    user_id: Meteor.userId(),
                    lesson_id: Session.get("selectedLesson"),
                    score: Number(Session.get("scored")),
                    time: Number(Session.get("time-seconds"))
                }, function (error, score) {
                    if (error) {
                        console.log(error);
                    }
                });
                Meteor.call('setRanking');*/
            }
            Meteor.call('createResult', {
                user_id: Meteor.userId(),
                lesson_id: Session.get("selectedLesson"),
                result: Session.get("results")
            }, function (error, score) {
                if (error) {
                    console.log(error);
                }
            });
            Session.set("activescreen", "lessonsscreen");
            Session.set("gamePaused",false);
            Session.set("gameStopped",true);
            questions = [];
        }
    });

    Template.questioncontent.title =  function () {
        if(typeof Session.get("question") !== "undefined"){
            if(typeof Session.get("activescreen") !== "undefined"){
                $( ".questioncontent .question" ).fadeIn();
                return Session.get("question").title;
            }
        }
    };

    Template.questioncontent.description =  function () {
        if(typeof Session.get("question") !== "undefined"){
            if(typeof Session.get("activescreen") !== "undefined"){
                return Session.get("question").description;
            }
        }
    };

    Template.gameScoreContent.score =  function () {
        var scoreObject =  Session.get("scored");
        if(typeof scoreObject !== "undefined"){
            return Session.get("scored") + " punten";
        }else{
            return "0 punten";
        }
    };

    Template.gameScoreContent.time =  function () {
        if(typeof Session.get("timer") !== "undefined"){
            return Session.get("timer") + " seconden";
        }else{
            return "";
        }
    }

    Template.gameProgressContent.progress =  function () {
        if(typeof Session.get("timer") !== "undefined"){
            return 100 - (Session.get("timer") * 10) + "%";
        }else{
            return "0%";
        }
    }

    Template.gameProgressContent.progressSucces =  function () {
        var progress;
        if(typeof Session.get("timer") !== "undefined"){
            progress = 100 - (Session.get("timer") * 10) + "%";
            if(progress <= "50%" && progress !== "100%"){
                return progress;
            }else{
                return "50%";
            }
        }else{
            return "0%";
        }
    }

    Template.gameProgressContent.progressWarning =  function () {
        var progress;
        if(typeof Session.get("timer") !== "undefined"){
            progress = 100 - (Session.get("timer") * 10);
            if(progress > 50 && progress <= 80){
                return (progress - 50) + "%";
            }else{
                if(progress > 70){
                    return "30%";
                }else{
                    return "0%";
                }
            }
        }else{
            return "0%";
        }
    }

    Template.gameProgressContent.progressDanger =  function () {
        var progress;
        if(typeof Session.get("timer") !== "undefined"){
            progress = 100 - (Session.get("timer") * 10);
            if(progress > 80 && progress <= 100){
                return (progress - 80) + "%";
            }else{
                return "0%";
            }
        }else{
            return "0%";
        }
    }
}

Meteor.subscribe("directory");
Meteor.subscribe("lessons");
Meteor.subscribe("scores");
Meteor.subscribe("ranking");
Meteor.subscribe("results");
Meteor.subscribe("users");
Accounts.ui.config({passwordSignupFields:"USERNAME_ONLY"});