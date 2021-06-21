/** @type {HTMLCanvasElement} */

var myGameCanvas = document.getElementById("myGameCanvas");

myGameCanvas.height = 600;
myGameCanvas.width = 800;

var myGameContext = myGameCanvas.getContext("2d");

function drawBackground() {
    myGameContext.fillStyle = "#CDC9C9";
    myGameContext.fillRect(0, 0, 800, 600);
}

function drawBlock(position) {
    myGameContext.save();
    myGameContext.fillStyle = "#FFFFFF";
    myGameContext.fillRect(position.x - 25, position.y - 25, 50, 50);
    myGameContext.restore();
}

var XMove = (function () {
    var XDir = "right";
    return function () {
        return 
            console.log(XDir);
            var x = position.x;
            if (XDir == "right") {
                x++;
                if (x > 800) {
                    XDir = "left";
                }
            };
            if (Xdir == "left") {
                x--;
                if (x < 0) {
                    XDir = "right";
                }
            }
        
    }
})();

function blockMove() {
    XMove();
}

function drawWhile() {
    myGameContext.clearRect(0, 0, 800, 600);
    blockMove();
    drawBackground();
    drawBlock(position);
    requestAnimationFrame(drawWhile);
}

var position = {
    x: 10,
    y: 10
}

drawWhile();