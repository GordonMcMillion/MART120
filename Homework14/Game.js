
var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shapeXSpeeds = [];
var shapeYSpeeds = [];


var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);
   
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }
}

function draw()
{
    background(12,45,78);
    stroke(0);
    fill(35);

    createBorders();
    
    createExit();

    createCharacter();

    createMovement();

    createObstacles();

    createWin();

    createObstacle(); 

    createBoundry();
}

 fill(13, 145, 14);
 
 for (var i = 0; i < shapeXs.length; i++) {
     circle(shapeXs[i], shapeYs[i], diameters[i]);
     shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

     shapeXs[i] += shapeXSpeeds[i];
     shapeYs[i] += shapeYSpeeds[i];
     if (shapeXs[i] > width) {
         shapeXs[i] = 0;
     }
     if (shapeXs[i] < 0) {
         shapeXs[i] = width;
     }
     if (shapeYs[i] > height) {
         shapeYs[i] = 0;
     }
     if (shapeYs[i] < 0) {
         shapeYs[i] = height;
     }
 }
function createBorders()
{
    fill(105,15,14);

    rect(0,0,width,10);
   
    rect(0,0,10,height);
    
    rect(0, height-10,width, 10);
   
    rect(width-10,0,10,height-50);

}

function createCharacter()
{
   
    fill(16,4,13);
    square(characterX,characterY,25);
}

function createMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function createObstacle()
{
    fill(12,130,140);
    square(mouseShapeX, mouseShapeY, 15);
}
function createWin()
{
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win The Game!", width/2-50, height/2-50);
    }
}
function createObstacles()
{
    circle(shapeX, shapeY, 10);

     
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


   shapeX += shapeXSpeed;
   shapeY += shapeYSpeed;
   
}
function createBoundry()
{
    
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

}
function createExit()
{
    textSize(12);
    text("EXIT", width-50,height-50)
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
