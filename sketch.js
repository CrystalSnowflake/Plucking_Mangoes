//module aliases
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//variables
var engine, world;

var birdsImage, girlImage, backgroundImage, treeImage;

var birds, girl, tree;
var ground, stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var sling;

function preload(){
	birdsImage = loadImage("Photos/birds.png");
	girlImage = loadImage("Photos/girl.png");
	backgroundImage = loadImage("Photos/hills.png");
	treeImage = loadImage("Photos/tree.png");
}

function setup(){
	createCanvas(windowWidth, windowHeight)         

	//making the world
	engine = Engine.create(engine); 
	world = engine.world

	rectMode(CENTER)
	imageMode(CENTER)

	//birds
	birds = Bodies.rectangle(windowWidth/4, windowHeight/10, 300, 300, {isStatic: true});
	World.add(world, birds);
	//tree
	tree = Bodies.rectangle(1025, 270, 550, 550, {isStatic: true});
	World.add(world, tree)
	//girl
	girl = Bodies.circle(240, 450, 100, {isStatic: true});
	World.add(world, girl);
	
	//mangoes
	mango1 = new Mango(940, 100);
	mango2 = new Mango(1060, 40);
	mango3 = new Mango(905, 215);
	mango4 = new Mango(1030, 190);
	mango5 = new Mango(985, 290);
	mango6 = new Mango(1140, 250);
	mango7 = new Mango(1120, 125);

	stone = new Stone(325, 454);

	/**PROBLEM**/
	//sling = new Connect(stone.body, {x: 325, y: 454});

	//ground on which everything rests
	ground = Bodies.rectangle(windowWidth/2, windowHeight - 40, windowWidth + 400, windowHeight/5, {isStatic: true});
	World.add(world, ground);

	Engine.run(engine)
}

function draw(){
	background(255)
	imageMode(CENTER)
	image(backgroundImage, windowWidth/2, windowHeight/2, windowWidth, windowHeight);

	fill(255)
	text(Math.round(mouseX) + ", " + Math.round(mouseY), windowWidth/2, windowHeight-10)

	image(birdsImage, birds.position.x, birds.position.y, 400, 200);
	image(treeImage, tree.position.x, tree.position.y, 550, 550);
	image(girlImage, girl.position.x, girl.position.y, 200, 200);

	mango1.show();
	mango2.show();
	mango3.show();
	mango4.show();
	mango5.show();
	mango6.show();
	mango7.show();
	stone.show();

	/**displaying the constraint**/
	//sling.show();
}