class Bullet
{
    constructor(x,y,w,h)
    {
        var options ={
            //isStatic: true,
            friction: 1,
            density: 1,
        }
        this.image = loadImage('./assets/laser.png');
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h

        World.add(myWorld, this.body);
    }

    display()
    {
        var pos= this.body.position;

        push();
        translate(pos.x, pos.y)
        imageMode(CENTER);
        image(this.image,0,0,this.w, this.h);
        pop();
    }

    shoot()
    {
       
       var loc = p5.Vector.fromAngle(mySentry.angle);

       loc.mult(38);

       //Body.setStatic(this.body, false);
       Matter.Body.setVelocity(this.body,{x:loc.x, y:loc.y});

    }
}