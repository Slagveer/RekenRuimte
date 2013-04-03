Lessons = new Meteor.Collection("lessons");
Scores = new Meteor.Collection("scores");

Session.setDefault("defaultSelectedLesson",false);
Session.setDefault("resetTimer",false);
Session.setDefault("startScreen",true);
Session.setDefault("scored",0);
Session.setDefault("time-seconds",0);
Session.setDefault("questions",[]);
// Default active screen set
Session.setDefault('activescreen', "startscreen");
Session.setDefault('gamePaused', false);
Session.setDefault('gameStopped', false);
var spaceShips = [], moon, stars = [], starLength = 8,stagecanvasWidth,stagecanvasHeight, gameInitialized = false, deltaX = -2, questions = [];
$('.home').tooltip({animation:true});

function initGame () {
    Session.set("gameStopped", false);
    Session.set("scored",0);
    deltaX = -2;
    gameInitialized = true;
    var star, size,width = $(".gamescreen").width(),height = 450;//$(".gamescreen").height();
    $("#gamecanvas").attr({width:width,height:height});
    stagecanvasWidth = width;
    stagecanvasHeight = height;
    gameCanvas = document.getElementById("gamecanvas");//$("#gamecanvas")[0];
    gamestage = new createjs.Stage(gameCanvas);
    moon = new lib.mcMoon();
    moon.scaleY = .5;
    moon.scaleX = .5;
    moon.x = 300;
    moon.y = 50;
    gamestage.addChild(moon);
    for(var i = 0;i < starLength;i++){
        size = Math.random() * .7;
        star = new lib.mcStar();
        star.scaleX = size;
        star.scaleY = size;
        star.x = 300 * Math.random();
        star.y = 120 * Math.random();
        gamestage.addChild(star);
        createjs.Tween.get(star,{loop: true}).to({rotation: 360},10000, createjs.Ease.easeInOut).call(function(){
            //console.log("star finished")
        });
        stars.push(star);
    }
    gamestage.update();
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addListener(window);
}

function createSpaceShip (xPos,yPos,questionIndex,handle,option) {
    var spaceship = new lib.mcSpaceShip();
    spaceship.y = yPos;
    spaceship.x = xPos;
    spaceship.scaleY = .7;
    spaceship.scaleX = .7;
    spaceship.ship.text.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex][option];
    spaceship.ship_1.textCorrect.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex][option];
    spaceship.ship_2.textIncorrect.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex][option];
    spaceship.onClick = handle;
    return spaceship;
}

function handleClick(eventObj) {
    var spaceShip = eventObj.target;
    moonReaction();
    if(Session.get("answered") === false){
        if(Session.get("question").answer === spaceShip.ship.text.text){
            spaceShip.gotoAndPlay("correct");
            Session.set("answer", true);
            var score = Scores.findOne({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId()});
            if(typeof score !== "undefined"){
                //console.info(score.score);
                Session.set("scored",Session.get("scored") + parseInt(Session.get("question").points));
                Session.set("time-seconds",Session.get("time-seconds") + parseInt(Session.get("time")));
                //Scores.update(score._id, {$inc: {score: Number(Session.get("question").points)}});
            }else{
                Meteor.call('createScore', {
                    user_id: Meteor.userId(),
                    lesson_id: Session.get("selectedLesson"),
                    score: Number(Session.get("question").points)
                }, function (error, score) {
                    if (! error) {
                        console.log(error);
                    }
                });
            }
        }else{
            spaceShip.gotoAndPlay("incorrect");
            Session.set("answer", false);
        }
        Session.set("answered",true);
        createjs.Tween.get(spaceShip).to({x: -100, color:{}},1000, createjs.Ease.elasticInOut).call(function(){console.log("finished 1")});
    }
}

