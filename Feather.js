class Feather {
    constructor(x, y, width, height) {
      var options = {
        'friction':0.9,
          'density' : 0.0000001,
          'frictionAir' : 0.1
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
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };