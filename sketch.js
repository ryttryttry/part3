var runway,runwayImage,plane,planeImage,city0,city0Image,city1,city1Image,r,rI
var speed = 1

function preload(){
  runwayImage=loadImage("runway.webp")
  planeImage=loadImage("plane.png")
  city0Image=loadImage("city0.jpg")
  city1Image=loadImage("city1.1.jpg")
  rI=loadImage("r.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
   runway=createSprite(windowWidth/2,windowHeight/2,width,height)

  runway.addImage(runwayImage)
  runway.scale=2.3
  runway.visible=true
  city0=createSprite(windowWidth/2,windowHeight/2,width,height)

  city0.addImage("city00",city0Image)

  city0.scale=4.95
  city0.visible=false

  city1=createSprite(windowWidth/2,windowHeight/2,width,height)
  
  city1.addImage(city1Image)
  city1.visible=false
  city1.scale=5.2
  plane=createSprite(windowWidth/2,windowHeight/2,width,height)

  plane.addImage(planeImage)
  r=createSprite(1480,635,50,20)

  r.addImage(rI)


  r.visible=true
 
 // thing1=createSprite(windowWidth/2,725,width,10)
 // thing1.shapeColor="red"
}

function draw() {
  background("green")
 
  if(keyDown("UP_ARROW")){
    plane.y=plane.y-(speed)
    plane.scale=plane.scale-(speed/500)
    console.log(plane.y)
    console.log(plane.scale)
    
  }

  if(keyDown("DOWN_ARROW")){
    plane.y=plane.y+ (speed)
    plane.scale=plane.scale+(speed/500)
  }
  if(keyDown("LEFT_ARROW")){
    plane.x= plane.x-(speed/2)
    plane.rotationSpeed=1
    setTimeout(plane,2000)
    plane.rotationSpeed=0
  }
  if(keyDown("RIGHT_ARROW")){
    plane.x= plane.x+(speed/2)
    plane.rotationSpeed=-1
  //  setInterval(2000)
   // plane.rotationSpeed=0
  }
  if(plane.y<1.6 && runway.visible==true){
    runway.visible=false
    city0.visible=true
    plane.y=550
    plane.scale=1
 
  }
  
  if(plane.y<100 && city0.visible==true){
    runway.visible=false
    city0.visible=false
    city1.visible=true
    plane.y=550
    plane.scale=1

  }

   if(plane.y>625 && city1.visible==true){
    runway.visible=false
    city0.visible=true
    city1.visible=false
    plane.y=50
    plane.scale=0.1
   }
   if(plane.y>625 && city0.visible==true){
    runway.visible=true
    city0.visible=false
    plane.scale=0.25
    plane.y=50
   }
  
   if(keyDown("R")){
    runway.visible=true
    city0.visible=false
    city1.visible=false
    plane.scale=1
    plane.y=361.5
    plane.x=758.5
   }
   if(plane.x<=200 || plane.x>=1360){
    plane.x=758.5
   }
   if(keyDown("1")){
    speed=2
    
   }
   if(keyDown("2")){
    speed=4
   }
   if(keyDown("3")){
    speed=5
   }
   if(keyDown("4")){
    speed=6
   }
   if(keyDown("5")){
    speed=7
   }
   if(keyDown("6")){
    speed=8
   }
   if(keyDown("7")){
    speed=9
   }
   if(keyDown("8")){
    speed=10
   }
   if(keyDown("9")){
    speed=12
   }
  drawSprites();
}

