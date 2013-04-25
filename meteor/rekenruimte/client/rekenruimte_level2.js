var ship, blur, rekenruimte = rekenruimte || {};

rekenruimte.level2 = rekenruimte.level2 || (function() {
    var _shake = false, _bigShipInterval = {}, _good = {}, _ship, leftButton, rightButton, forwardButton,
        pos1 = 250, pos2 = 550, pos3 = 550;

    function init () {
        var size,width = $(".gamescreen").width(),height = 450, mask, bigShipInterval, bg, marker, shake = true;
        Session.set("answered",true);
        Session.set("gameStopped", false);
        Session.set("scored",0);
        Session.set("time-seconds",0);
        Session.set("nextQuestion",true);
        rekenruimte.startLevel();
        deltaX = -2;
        gameInitialized = true;

        $("#gamecanvas").attr({width:width,height:height});
        stagecanvasWidth = width;
        stagecanvasHeight = height;
        gameCanvas = document.getElementById("gamecanvas");
        gameCanvas.style.background ='#000';
        gamestage = new createjs.Stage(gameCanvas);

        mask = new createjs.Shape();
        mask.graphics.beginStroke("#000").setStrokeStyle(5,"round").drawRoundRect(0,0,1200,450,60).closePath();
        mask.scaleY = .7;
        mask.scaleX = .7;
        mask.x = 150;
        mask.y = 70;

        bg = new createjs.Shape();
        bg.graphics.beginStroke("#3399CC").beginFill("#3399CC").setStrokeStyle(5).drawRect(0,0,1000,650,0.6).closePath();
        bg.scaleY = 1;
        bg.scaleX = 1;
        bg.x = 50;
        bg.y = 60;
        gamestage.addChild(bg);

        bg.mask = mask;

        planet = new lib.mcPlanet();
        planet.scaleY = .5;
        planet.scaleX = .5;
        planet.x = 250;
        planet.y = 50;
        gamestage.addChild(planet);

        createjs.Tween.get(planet,{loop: true}).to({scaleX: 2.5, scaleY: 2.5, x: -50, y: 500},5000, createjs.Ease.easeInOut).call(function(){
            //
        });

        planet.mask = mask;

        planet2 = new lib.mcPlanet();
        planet2.scaleY = .5;
        planet2.scaleX = .5;
        planet2.x = 750;
        planet2.y = -50;
        gamestage.addChild(planet2);

        createjs.Tween.get(planet2,{loop: true}).wait(1800).to({scaleX: 3.5, scaleY: 3.5, x: 850, y: 700},5000, createjs.Ease.easeInOut).call(function(){
            //
        });

        planet2.mask = mask;

        gamestage.addChild(mask);

        ship = new lib.mcBigShip();
        ship.scaleY = .7;
        ship.scaleX = .7;
        ship.x = 550;
        ship.y = 230;
        gamestage.addChild(ship);

        rekenruimte.level2.bigShipInterval = Meteor.setInterval(function(){
            var value = Math.random();
            if(rekenruimte.level2.shake === true){
                if(value < .33){
                    ship.gotoAndPlay("left");
                }else if(value >= .33 && value < .66){
                    ship.gotoAndPlay("right");
                }else{
                    ship.gotoAndPlay("updown");
                }
            }
            return 0;
        },2000);

        ship.mask = mask;

        marker = new lib.mcMarker();
        marker.scaleY = .7;
        marker.scaleX = .7;
        marker.x = 550;
        marker.y = 550;
        //gamestage.addChild(marker);

        marker.mask = mask;

        leftButton = new lib.mcLftButton();
        leftButton.scaleY = .7;
        leftButton.scaleX = .7;
        leftButton.x = 150;
        leftButton.y = 400;
        leftButton.onClick = handleButton;
        gamestage.addChild(leftButton);

        forwardButton = new lib.mcFwdButton();
        forwardButton.scaleY = .7;
        forwardButton.scaleX = .7;
        forwardButton.x = 580;
        forwardButton.y = 400;
        forwardButton.onClick = handleButton;
        gamestage.addChild(forwardButton);

        rightButton = new lib.mcRhtButton();
        rightButton.scaleY = .7;
        rightButton.scaleX = .7;
        rightButton.x = 980;
        rightButton.y = 400;
        rightButton.onClick = handleButton;
        gamestage.addChild(rightButton);

        rekenruimte.level2.good = new lib.mcNotify();
        rekenruimte.level2.good.text.text = "GOEDZO!";
        rekenruimte.level2.good.text.font = "90px facebook_letter_facesregular";
        rekenruimte.level2.good.x = width/2;
        rekenruimte.level2.good.y = 550;
        rekenruimte.level2.good.color = "#ff0000";
        gamestage.addChild(rekenruimte.level2.good);

        Session.set("nextQuestion", true);

        gamestage.update();
        createjs.Ticker.setFPS(config.FPS);
        createjs.Ticker.addListener(window);
    }

    return {
        shake : _shake,
        bigShipInterval : _bigShipInterval,
        good : _good,
        ship : _ship
    }
}());

