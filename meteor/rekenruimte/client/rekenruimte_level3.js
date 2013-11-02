"use strict";

this.rekenruimte = this.rekenruimte || {};

this.rekenruimte.level3 = this.rekenruimte.level3 || (function() {
    var drag = true, _good = {}, astronaut, stage, hole1, hole2, hole3;

    function _init () {
        var width = $(".gamescreen").width();

        stage = rekenruimte.init();
        rekenruimte.initGameLevel();
        rekenruimte.setBackgroundColor("#000");

        Session.set("nextQuestion",true);

        astronaut = new lib.mcAstronaut();
        astronaut.scaleY = .5;
        astronaut.scaleX = .5;
        astronaut.x = 250;
        astronaut.y = 50;
        stage.addChild(astronaut);

        rekenruimte.level3.good = new lib.mcNotify();
        rekenruimte.level3.good.text.text = "GOEDZO!";
        rekenruimte.level3.good.text.font = "90px facebook_letter_facesregular";
        rekenruimte.level3.good.x = width/2;
        rekenruimte.level3.good.y = 550;
        rekenruimte.level3.good.color = "#ff0000";
        stage.addChild(rekenruimte.level3.good);

        Session.set("nextQuestion", true);

        if(typeof stage !== "undefined"){
            stage.update();
        }

        createjs.Ticker.setFPS(config.FPS);
        createjs.Ticker.addListener(window);
    }

    function _tick () {
        var questionsLength, questionIndex;
        if(typeof rekenruimte.lessons.findOne({_id:Session.get("selectedLesson")}) !== "undefined"){
            if(Session.get("nextQuestion") === true && Session.get("gameStopped") === false){
                questionsLength = rekenruimte.lessons.findOne({_id:Session.get("selectedLesson")}).questions;
                if(questions.length !== questionsLength && Session.get("gameStopped") === false){
                    Session.set("nextQuestion", false);
                    Session.set("question", rekenruimte.questions.generateSizeQuestion(rekenruimte.lessons.findOne({_id:Session.get("selectedLesson")})));
                    questions.push(Session.get("question"));

                    hole1.field.text = Session.get("question")["option1"];
                    hole1.field.font = "47px facebook_letter_facesregular";
                    hole1.field.color = "#FFF";

                    hole2.field.text = Session.get("question")["option1"];
                    hole2.field.font = "47px facebook_letter_facesregular";
                    hole2.field.color = "#FFF";

                    hole3.field.text = Session.get("question")["option1"];
                    hole3.field.font = "47px facebook_letter_facesregular";
                    hole3.field.color = "#FFF";

                    Session.set("answered",false);
                    Session.set("resetTimer",true);
                    Session.set("lessonFinished", false);

                }else{
                    Session.set("lessonFinished", true);
                    $('#gameEndModal').modal();
                }
            }

            if(Session.get("answered") === true){
                Session.set("nextQuestion", true);
            }
        }
        if(typeof stage !== "undefined"){
            stage.update();
        }
    }

    function startAnimation (btnProps) {
        var results;
        createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.7, scaleY: 0.7, x: btnProps.x, y: btnProps.y},300, createjs.Ease.easeInOut).call(function(){
            createjs.Tween.get(ship,{loop: false}).to({scaleX: 2.0, scaleY: 2.0, x: btnProps.xScaled, y:btnProps.yScaled},300, createjs.Ease.easeInOut).call(function(){
                results = (typeof Session.get("results") === "undefined") ? [] : Session.get("results");
                results.push({answer:ship.bigShip.hallText1.text,result:Session.get("question").answer === ship.bigShip.hallText1.text,question:Session.get("question")});
                Session.set("results",results);
                if(Session.get("question").answer === ship.bigShip[btnProps.hallText].text){
                    Session.set("answer", true);
                    Session.set("scored",Session.get("scored") + parseInt(rekenruimte.lessons.findOne({_id:Session.get("selectedLesson")}).points));
                    Session.set("time-seconds",parseInt(Session.get("time-seconds")) + (parseInt(Session.get("time")) - Session.get("timer") + 1));
                    rekenruimte.level3.good.text.text = "GOEDZO!";
                    createjs.Tween.get(rekenruimte.level3.good,{loop: false}).to({y:400},600, createjs.Ease.easeInOut).call(function(){
                        setTimeout(function(){createjs.Tween.get(rekenruimte.level3.good,{loop: false}).to({y:700},700, createjs.Ease.easeInOut)},300);
                    });
                }else{
                    Session.set("time-seconds",parseInt(Session.get("time-seconds")) + (parseInt(Session.get("time")) - Session.get("timer") + 1));
                    rekenruimte.level3.good.text.text = "JAMMER!";
                    createjs.Tween.get(rekenruimte.level3.good,{loop: false}).to({y:400},600, createjs.Ease.easeInOut).call(function(){
                        setTimeout(function(){createjs.Tween.get(rekenruimte.level3.good,{loop: false}).to({y:700},700, createjs.Ease.easeInOut)},300);
                    });
                    Session.set("answer", false);
                }
                createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.2, scaleY: 0.2, x: 550, y: 230},600, createjs.Ease.easeInOut).call(function(){
                    Session.set("answered",true);
                    Session.set("nextQuestion", true);
                    createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.7, scaleY: 0.7, x: 550, y: 230},600, createjs.Ease.easeInOut).call(function(){

                    });
                });
            });
        });
        Session.set("results",results);
    }

    function stopLevel () {
        Session.set("activescreen", "lessonsscreen");
        rekenruimte.deleteStage();
    }

    return {
        good : _good,
        init : _init,
        tick : _tick,
        stopLevel : stopLevel
    }
}());

function initLevel3 () {
    rekenruimte.level3.init();

    gameInitialized = true;
}

function tickLevel3(){
    rekenruimte.level3.tick();
}

