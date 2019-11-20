var diam1=5;
var y;
var changeDirection;
function setup() {
  createCanvas(1040,840);
    y = 15;
	changeDirection = false;
}
function draw() {
  background(180,189,255);
    this.canvas.style.cursor = "none";
     //OBSTACLES
    fill(255,214,180);
    stroke(255,245,180);
    strokeWeight(5);
rect(250,500,300,200);
    rect(250,50,300,400);
    line(550,700,550,840);
    //ARROW
    fill(184, 173, 93);
    strokeWeight(0);
    rect(300,590,120,25);
    triangle(420,545,420,665,520,605);    
    //DANGER SIGN
    fill(255, 255, 255);
    stroke(255, 45, 0);
    strokeWeight(5);
    triangle(300,360,500,360,400,240);
    fill(0, 0, 0);
    strokeWeight(0);
    circle(400,340,25)
    rect(390,260,20,60);
    //MYSTERIOUS OBJECT
    fill(0, 216, 255);
    stroke(0, 166, 255);
    strokeWeight(5);
    ellipse(985,730,120,120);
    ellipse(985,730,diam1,diam1);
     diam1=diam1+2;          
   if(diam1>120){       
      diam1=5;    
   }else{       
     diam1=diam1+2;   
   }
    //LABYRINTH
    stroke(0, 99, 255);
    strokeWeight(5);
    line(600,80,600,840);
    line(720,0,720,40);
    line(760,40,1000,40);
    line(1000,40,1000,640);
    line(1000,640,1040,640);
    line(760,40,760,80);
    line(760,80,640,80);
    line(800,80,960,80);
    line(600,120,960,120);
    line(960,80,960,240);
    line(640,160,920,160);
    line(920,160,920,280);
    line(920,280,960,280);
    line(960,280,960,600);
    line(960,600,1000,600);
    line(600,200,880,200);
    line(880,200,880,240);
    line(880,240,640,240);
    line(880,280,640,280);
    line(880,280,880,360);;
    line(880,320,920,320);
    line(920,320,920,560);
    line(840,560,960,560);
    line(960,640,920,640);
    line(920,600,920,720);
    line(640,280,640,320);
    line(600,360,680,360);
    line(680,440,680,320);
    line(720,280,720,360);
    line(680,400,760,400);
    line(760,400,760,320);
    line(760,320,840,320);
    line(880,360,800,360);
    line(800,360,800,440);
    line(800,400,880,400);
    line(880,400,880,440);
    line(800,440,840,440);
    line(680,440,760,440);
    line(640,400,640,480);
    line(640,480,880,480);
    line(920,520,840,520);
    line(920,600,800,600);
    line(800,560,800,520);
    line(800,520,640,520);
    line(640,520,640,800);
    line(640,800,680,800);
    line(680,800,680,720);
    line(640,680,720,680);
    line(720,680,720,800);
    line(720,800,760,800);
    line(760,800,760,560);
    line(760,640,680,640);
    line(680,640,680,560);
    line(720,640,720,560);
    line(800,640,800,800);
    line(800,800,960,800);
    line(960,800,960,840);
    line(920,800,920,760);
    line(920,760,840,760);
    line(920,720,840,720);
    line(840,720,840,680);
    line(840,680,880,680);
    line(880,680,880,640);
    line(880,640,800,640);
    //TEXT
    fill(1, 70, 157);
    strokeWeight(0);
text('Get to the mysterious object!!!',40,40);
    textSize(50);
    fill(255, 45, 0);
    strokeWeight(0);
    text('Danger!!!',300,440);
        textSize(50);
    //BOUNSING BALLS
    fill(24, 245, 6);
    strokeWeight(0);
    ellipse(150,y,50);
	if(y>height){
		changeDirection=true}
	else if (y<=0){
		changeDirection=false}
	if (y>=0 && changeDirection == false){
		y=y+15}
	else if(changeDirection == true){
		y=y-15}
    ellipse(800,y,50);
	if(y>height){
		changeDirection=true}
	else if (y<=0){
		changeDirection=false}
	if (y>=0 && changeDirection == false){
		y=y+15}
	else if(changeDirection == true){
		y=y-15}
    //MOUSE 
    fill(255,180,180);
    stroke(190,255,180);
    strokeWeight(5);
    ellipse(mouseX,mouseY,15,15);
}