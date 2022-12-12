
function setup() {
  createCanvas(200, 580);
  
}
let dia =(180, 180);
let pos = 100;
let colval = (0,0,0);
let cv = (0,0,0);
let cv1 = (0,0,0);
let eli1;
let eli2;
let eli3;
let mou;

function draw() {
  background(255, 255, 0);
  fill(colval);
  eli1 = ellipse(pos, 100, dia);
  fill(cv);
  eli2 = ellipse(pos, 290, dia);
  fill(cv1);
  eli3 = ellipse(pos, 480, dia);
  
  mou = map(mouseX, mouseY, 190, 5, 5);
  fill(0,0,128,200);
  ellipse(mouseX, mouseY, 10);
  
  
}
  function mousePressed(){
  if (colval == (0,0,0)) {
    colval = [255,0,0];
  } 
  else {
    if (cv == (0,0,0)){
      cv = [255,255,0];
      colval = [0,0,0];
      
    }
    else {
      if (cv1 == (0,0,0)){
        cv1 = [0,255,0];
      }
    cv = [0,0,0];
    }
  }
    console.log('Yosbel Sarduy Herrera');
  }