//level2.prototype.shake = level2.shake || true;
//level2.good = level2.good || {};
//level2.bigShipInterval = level2.bigShipInterval || {};


function initLevel2 () {
    var size,width = $(".gamescreen").width(),height = 450, mask, bigShipInterval, bg, marker, leftButton, rightButton, forwardButton, pos1 = 250,
        pos2 = 550, pos3 = 550, shake = true;
    Session.set("answered",true);
    Session.set("gameStopped", false);
    Session.set("scored",0);
    Session.set("time-seconds",0);
    Session.set("nextQuestion",true);
    deltaX = -2;
    gameInitialized = true;

    $("#gamecanvas").attr({width:width,height:height});
    stagecanvasWidth = width;
    stagecanvasHeight = height;
    gameCanvas = document.getElementById("gamecanvas");
    gameCanvas.style.background ='#000';
    gamestage = new createjs.Stage(gameCanvas);

    mask = new createjs.Shape();
    mask.graphics.beginStroke("#000").setStrokeStyle(5,"round").drawRoundRect(0,0,1200,450,60).closePath();
    mask.scaleY = .7;
    mask.scaleX = .7;
    mask.x = 150;
    mask.y = 70;

    bg = new createjs.Shape();
    bg.graphics.beginStroke("#3399CC").beginFill("#3399CC").setStrokeStyle(5).drawRect(0,0,1000,650,0.6).closePath();
    bg.scaleY = 1;
    bg.scaleX = 1;
    bg.x = 50;
    bg.y = 60;
    gamestage.addChild(bg);

    bg.mask = mask;

    planet = new lib.mcPlanet();
    planet.scaleY = .5;
    planet.scaleX = .5;
    planet.x = 250;
    planet.y = 50;
    gamestage.addChild(planet);

    createjs.Tween.get(planet,{loop: true}).to({scaleX: 2.5, scaleY: 2.5, x: -50, y: 500},5000, createjs.Ease.easeInOut).call(function(){
        //
    });

    planet.mask = mask;

    planet2 = new lib.mcPlanet();
    planet2.scaleY = .5;
    planet2.scaleX = .5;
    planet2.x = 750;
    planet2.y = -50;
    gamestage.addChild(planet2);

    createjs.Tween.get(planet2,{loop: true}).wait(1800).to({scaleX: 3.5, scaleY: 3.5, x: 850, y: 700},5000, createjs.Ease.easeInOut).call(function(){
        //
    });

    planet2.mask = mask;

    gamestage.addChild(mask);

    ship = new lib.mcBigShip();
    ship.scaleY = .7;
    ship.scaleX = .7;
    ship.x = 550;
    ship.y = 230;
    gamestage.addChild(ship);

    rekenruimte.level2.bigShipInterval = Meteor.setInterval(function(){
        var value = Math.random();
        if(rekenruimte.level2.shake === true){
            if(value < .33){
                ship.gotoAndPlay("left");
            }else if(value >= .33 && value < .66){
                ship.gotoAndPlay("right");
            }else{
                ship.gotoAndPlay("updown");
            }
        }
        return 0;
    },2000);

    ship.mask = mask;

    marker = new lib.mcMarker();
    marker.scaleY = .7;
    marker.scaleX = .7;
    marker.x = 550;
    marker.y = 550;
    //gamestage.addChild(marker);

    marker.mask = mask;

    leftButton = new lib.mcLftButton();
    leftButton.scaleY = .7;
    leftButton.scaleX = .7;
    leftButton.x = 150;
    leftButton.y = 400;
    leftButton.onClick = handleButton;
    gamestage.addChild(leftButton);

    forwardButton = new lib.mcFwdButton();
    forwardButton.scaleY = .7;
    forwardButton.scaleX = .7;
    forwardButton.x = 580;
    forwardButton.y = 400;
    forwardButton.onClick = handleButton;
    gamestage.addChild(forwardButton);

    rightButton = new lib.mcRhtButton();
    rightButton.scaleY = .7;
    rightButton.scaleX = .7;
    rightButton.x = 980;
    rightButton.y = 400;
    rightButton.onClick = handleButton;
    gamestage.addChild(rightButton);

    rekenruimte.level2.good = new lib.mcNotify();
    rekenruimte.level2.good.text.text = "GOEDZO!";
    rekenruimte.level2.good.text.font = "90px facebook_letter_facesregular";
    rekenruimte.level2.good.x = width/2;
    rekenruimte.level2.good.y = 550;
    rekenruimte.level2.good.color = "#ff0000";
    gamestage.addChild(rekenruimte.level2.good);

    Session.set("nextQuestion", true);

    gamestage.update();
    createjs.Ticker.setFPS(config.FPS);
    createjs.Ticker.addListener(window);
}

