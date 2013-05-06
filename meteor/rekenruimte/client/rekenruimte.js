"use strict";

var rekenruimte = rekenruimte || (function(){
    var stage = {}, canvas, _lessons = new Meteor.Collection("lessons"), _scores = new Meteor.Collection("scores"),
        _ranking = new Meteor.Collection("ranking"), _results = new Meteor.Collection("results");

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

    function _deleteStage () {console.log(stage);
        delete this.stage;
    }

    return {
        lessons : _lessons,
        scores : _scores,
        ranking : _ranking,
        results : _results,
        init : _init,
        initGameLevel : _initGameLevel,
        setBackgroundColor : _setBackgroundColor,
        deleteStage : _deleteStage

    }
})(), config = {
    FPS: 24
};

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
    var oldest = _.unique(rekenruimte.scores.find().fetch(), function (score) {
        return score;
    });
    if (oldest){
        //Session.set("oldest", oldest.name);
        //console.log(oldest);
    }
});

Meteor.autosubscribe(function() {
    rekenruimte.scores.find().observe({
        added: function(item){
            Session.set("userScoredId",{user_id:item.user_id,lesson_id:item.lesson_id});
        }
    });
    rekenruimte.ranking.find().observe({
        added: function(item){
            var rankings,notifications,date,guid;
            if(typeof Session.get("userScoredId") !== "undefined" && Meteor.userId() !== Session.get("userScoredId").user_id){
                rankings = rekenruimte.ranking.find({lesson_id:Session.get("userScoredId").lesson_id}).fetch();
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
    rekenruimte[rekenruimte.lessons.findOne({_id:Session.get("selectedLesson")}).callId].tick.call();
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
            if(typeof rekenruimte.lessons.findOne({_id:Session.get("selectedLesson")}) !== "undefined"){
                //rekenruimte.levels["init" + Lessons.findOne({_id:Session.get("selectedLesson")}).callId].call();
                rekenruimte[rekenruimte.lessons.findOne({_id:Session.get("selectedLesson")}).callId].init.call();
                gameInitialized = true;
            }
        }
    },1000);
}

Meteor.subscribe("directory");
Meteor.subscribe("lessons");
Meteor.subscribe("scores");
Meteor.subscribe("ranking");
Meteor.subscribe("results");
Meteor.subscribe("users");
Accounts.ui.config({passwordSignupFields:"USERNAME_ONLY"});