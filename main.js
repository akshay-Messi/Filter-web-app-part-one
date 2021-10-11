function preload(){

}

function setup(){
    canvas = createCanvas(500,450);
    canvas.position(425,150);
    camera = createCapture(VIDEO);
    camera.hide();
}

function draw()
{
image(camera,0,0,500,450);
}

function take_snapshot(){    
    save('myFilterImage.png');
  }

  