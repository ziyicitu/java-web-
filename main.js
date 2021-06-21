/** @type {HTMLCanvasElement} */

var myGameCanvas = document.getElementById("myGameCanvas");
var myGameContext = myGameCanvas.getContext("2d");

function gameInit(){
    myGameCanvas.height = gameHight;
    myGameCanvas.width = gameWidth;
    setGetMousePosition();
}

function drawBackground() {
    myGameContext.fillStyle = "#CDC9C9";
    myGameContext.fillRect(0, 0, gameWidth, gameHight);
}

function drawBlock(position) {
    myGameContext.save();
    myGameContext.fillStyle = "#FFFFFF";
    myGameContext.fillRect(position.x - blockSize/2, position.y - blockSize/2, blockSize, blockSize);
    myGameContext.restore();
}

var XMove = (function () {
    var XDir = "right";
    return function(){
            var x = blockPosition.x;
            if (XDir == "right") {
                x += blockSpeed;
                if (x > (gameWidth - blockSize/2)) {
                    XDir = "left";
                }
            };
            if (XDir == "left") {
                x -= blockSpeed;
                if (x < (blockSize/2)) {
                    XDir = "right";
                }
            }
            blockPosition.x = x;
    }
})();

var YMove = (function(){
    var YDir = "down";
    return function(){
        var y = blockPosition.y;
        if(YDir == "down"){
            y += blockSpeed;
            if(y > (gameHight - blockSize/2)){
                YDir = "up";
            }
        };
        if(YDir == "up"){
            y -= blockSpeed;
            if(y < (blockSize/2)){
                YDir = "down";
            }
        }
        blockPosition.y = y;
    }
})();

function blockMove() {
    XMove();
    YMove();
}

function drawWhile() {
    myGameContext.clearRect(0, 0, 800, 600);

    eventUpdata();
    drawObject();

    requestAnimationFrame(drawWhile);
}

function drawObject(){ //绘图
    drawBackground();
    drawBlock(blockPosition);
    if(gameStatu == "menu"){
        drawTitle();
    }  
}

function eventUpdata(){ //事件处理
    if(gameStatu == "menu"){
        menuStatu();
    } else{
        playingStatu();
    }
    
}

function menuStatu(){ //菜单界面事件处理
    blockPosition = {
        x:400,
        y:400
    }

    if(isMouseClick() && isMouseInBlock()){
        gameStatu = "playing";
    }
}

function drawTitle(){
    myGameContext.save();
    myGameContext.fillStyle = "#FFFFFF";
    myGameContext.font = "50px sans-serif";
    myGameContext.fillText("WHITE NOT ALONE", 180, 100);
    myGameContext.restore();
}

function playingStatu(){ //游戏界面事件处理
    blockMove();
    if(!isMouseInBlock()){
        gameStatu = "menu";
    }   
}

var isMouseClick= (function(){
    var clicked = false;
    myGameCanvas.onclick = function(){
        clicked = true;
    }
    return function(){
        if(clicked == true){
            clicked = false;
            return true;
        } else {
            return false;
        }
    }
})();

function setGetMousePosition(){
    myGameCanvas.onmousemove = (event)=>{
        mousePosition.x = event.offsetX;
        mousePosition.y = event.offsetY;
    }
}

function isMouseInBlock(){
    if(Math.abs(blockPosition.x - mousePosition.x) > blockSize/2){
        return false;
    }
    
    if(Math.abs(blockPosition.y - mousePosition.y) > blockSize/2){
        return false;
    }

    return true;
}

var blockPosition = {
    x: 400,
    y: 400
}

var mousePosition = {
    x:0,
    y:0
}

var blockSpeed = 2;
var blockSize = 100;
var gameWidth = 800;
var gameHight = 600;
var gameStatu = "menu";

function main(){
    gameInit();
    drawWhile();
}

main();