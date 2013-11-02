"use strict";

this.rekenruimte = this.rekenruimte || {};

this.rekenruimte.level1 = this.rekenruimte.level1 || (function() {
    var stage,spaceShips = [], spiral, rock, rock2, planet,  _good = {}, stars = [], starLength = 16, moon, questions = [];

    function _init () {
        questions = [];
        var width = $(".gamescreen").width(),height = 450;

        stage = rekenruimte.init();
        rekenruimte.initGameLevel();
        rekenruimte.setBackgroundColor("#3399CC");

        spiral = new lib.mcSpiral();
        spiral.scaleY = 1;
        spiral.scaleX = 1;
        spiral.x = 800;
        spiral.y = 150;
        stage.addChild(spiral);

        planet = new lib.mcPlanet();
        planet.scaleY = 1;
        planet.scaleX = 1;
        planet.x = 200;
        planet.y = 150;
        stage.addChild(planet);

        generateStars();

        moon = new lib.mcMoon();
        moon.scaleY = .5;
        moon.scaleX = .5;
        moon.x = 300;
        moon.y = 150;
        stage.addChild(moon);

        rock = new lib.mcRock();
        rock.scaleY = Math.random() + .1;
        rock.scaleX = Math.random() + .1;
        rock.x = 500;
        rock.y = -250;
        stage.addChild(rock);

        moveRock(rock);

        rock2 = new lib.mcRock();
        rock2.scaleY = Math.random() + .5;
        rock2.scaleX = Math.random() + .5;
        rock2.x = 200;
        rock2.y = -150;
        stage.addChild(rock2);

        moveRock(rock2);

        rekenruimte.level1.good = new lib.mcNotify();
        rekenruimte.level1.good.text.text = "GOEDZO!";
        rekenruimte.level1.good.text.font = "90px facebook_letter_facesregular";
        rekenruimte.level1.good.x = width/2;
        rekenruimte.level1.good.y = 550;
        rekenruimte.level1.good.color = "#ff0000";
        stage.addChild(rekenruimte.level1.good);

        if(typeof stage !== "undefined"){
            stage.update();
        }

        createjs.Ticker.setFPS(window.config.FPS);
        createjs.Ticker.addListener(window);
    }

    function _tick () {
        var spaceShip,questionsLength, questionIndex,score;

        if(typeof rekenruimte.lessons.findOne({_id:Session.get("selectedLesson")}) !== "undefined"){
            if(spaceShips.length === 0 && Session.get("gameStopped") === false){
                moveRock(rock);
                moveRock(rock2);
                questionsLength = rekenruimte.lessons.findOne({_id:Session.get("selectedLesson")}).questions;
                if(questions.length !== questionsLength){
                    Session.set("question", rekenruimte.generateSizeQuestion(rekenruimte.lessons.findOne({_id:Session.get("selectedLesson")})));
                    questions.push(Session.get("question"));

                    //  SPACESHIP 1
                    var spaceShip = (Math.random() > 0.5) ? createSpaceShip(rekenruimte.stagecanvasWidth + 100,100,questionIndex,handleClick,"option1") : createRocketShip(rekenruimte.stagecanvasWidth + 100,100,questionIndex,handleClick,"option1");
                    stage.addChild(spaceShip);
                    createjs.Tween.get(spaceShip).wait(Math.random() * 500).to({x: rekenruimte.stagecanvasWidth - 500},1000, createjs.Ease.elasticInOut).call(function(){
                        //
                    });
                    spaceShips.push(spaceShip);

                    //  SPACESHIP 2
                    spaceShip = (Math.random() > 0.5) ? createSpaceShip(rekenruimte.stagecanvasWidth + 100,220,questionIndex,handleClick,"option2") : createRocketShip(rekenruimte.stagecanvasWidth + 100,220,questionIndex,handleClick,"option2");
                    stage.addChild(spaceShip);
                    createjs.Tween.get(spaceShip).wait(Math.random() * 500).to({x: 300},1000, createjs.Ease.elasticInOut).call(function(){
                        //
                    });
                    spaceShips.push(spaceShip);

                    //  SPACESHIP 3
                    spaceShip = (Math.random() > 0.5) ? createSpaceShip(rekenruimte.stagecanvasWidth + 100,350,questionIndex,handleClick,"option3") : createRocketShip(rekenruimte.stagecanvasWidth + 100,350,questionIndex,handleClick,"option3");
                    stage.addChild(spaceShip);
                    createjs.Tween.get(spaceShip).wait(Math.random() * 500).to({x: rekenruimte.stagecanvasWidth - 200},1000, createjs.Ease.elasticInOut).call(function(){
                        //
                    });
                    spaceShips.push(spaceShip);

                    Session.set("answered",false);
                    Session.set("resetTimer",true);
                    Session.set("lessonFinished", false);
                }else{
                    Session.set("lessonFinished", true);
                    $('#gameEndModal').modal();
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

            removeSpaceShips();
        }
        if(typeof stage !== "undefined"){
            stage.update();
        }
    }

    function generateStars () {
        var star, size;
        for(var i = 0;i < starLength;i++){
            size = Math.random() * .7;
            star = new lib.mcStar();
            star.scaleX = size;
            star.scaleY = size;
            star.x = 1000 * Math.random();
            star.y = 450 * Math.random();
            stage.addChild(star);
            createjs.Tween.get(star,{loop: true}).to({rotation: 360},10000, createjs.Ease.easeInOut).call(function(){
                //
            });
            stars.push(star);
        }
    }

    function createSpaceShip (xPos,yPos,questionIndex,handle,option) {
        var spaceship = new lib.mcSpaceShip();
        spaceship.y = yPos;
        spaceship.x = xPos;
        spaceship.scaleY = .7;
        spaceship.scaleX = .7;
        spaceship.spaceShip.spaceText.text = Session.get("question")[option];
        spaceship.spaceShip.spaceText.font = "47px facebook_letter_facesregular";
        spaceship.spaceShip.spaceText.color = "#000000";
        spaceship.correctSpaceShip.correctSpaceText.text = Session.get("question")[option];
        spaceship.correctSpaceShip.correctSpaceText.font = "47px facebook_letter_facesregular";
        spaceship.inCorrectSpaceShip.inCorrectSpaceText.text = Session.get("question")[option];
        spaceship.inCorrectSpaceShip.inCorrectSpaceText.font = "47px facebook_letter_facesregular";
        spaceship.onClick = handle;
        return spaceship;
    }

    function createRocketShip (xPos,yPos,questionIndex,handle,option) {
        var rocketship = new lib.mcRocketShip();
        rocketship.y = yPos;
        rocketship.x = xPos;
        rocketship.scaleY = .7;
        rocketship.scaleX = .7;
        rocketship.rocketShip.rocketText.text = Session.get("question")[option];
        rocketship.rocketShip.rocketText.font = "47px facebook_letter_facesregular";
        rocketship.correctRocketShip.correctRocketText.text = Session.get("question")[option];
        rocketship.correctRocketShip.correctRocketText.font = "47px facebook_letter_facesregular";
        rocketship.inCorrectRocketShip.inCorrectRocketText.text = Session.get("question")[option];
        rocketship.inCorrectRocketShip.inCorrectRocketText.font = "47px facebook_letter_facesregular";
        rocketship.onClick = handle;
        return rocketship;
    }

    function hideSpaceShips(spaceShip){
        var def = $.Deferred();
        createjs.Tween.get(spaceShip).to({x: -100, color:{}},1000, createjs.Ease.elasticInOut).call(function(){
            def.resolve();
        });
        return def.promise();
    }

    function removeSpaceShips () {
        var spaceShip, score;
        for (var i=spaceShips.length-1; i>=0; i--) {
            spaceShip = spaceShips[i];
            if (spaceShip.x < -100 || spaceShip.y > 550) {
                spaceShips.splice(i,1);
                stage.removeChild(spaceShip);
                score = rekenruimte.scores.findOne({lesson_id:Session.get("selectedLesson"),user_id:Meteor.userId()});
            }
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


    function moveRock (rock) {
        createjs.Tween.get(rock,{loop: false,override:true}).to({rotation: 360,x:Math.random() * 700,y:-250},Math.random() * 10000, createjs.Ease.easeInOut).call(function(event){
            createjs.Tween.get(event.target,{loop: false,override:true}).to({rotation: 360,x:Math.random() * 500,y:1000},10000, createjs.Ease.easeInOut);
        });
    }

    function handleClick(eventObj) {
        var ship = eventObj.target, results;
        moonReaction();
        if(Session.get("answered") === false){
            results = (typeof Session.get("results") === "undefined") ? [] : Session.get("results");
            if(ship.spaceShip){
                results.push({answer:ship.spaceShip.spaceText.text,result:Session.get("question").answer === ship.spaceShip.spaceText.text,question:Session.get("question")});
            }else{
                results.push({answer:ship.rocketShip.rocketText.text,result:Session.get("question").answer === ship.rocketShip.rocketText.text,question:Session.get("question")});
            }
            Session.set("results",results);
            if(typeof ship.spaceShip !== "undefined" && Session.get("question").answer === ship.spaceShip.spaceText.text || typeof ship.rocketShip !== "undefined" && Session.get("question").answer === ship.rocketShip.rocketText.text){
                ship.gotoAndPlay("correct");
                Session.set("answer", true);
                Session.set("scored",Session.get("scored") + parseInt(rekenruimte.lessons.findOne({_id:Session.get("selectedLesson")}).points));
                Session.set("time-seconds",parseInt(Session.get("time-seconds")) + (parseInt(Session.get("time")) - Session.get("timer") + 1));
                rekenruimte.level1.good.text.text = "GOEDZO!";
                createjs.Tween.get(rekenruimte.level1.good,{loop: false}).to({y:400},600, createjs.Ease.easeInOut).call(function(){
                    setTimeout(function(){createjs.Tween.get(rekenruimte.level1.good,{loop: false}).to({y:700},700, createjs.Ease.easeInOut)},300);
                });
            }else{
                Session.set("time-seconds",parseInt(Session.get("time-seconds")) + (parseInt(Session.get("time")) - Session.get("timer") + 1));
                rekenruimte.level1.good.text.text = "JAMMER!";
                createjs.Tween.get(rekenruimte.level1.good,{loop: false}).to({y:400},600, createjs.Ease.easeInOut).call(function(){
                    setTimeout(function(){createjs.Tween.get(rekenruimte.level1.good,{loop: false}).to({y:700},700, createjs.Ease.easeInOut)},300);
                });
                ship.gotoAndPlay("incorrect");
                Session.set("answer", false);
            }
            Session.set("answered",true);
            createjs.Tween.get(ship).to({x: -100, color:{}},1000, createjs.Ease.elasticInOut).call(function(){console.log("finished 1")});
        }
    }

    function _stopLevel () {
        var processSpaceShipsDeferred = [];
        for (var i=spaceShips.length-1; i>=0; i--) {
            var spaceShip = spaceShips[i];
            processSpaceShipsDeferred.push(hideSpaceShips(spaceShip,i));
        }
        $.when.apply($, processSpaceShipsDeferred).then(function(){
            Session.set("activescreen", "lessonsscreen");
            rekenruimte.deleteStage();
        });
    }

    return {
        good : _good,
        tick : _tick,
        init : _init,
        stopLevel : _stopLevel
    }
})();
