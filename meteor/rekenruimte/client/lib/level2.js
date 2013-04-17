function initLevel2 () {
    var size,width = $(".gamescreen").width(),height = 450;

    Session.set("gameStopped", false);
    Session.set("scored",0);
    Session.set("time-seconds",0);
    deltaX = -2;
    gameInitialized = true;

    $("#gamecanvas").attr({width:width,height:height});
    stagecanvasWidth = width;
    stagecanvasHeight = height;
    gameCanvas = document.getElementById("gamecanvas");
    gamestage = new createjs.Stage(gameCanvas);
    gamestage.update();
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addListener(window);
}

function tickLevel2(){

}