function tickLevel2(){
    if(typeof Lessons.findOne({_id:Session.get("selectedLesson")}) !== "undefined"){
        if(Session.get("nextQuestion") === true && Session.get("gameStopped") === false){
            questionsLength = Lessons.findOne({_id:Session.get("selectedLesson")}).questions;
            if(questions.length !== questionsLength && Session.get("gameStopped") === false){
                Session.set("nextQuestion", false);
                Session.set("question", rekenruimte.questions.generateSizeQuestion(Lessons.findOne({_id:Session.get("selectedLesson")})));
                questions.push(Session.get("question"));

                ship.bigShip.hallText1.text = Session.get("question")["option1"];
                ship.bigShip.hallText1.font = "47px facebook_letter_facesregular";
                ship.bigShip.hallText1.color = "#FFF";

                ship.bigShip.hallText2.text = Session.get("question")["option2"];
                ship.bigShip.hallText2.font = "47px facebook_letter_facesregular";
                ship.bigShip.hallText2.color = "#FFF";

                ship.bigShip.hallText3.text = Session.get("question")["option3"];
                ship.bigShip.hallText3.font = "47px facebook_letter_facesregular";
                ship.bigShip.hallText3.color = "#FFF";

                Session.set("answered",false);
                Session.set("resetTimer",true);
                Session.set("lessonFinished", false);

            }else{
                Meteor.clearInterval(rekenruimte.level2.bigShipInterval);
                Session.set("lessonFinished", true);
                $('#gameEndModal').modal();
            }
        }

        if(Session.get("answered") === true){
            Session.set("nextQuestion", true);
        }
    }
    gamestage.update();
}

