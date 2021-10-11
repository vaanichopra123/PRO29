class Stone{
  constructor(x,y,radius){
      var options={
          isStatic:true,
         
      }
      this.radius = radius;
      this.body=Bodies.circle(x,y,radius);
      World.add(world,this.body);
  };
  display(){
      var pos = this.body.position;
      push();
      ellipse(pos.x,pos.y,this.radius);
      ellipseMode(RADIUS);
      pop();
  }
}
