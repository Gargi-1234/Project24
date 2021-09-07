const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//var stone1, stone1Img, stone2;
var ironBar, ironBarImg, iron1;
var rubber, rubberBall, rubberImg
var stone1, stone1Img, stone2 

var glass, glassBall, groundSprite

var engine, world;
var stone, bouncyBall,hammer;
var woodenCube, gem , feather

function preload(){
	stone1Img = loadImage("images/stone.png")
	ironBarImg = loadImage("images/ironBar.png")
	rubberImg = loadImage("images/rubber.png")
	glassImg = loadImage("images/glass.png")
	glass2Img = loadImage("images/glass2.png")
}

function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(700,height,1400,20)
    iron = new Iron(150,350);
    stone = new Stone(350,320,100,100);
    bouncyBall=new BouncyBall(550,350,70);
    // bouncyBall=BouncyBall(900,450,70);
    // bouncyBall=new (900,450,70);
    // bouncyBall=new BouncyBall();
	//woodenCube = new WoodenCube(20,20,20,92)
    hammer = new Hammer(10,100);
	gem =  new Diamond(850,350,70)
	woodenCube = new WoodenCube(700,320,70,70);
	feather = new Feather(1025,320,100,50)

	var box_options ={
		isStatic : true
	}


	box3 = Bodies.rectangle(0,300,20,600,box_options)
	World.add(world,box3)

	box4 = Bodies.rectangle(1400,300,20,600,box_options)
	World.add(world,box4)

	var glass_options ={
		restitution:0.7,
          friction:0.3,
          density:2.0
	}

	glass = Bodies.circle(1220,320,35)
	World.add(world,glass)

	glassBall = createSprite(10,10,10,10)
	glassBall.addImage(glassImg)
	glassBall.scale = 0.35

	groundSprite = createSprite(700,600,1400,20)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


	fill("brown")
	rectMode(CENTER)
	rect(box3.position.x,box3.position.y,20,600)

	fill("brown")
	rectMode(CENTER)
	rect(box4.position.x,box4.position.y,20,600)

	if(groundSprite.isTouching(glassBall)){
		glassBall.addImage(glass2Img)
		glassBall.changeImage(glass2Img)
		glassBall.scale = 0.40
	}

	glassBall.x = glass.position.x
	glassBall.y = glass.position.y

    stone.display();
    plane.display();
   
    bouncyBall.display();
    iron.display()  
    hammer.display();

	gem.display()
	feather.display()
	woodenCube.display();
 drawSprites()
}