function tick(){
    var spaceShip,questionsLength, questionIndex,score;

    if(typeof Lessons.findOne({_id:Session.get("selectedLesson")}) !== "undefined"){
        if(spaceShips.length === 0 && Session.get("gameStopped") === false){
            questionsLength = Lessons.findOne({_id:Session.get("selectedLesson")}).questions.length;
            if(questions.length !== questionsLength){
                questionIndex = Math.floor(Math.random() * questionsLength);
                Session.set("question", Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex]);

                while(questions.indexOf(questionIndex) > -1){
                    questionIndex = Math.floor(Math.random() * questionsLength);
                    Session.set("questionIndex", questionIndex);
                    Session.set("question", Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex]);
                }
                questions.push(questionIndex);

                //  SPACESHIP 1
                var spaceShip = createSpaceShip(stagecanvasWidth + 100,100,questionIndex,handleClick,"option1");
                gamestage.addChild(spaceShip);
                createjs.Tween.get(spaceShip).wait(Math.random() * 500).to({x: stagecanvasWidth - 500},1000, createjs.Ease.elasticInOut).call(function(){
                    //
                });
                spaceShips.push(spaceShip);

                //  SPACESHIP 2
                spaceShip = createSpaceShip(stagecanvasWidth + 100,220,questionIndex,handleClick,"option2");
                gamestage.addChild(spaceShip);
                createjs.Tween.get(spaceShip).wait(Math.random() * 500).to({x: 300},1000, createjs.Ease.elasticInOut).call(function(){
                    //
                });
                spaceShips.push(spaceShip);

                //  SPACESHIP 3
                spaceShip = createSpaceShip(stagecanvasWidth + 100,350,questionIndex,handleClick,"option3");
                gamestage.addChild(spaceShip);
                createjs.Tween.get(spaceShip).wait(Math.random() * 500).to({x: stagecanvasWidth - 200},1000, createjs.Ease.elasticInOut).call(function(){
                    //
                });
                spaceShips.push(spaceShip);

                Session.set("answered",false);
                Session.set("resetTimer",true);
                Session.set("lessonFinished", false);
            }else{
                Session.set("lessonFinished", true);
                //Session.set("activescreen", "lessonsscreen");
                $('#gameEndModal').modal();
                //questions = [];

            }
        }

        if(Session.get("answered") === true){
            for (var i=spaceShips.length-1; i>=0; i--) {
                var spaceShip = spaceShips[i];
                createjs.Tween.get(spaceShip).to({x: -100, color:{}},1000, createjs.Ease.elasticInOut).call(function(){
                    //
                });
            }
        }

        for (var i=spaceShips.length-1; i>=0; i--) {
            spaceShip = spaceShips[i];
            //spaceShip.x += Math.random() * deltaX;
            if (spaceShip.x < -100 || spaceShip.y > 550) {
                spaceShips.splice(i,1);
                gamestage.removeChild(spaceShip);
                score = Scores.findOne({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId()});
                if(typeof score !== "undefined"){
                    Scores.update(score._id, {$inc: {score: 0}});
                }else{
                    Meteor.call('createScore', {
                        user_id: Meteor.userId(),
                        lesson_id: Session.get("selectedLesson"),
                        score: 0
                    }, function (error, score) {
                        if (! error) {
                            console.log(error);
                        }
                    });
                }
            }
        }

    }
    gamestage.update();
}

function moonReaction(){
    createjs.Tween.get(moon.mouth).to({scaleY:.3},500, createjs.Ease.elasticOut).call(function(e){
        createjs.Tween.get(e.target).to({scaleY:1},500, createjs.Ease.Bounce)
    });
    createjs.Tween.get(moon.leftEye).to({y:-16.9},500, createjs.Ease.elasticInOut).call(function(e){
        createjs.Tween.get(e.target).to({y:-19.9},500, createjs.Ease.elasticInOut)
    });
    createjs.Tween.get(moon.rightEye).to({y:-16.9},500, createjs.Ease.elasticInOut).call(function(e){
        createjs.Tween.get(e.target).to({y:-19.9},500, createjs.Ease.elasticInOut)
    });
}

//  METEOR