function handleButton(evt){
    var btn = evt.target, results;
    btn.gotoAndPlay("start");
    rekenruimte.level2.shake = false;
    if(btn instanceof lib.mcLftButton){
        createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.7, scaleY: 0.7, x: 750, y: 230},300, createjs.Ease.easeInOut).call(function(){
            createjs.Tween.get(ship,{loop: false}).to({scaleX: 2.0, scaleY: 2.0, x: 1260, y:60},300, createjs.Ease.easeInOut).call(function(){
                results = (typeof Session.get("results") === "undefined") ? [] : Session.get("results");
                results.push({answer:ship.bigShip.hallText1.text,result:Session.get("question").answer === ship.bigShip.hallText1.text,question:Session.get("question")});
                Session.set("results",results);
                if(Session.get("question").answer === ship.bigShip.hallText1.text){
                    Session.set("answer", true);
                    Session.set("scored",Session.get("scored") + parseInt(Lessons.findOne({_id:Session.get("selectedLesson")}).points));
                    Session.set("time-seconds",parseInt(Session.get("time-seconds")) + (parseInt(Session.get("time")) - Session.get("timer") + 1));
                    rekenruimte.level2.good.text.text = "GOEDZO!";
                    createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:400},600, createjs.Ease.easeInOut).call(function(){
                        setTimeout(function(){createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:700},700, createjs.Ease.easeInOut)},300);
                    });
                }else{
                    Session.set("time-seconds",parseInt(Session.get("time-seconds")) + (parseInt(Session.get("time")) - Session.get("timer") + 1));
                    rekenruimte.level2.good.text.text = "JAMMER!";
                    createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:400},600, createjs.Ease.easeInOut).call(function(){
                        setTimeout(function(){createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:700},700, createjs.Ease.easeInOut)},300);
                    });
                    Session.set("answer", false);
                }
                createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.2, scaleY: 0.2, x: 550, y: 230},600, createjs.Ease.easeInOut).call(function(){
                    Session.set("answered",true);
                    Session.set("nextQuestion", true);
                    rekenruimte.level2.shake = true;
                    createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.7, scaleY: 0.7, x: 550, y: 230},600, createjs.Ease.easeInOut).call(function(){

                    });
                });
            });
        });
    }else if(btn instanceof lib.mcRhtButton){
        createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.7, scaleY: 0.7, x: 250, y: 230},300, createjs.Ease.easeInOut).call(function(){
            createjs.Tween.get(ship,{loop: false}).to({scaleX: 2.0, scaleY: 2.0, x: -120, y:60},300, createjs.Ease.easeInOut).call(function(){
                results = (typeof Session.get("results") === "undefined") ? [] : Session.get("results");
                results.push({answer:ship.bigShip.hallText3.text,result:Session.get("question").answer === ship.bigShip.hallText3.text,question:Session.get("question")});
                Session.set("results",results);
                if(Session.get("question").answer === ship.bigShip.hallText3.text){
                    Session.set("answer", true);
                    Session.set("scored",Session.get("scored") + parseInt(Lessons.findOne({_id:Session.get("selectedLesson")}).points));
                    Session.set("time-seconds",parseInt(Session.get("time-seconds")) + (parseInt(Session.get("time")) - Session.get("timer") + 1));
                    rekenruimte.level2.good.text.text = "GOEDZO!";
                    createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:400},600, createjs.Ease.easeInOut).call(function(){
                        setTimeout(function(){createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:700},700, createjs.Ease.easeInOut)},300);
                    });
                }else{
                    Session.set("time-seconds",parseInt(Session.get("time-seconds")) + (parseInt(Session.get("time")) - Session.get("timer") + 1));
                    rekenruimte.level2.good.text.text = "JAMMER!";
                    createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:400},600, createjs.Ease.easeInOut).call(function(){
                        setTimeout(function(){createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:700},700, createjs.Ease.easeInOut)},300);
                    });
                    Session.set("answer", false);
                }
                createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.2, scaleY: 0.2, x: 550, y: 230},600, createjs.Ease.easeInOut).call(function(){
                    Session.set("answered",true);
                    Session.set("nextQuestion", true);
                    rekenruimte.level2.shake = true;
                    createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.7, scaleY: 0.7, x: 550, y: 230},600, createjs.Ease.easeInOut).call(function(){

                    });
                });
            });
        });
    }else{
        createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.7, scaleY: 0.7, x: 550, y: 230},300, createjs.Ease.easeInOut).call(function(){
            createjs.Tween.get(ship,{loop: false}).to({scaleX: 2.0, scaleY: 2.0, x: 580, y:60},300, createjs.Ease.easeInOut).call(function(){
                results = (typeof Session.get("results") === "undefined") ? [] : Session.get("results");
                results.push({answer:ship.bigShip.hallText2.text,result:Session.get("question").answer === ship.bigShip.hallText2.text,question:Session.get("question")});
                Session.set("results",results);
                if(Session.get("question").answer === ship.bigShip.hallText2.text){
                    Session.set("answer", true);
                    Session.set("scored",Session.get("scored") + parseInt(Lessons.findOne({_id:Session.get("selectedLesson")}).points));
                    Session.set("time-seconds",parseInt(Session.get("time-seconds")) + (parseInt(Session.get("time")) - Session.get("timer") + 1));
                    rekenruimte.level2.good.text.text = "GOEDZO!";
                    createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:400},600, createjs.Ease.easeInOut).call(function(){
                        setTimeout(function(){createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:700},700, createjs.Ease.easeInOut)},300);
                    });
                }else{
                    Session.set("time-seconds",parseInt(Session.get("time-seconds")) + (parseInt(Session.get("time")) - Session.get("timer") + 1));
                    rekenruimte.level2.good.text.text = "JAMMER!";
                    createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:400},600, createjs.Ease.easeInOut).call(function(){
                        setTimeout(function(){createjs.Tween.get(rekenruimte.level2.good,{loop: false}).to({y:700},700, createjs.Ease.easeInOut)},300);
                    });
                    Session.set("answer", false);
                }
                createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.2, scaleY: 0.2, x: 550, y: 230},600, createjs.Ease.easeInOut).call(function(){
                    Session.set("answered",true);
                    Session.set("nextQuestion", true);
                    rekenruimte.level2.shake = true;
                    createjs.Tween.get(ship,{loop: false}).to({scaleX: 0.7, scaleY: 0.7, x: 550, y: 230},600, createjs.Ease.easeInOut).call(function(){

                    });
                });
            });
        });
    }
    Session.set("results",results);
}