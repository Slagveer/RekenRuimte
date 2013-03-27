Lessons = new Meteor.Collection("lessons");
Scores = new Meteor.Collection("scores");
Session.set("defaultSelectedLesson",true);
Session.set("startScreen",true);
var spaceShips = [], moon, stars = [], starLength = 8;

function init() {
    canvas = document.getElementById("canvas");
    console.log("INIT START");
    var exportRoot = new lib.RekenRuimte();
    moon = new lib.mcMoon();
    stage = new createjs.Stage(canvas);

    moon.scaleY = .5;
    moon.scaleX = .5;
    moon.x = 300;//canvas.width - moon.width;
    moon.y = 50;

    console.log(moon.mouth);

    stage = new createjs.Stage(canvas);
    //stage.addChild(exportRoot);
    stage.addChild(moon);
    var star, size;
    for(var i = 0;i < starLength;i++){
        size = Math.random() * .7;
        star = new lib.mcStar();
        star.scaleX = size;
        star.scaleY = size;
        star.x = 300 * Math.random();
        star.y = 100 * Math.random();
        stage.addChild(star);
        createjs.Tween.get(star,{loop: true}).to({rotation: 360},10000, createjs.Ease.easeInOut).call(function(){console.log("finished")});
        stars.push(star);
    }
    //moon.mouth.setTransform(2.5,27.1);

    stage.update();

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addListener(window);
}

function tick(){



    if(typeof Lessons.findOne({_id:Session.get("selectedLesson")}) !== "undefined"){


        if(spaceShips.length === 0){

            var questionsLength = Lessons.findOne({_id:Session.get("selectedLesson")}).questions.length, questionIndex = Math.floor(Math.random() * questionsLength);
            Session.set("questionIndex", questionIndex);
            Session.set("question", Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex]);

            var s = new lib.mcSpaceShip();
            s.y = 100;
            s.x = 650;
            s.scaleY = .5;
            s.scaleX = .5;
            s.ship.text.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option1;
            s.ship_1.textCorrect.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option1;
            s.ship_2.textIncorrect.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option1;
            //console.log(s);
            s.onClick = handleClick;
            stage.addChild(s);
            createjs.Tween.get(s).wait(Math.random() * 500).to({x: 500},1000, createjs.Ease.elasticInOut).call(function(){console.log("finished")});

            spaceShips.push(s);

            s = new lib.mcSpaceShip();
            s.y = 220;
            s.x = 650;
            s.scaleY = .5;
            s.scaleX = .5;
            s.ship.text.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option2;
            s.ship_1.textCorrect.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option2;
            s.ship_2.textIncorrect.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option2;
            s.onClick = handleClick;
            stage.addChild(s);
            createjs.Tween.get(s).wait(Math.random() * 500).to({x: 500},1000, createjs.Ease.elasticInOut).call(function(){console.log("finished")});

            spaceShips.push(s);

            s = new lib.mcSpaceShip();
            s.y = 350;
            s.x = 650;
            s.scaleY = .5;
            s.scaleX = .5;
            s.ship.text.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option3;
            s.ship_1.textCorrect.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option3;
            s.ship_2.textIncorrect.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option3;
            s.onClick = handleClick;
            stage.addChild(s);
            createjs.Tween.get(s).wait(Math.random() * 500).to({x: 500},1000, createjs.Ease.elasticInOut).call(function(){console.log("finished")});

            spaceShips.push(s);
            Session.set("answered",false);
        }

        if(Session.get("answered") === true){
            for (var i=spaceShips.length-1; i>=0; i--) {
                var spaceShip = spaceShips[i];
                createjs.Tween.get(spaceShip).to({x: -100, color:{}},1000, createjs.Ease.elasticInOut).call(function(){
                    //console.log(spaceShips.length)
                });
            }
        }
        //if(Session.get("answered") === false){
        for (var i=spaceShips.length-1; i>=0; i--) {
            var spaceShip = spaceShips[i];

            // add gravity to the Y velocity if it's falling:
            //if (spaceShip.falling) { spaceShip.velY += 3; }
            spaceShip.x += Math.random() * -2;
            //spaceShip.y += -0.5;

            if (spaceShip.x < -100 || spaceShip.y > 550) {

                spaceShips.splice(i,1);
                stage.removeChild(spaceShip);
                var score = Scores.findOne({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId()});
                if(typeof score !== "undefined"){
                    //console.info(score.score);
                    Scores.update(score._id, {$inc: {score: 0}});
                }else{
                    //Scores.insert({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId(),score:1,timestamp:(new Date()).getTime()});
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
                // add +100 points if it fell or -500 if it escaped
                //updateScore(spaceShip.y > 400 ? 100 : -500);
            }
        }

    }
    stage.update();
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
                Scores.update(score._id, {$inc: {score: Number(Session.get("question").points)}});
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

        createjs.Tween.get(spaceShip).to({x: -100, color:{}},1000, createjs.Ease.elasticInOut).call(function(){Session.set("answered",true);console.log("finished 1")});
    }
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
        init();
    });

    Meteor.setInterval(function(){
        //console.log(1);
    },1000);

    Template.startScreen.visible =  function(){
        return true;
    };

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

Template.userslist.users = function () {
    //console.log(Meteor.users.find().count());
    var users = [];
    for(var user in Meteor.users.find().collection.docs){
        //console.log(Meteor.users.findOne({_id:user}));
        users.push(Meteor.users.findOne({_id:user}));
    }
    return users;
};

Template.user.username = function(){
    //console.log(Meteor.userId());
    return this.username;
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