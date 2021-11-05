var headX = 250;
var headY = 350;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 44;
var count = 0;
var sizeDirection = 2;

var Size = 55;
var count = 20;
var sizeDirection = 2;


var x, y;
var speedX, speedY;

function setup()
{
     createCanvas(500,600);
     x = 0;
     y = 0; 
     speedX = 1;
     speedY = 1
}


 function draw()
{
    background(120);
    textSize(Size);
    Size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 5;
    }
    text("the scream", 20,80);
    
    //hair
    line(130,175,175,250);
    line(325,250,360,175);
    
    //head
    fill('#fae');
    circle(headX,headY,200);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
    
    //body
    fill(30,25,120);
    rect(200,bodyY,100,450);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }
    
    //arms
    x = x + speedX;
    y = y + speedY; 
    ellipse(x, y,30,200);

    ellipse(345,400,30,200);
    //face
    fill('#222222');
    circle(225,320,20);
    circle(275,320,20);
    fill(51);
    ellipse(250,375,50,60);
    
    
    //name
    fill('rgb(0,255,0)');
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Gordon McMillion",270,500 );

}
