class Ball
{
    constructor (x,y,d)
    {
        var options = {
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.circle(x,y,d/2,options);
        this.radius = d;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        fill(255);
        image(this.image,0,0,70,70);
        pop();
      }
}