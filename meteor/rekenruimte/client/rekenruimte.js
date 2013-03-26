Lessons = new Meteor.Collection("lessons");
Scores = new Meteor.Collection("scores");
Session.set("defaultSelectedLesson",true);
var spaceShips = [];

function init() {
    canvas = document.getElementById("canvas");
    console.log("INIT START");
    exportRoot = new lib.RekenRuimte();

    stage = new createjs.Stage(canvas);
    //stage.addChild(exportRoot);
    //stage.update();

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addListener(window);
}

function tick(){

    if(typeof Lessons.findOne({_id:Session.get("selectedLesson")}) !== "undefined"){
        var questionsLength = Lessons.findOne({_id:Session.get("selectedLesson")}).questions.length, questionIndex = Math.floor(Math.random() * questionsLength);

        if(spaceShips.length === 0){
            var s = new lib.mcSpaceShip();
            s.y = 100;
            s.x = 650;
            s.scaleY = .5;
            s.scaleX = .5;
            s.instance_7.text.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option1;
            s.onClick = handleClick;
            stage.addChild(s);

            spaceShips.push(s);

            s = new lib.mcSpaceShip();
            s.y = 220;
            s.x = 650;
            s.scaleY = .5;
            s.scaleX = .5;
            //console.log(s.instance_7.text.text);
            s.question = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex];
            s.instance_7.text.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option2;
            s.onClick = handleClick;
            stage.addChild(s);

            spaceShips.push(s);

            s = new lib.mcSpaceShip();
            s.y = 350;
            s.x = 650;
            s.scaleY = .5;
            s.scaleX = .5;
            //console.log(s.instance_7.text.text);
            s.instance_7.text.text = Lessons.findOne({_id:Session.get("selectedLesson")}).questions[questionIndex].option3;
            s.onClick = handleClick;
            stage.addChild(s);

            spaceShips.push(s);
        }

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
                    Scores.update(score._id, {$inc: {score: 5}});
                }else{
                    //Scores.insert({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId(),score:1,timestamp:(new Date()).getTime()});
                    Meteor.call('createScore', {
                        user_id: Meteor.userId(),
                        lesson_id: Session.get("selectedLesson"),
                        score: 1
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
    //console.log(spaceShip.children[0].text.text);
    spaceShip.children[0].text.text = "000";
    createjs.Tween.get(spaceShip).to({x: 150},300, Ease.elasticInOut).call(function(){console.log("finished")});
}

if (Meteor.isClient) {

    Meteor.startup(function () {
        init();
    });

    Meteor.setInterval(function(){
        //console.log(1);
    },1000);

  Template.page.greeting = function () {
    return "Welcome to rekenruimte.";
  };

  Template.page.events({
    'click .lesson' : function () {
        // template data, if any, is available in 'this'
        Session.set("defaultSelectedLesson",false);
        Session.set("selectedLesson", this._id);
            console.log(this._id);
        if (typeof console !== 'undefined')
            console.log("You pressed the button");
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
        console.log(score);
        return lesson && lesson.name;
    };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}

Template.userslist.users = function () {
    console.log(Meteor.users.find().count());
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