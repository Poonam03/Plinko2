  const Engine = Matter.Engine;
  const World = Matter.World;
   const Events = Matter.Events;
  const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var turn=0;
var gameState="play"


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
   line(0,400,800,400)

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
      plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
        plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
        plinkos.push(new Plinko(j,375));
    }
    
  }

function draw() 
{
  background("black");
  fill("white")
  textSize(20)
  text("Score : "+score,20,30);
  text("Turn : "+turn,700,30);
  Engine.update(engine);
  var t=20
  var a=260
  var b=580
  for (var s = 0; s <3; s++) 
    {
      
      textSize(15)
      fill("white")
       text("500",t,550)
       t=t+80
    }
    for (var s = 0; s <4; s++) 
    {
     
      textSize(15)
      fill("white")
       text("100",a,550)
       a=a+80 
    }
    for (var s = 0; s <3; s++) 
    {
     
      textSize(15)
      fill("white")
       text("200",b,550)
       b=b+80 
    }
    for (var i = 0; i < plinkos.length; i++) 
   {
     plinkos[i].display();
   }
   

    if(particle !=null)
    { 
      particle.display()
      {
        if(particle.body.position.y>500)
        {
          if(particle.body.position.x<300)
          {
            score=score+500;
            particle=null;
            if(turn>=5)
            {
              gameState="end";
            }
          }
       else if(particle.body.position.x>301 && particle.body.position.x<600 )
          {
            score=score+100;
            particle=null;
            if(turn>=5)
            {
              gameState="end";
            }
          }
        else if(particle.body.position.x>601 && particle.body.position.x<900 )
          {
            score=score+200;
            particle=null;
            if(turn>=5)
            {
              gameState="end";
            }
          }
        }
      }
    }
   for (var m = 0; m < divisions.length; m++) 
   {     
     divisions[m].display();
   }
   
   ground.display();
   if(turn>=5 && gameState==="end")
   {
     textSize(35)
     fill("white")
     text("Game Over", 300,320);
     text("Press Space to Restart", 250,420);
   }
   
}
function mousePressed()
{
  if(gameState !== "end")
  {
    turn++;
    particle=new Particle(mouseX,10,10,10)
   // alert("rror")
  }
}
function keyPressed()
{
  if(keyCode===32 && gameState==="end")
  {
    gameState="play"
    score=0
    turn=0
  }
}