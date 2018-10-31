//create a variable to hold one egg
let b;
let c;
let d;
let e;

function setup() {
  createCanvas(800, 400);
  b = new egg(0, 100); //make a new egg from the egg class and call it b.
  c = new egg(7,150);
  d = new egg (14,200);
  e = new egg (21,250);
}


function draw(){
	background(220);
    b.drawegg(); //draw the egg called b (go look in the egg class for the drawegg function)
    b.moveegg(); //move the egg called b (go look in the egg class for the moveegg function)
    c.drawegg(); //draw the egg called b (go look in the egg class for the drawegg function)
    c.moveegg(); //move the egg called b (go look in the egg class for the moveegg function)
    d.drawegg(); //draw the egg called b (go look in the egg class for the drawegg function)
    d.moveegg(); //move the egg called b (go look in the egg class for the moveegg function)
    e.drawegg(); //draw the egg called b (go look in the egg class for the drawegg function)
    e.moveegg(); //move the egg called b (go look in the egg class for the moveegg function)



}



//egg class from which to create new eggs with similar properties.
class egg {

	constructor(x,y){ //every egg needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}
	drawegg(){  // draw a egg on the screen at x,y
    		stroke(0);
        fill("yellow");
		    ellipse(this.x,this.y,10,10);
        noFill();
        ellipse(this.x, this.y, 20,20);
	}
	moveegg(){ //update the location of the egg, so it moves across the screen
		this.x = this.x+4;
		this.y = this.y+.5;
	}
}
