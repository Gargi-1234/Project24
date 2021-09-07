class WoodenCube {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.7,
        'friction':0.3,
        'density':2.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(rgb(208,187,148));
    rect(0, 0, this.width, this.height);
    pop();
  }
};