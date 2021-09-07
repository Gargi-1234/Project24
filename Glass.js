class Glass {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.7,
          'friction':0.3,
          'density':2.0
      }

      this.x=x;
      this.y=y;
      this.r=r
      
      this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
      World.add(world, this.body);
      
      World.add(world, this.body);
    }
    display(){
     
		  var dimondPos=this.body.position;		
		  push()
		  translate(dimondPos.x, dimondPos.y);
			rectMode(CENTER)
			fill(rgb(231,56,149));
			ellipse(0,0,this.r, this.r);
			
    }
  };