if (Meteor.isClient) {

    Meteor.startup(function () {
        //initGame();
    });

    Meteor.setInterval(function(){
        if(Session.get("resetTimer") === true){
            Session.set("timer",Session.get("time"));
            Session.set("resetTimer",false);
        }else{
            if(typeof Session.get("timer") !== "undefined"){
                if(Session.get("gamePaused") === false){
                    if(Session.get("timer") - 1 < 0){
                        if(Session.get("answered") === false){
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
            initGame();
        }
    },1000);

    /* SCREENS */

    // TITLE
    Template.screenTitle.classname =  function () {
        return (Session.get("activescreen") === "startscreen") ? "startscreen" : "";
    };

    Template.screenTitle.events({
        'click .home' : function () {
            Session.set("activescreen", "startscreen");
        },
        'mouseover .home' : function () {
            $(".title .home").animate({color: "#c3c3c3"},{ queue: false, duration: 200 });
        },
        'mouseout .home' : function () {
            $(".title .home").animate({color: "#fff"},{ queue: false, duration: 200 });
        },
        'click .user' : function () {
            Session.set("activescreen", "usersscreen");
        },
        'mouseover .user' : function () {
            $(".title .user").animate({color: "#c3c3c3"},{ queue: false, duration: 200 });
        },
        'mouseout .user' : function () {
            $(".title .user").animate({color: "#fff"},{ queue: false, duration: 200 });
        }
    });

    // STARTSCREEN
    Template.startScreen.visible =  function () {
        return Session.get("activescreen") === "startscreen";
    };

    Template.startScreen.events({
        'click .startbutton' : function () {
            Session.set("activescreen", "lessonsscreen");
        }
    });

    // LESSONSSCREEN
    Template.lessonsScreen.visible = function () {
        return Session.get("activescreen") === "lessonsscreen";
    };

    Template.lessonsScreen.lessons = function () {
        var lessons = Lessons.find({}, {sort: {score: -1, name: 1}});
        if(Session.get("defaultSelectedLesson") === true && typeof lessons.fetch()[0] !== "undefined"){
            Session.set("selectedLesson",Lessons.find({}, {sort: {score: -1, name: 1}}).fetch()[0]._id);
        }
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
                $("#" + this._id).animate({backgroundColor: "#c3c3c3"},{ queue: false, duration: 200 });
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
        return Meteor.users.find({}).fetch();
    };

    Template.user.username = function(){
        return this.username;
    }

    Template.usersScreen.events({
        'click .user' : function () {
            Session.set("selectedUser", this._id);
            Session.set("activescreen", "userdetailsscreen");

        },
        'mouseover .user' : function () {
            if(Session.get("selectedUser") !== this._id){
                $("#" + this._id).animate({backgroundColor: "#c3c3c3"},{ queue: false, duration: 200 });
            }
        },
        'mouseout .user' : function () {
            if(Session.get("selectedUser") !== this._id){
                $("#" + this._id).animate({backgroundColor: "#fff"},{ queue: false, duration: 200 });
            }
        },
        'click .backbutton' : function () {
            Session.set("selectedUser","");
            Session.set("activescreen", "usersscreen");
        }
    });

    Template.user.helpers({
        userSelected: function () {
            return (this._id === Meteor.userId()) ? true : false;
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

    Template.userDetailsScreen.events({
        'click .backbutton' : function () {
            Session.set("activescreen", "usersscreen");

        }
    });

    Template.userDetails.score = function () {
        var scoreObject = Scores.findOne({lesson_id:this._id,user_id:Session.get("selectedUser")});
        if(typeof scoreObject !== "undefined"){
            return scoreObject.score;
        }else{
            return "***"
        }
    };

    Template.userDetailsScreen.user = function () {
        var user;
        if(typeof Session.get("selectedUser") !== "undefined"){
            user = Meteor.users.findOne({_id:Session.get("selectedUser")});
            return (typeof user !== "undefined") ? user.username : "";
        }
    };

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

    function removeSpaceShips(spaceShip){
        var def = $.Deferred();
        createjs.Tween.get(spaceShip).to({x: -100, color:{}},1000, createjs.Ease.elasticInOut).call(function(){
            def.resolve();
        });
        return def.promise();
    }

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

    Template.gameEndContent.events({
        'click .continuebutton' : function () {
            var scoreObject = Scores.findOne({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId()});
            if(scoreObject.score < Session.get("scored")){
                Scores.update(scoreObject._id, {$set: {score: Number(Session.get("scored"))}});
            }
            Session.set("activescreen", "lessonsscreen");
            Session.set("gamePaused",false);
            Session.set("gameStopped",true);
            questions = [];
        }
    });

    Template.questioncontent.question =  function () {
        if(typeof Session.get("question") !== "undefined"){
            if(typeof Session.get("activescreen") !== "undefined"){
                $( ".questioncontent .question" ).fadeIn();
                return Session.get("question").question;
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
        var scoreObject =  (Session.get("selectedLesson") !== null) ? Scores.findOne({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId()}) : {};
        if(typeof scoreObject !== "undefined"){
            return Scores.findOne({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId()}).score + " punten";
        }else{
            return "0 punten";
        }
    }

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


    Template.page.greeting = function () {
    return "Welcome to rekenruimte.";
  };

  Template.page.events({
    'click .lesson' : function () {
        // template data, if any, is available in 'this'
        Session.set("defaultSelectedLesson",false);
        Session.set("selectedLesson", this._id);
            //console.log(this._id);
        if (typeof console !== 'undefined'){
            //console.log("You pressed the button");
        }
    }
  ,
    'click .inc' : function(){
        //console.log(Meteor.userId());
        var score = Scores.findOne({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId()});

        if(typeof score !== "undefined"){
            console.info(score.score);
            Scores.update(score._id, {$inc: {score: 5}});
        }else{
            //Scores.insert({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId(),score:1,timestamp:(new Date()).getTime()});
            Meteor.call('createScore', {
                user_id: Meteor.userId(),
                lesson_id: Session.get("selectedLesson"),
                score: 1,
            }, function (error, score) {
                if (! error) {
                   console.log(error);
                }
            });
        }
//           done: Boolean,
//           score: number,
//           lesson_id: String,
//           user_id: String,
//           timestamp: Number}
    }
  });

    Template.page.lessons = function () {
        var lessons = Lessons.find({}, {sort: {score: -1, name: 1}});
        if(Session.get("defaultSelectedLesson") === true && typeof lessons.fetch()[0] !== "undefined"){
            Session.set("selectedLesson",Lessons.find({}, {sort: {score: -1, name: 1}}).fetch()[0]._id);
        }
        return lessons;
    };

    Template.page.selectedLesson = function () {
        var lesson = Lessons.findOne(Session.get("selectedLesson"));
        var score = Scores.findOne({lesson_id:Session.get("selectedLesson")});
        //console.log(score);
        return lesson && lesson.name;
    };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}

Template.user.userLoggedIn = function(){
    return this._id === Meteor.userId();
}

Template.user.score = function(){
    var scoreRecord = Scores.findOne({user_id:this._id,lesson_id:Session.get("selectedLesson")});
    return (typeof scoreRecord !== "undefined")? scoreRecord.score : "";
}

Template.user.highestScore = function(){
    var highestScore;
    if(Session.get("selectedLesson")){
        highestScore = Scores.findOne({lesson_id:Session.get("selectedLesson")},{sort: {score: -1}});
        if(typeof highestScore !== "undefined"){
            if(Scores.find({lesson_id:Session.get("selectedLesson"),score:highestScore.score,user_id:this._id}).count() > 0){
                return "highestScore";
            }
        }
    }

    return "";
}

Template.lesson.selected =  function(){

};

Template.lesson.score =  function(){
    return Scores.findOne({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId()}).score.toString();
};


Meteor.subscribe("directory");
Meteor.subscribe("lessons");
Meteor.subscribe("scores");
Accounts.ui.config({passwordSignupFields:"USERNAME_ONLY"});