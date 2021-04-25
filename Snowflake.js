class Snowflake {
    constructor(x,y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic: false,
            density: 2
        }

        this.r = 50;
        //this.width = w;
        //this.height = h;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }

    display() {

        //var pos = this.body.position;
        //var angle = this.body.angle;

        //push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        //imageMode(CENTER);
        //noStroke();
        ////rectMode(RADIUS);
        //ellipse(this.image, 0, 0, this.radius, this.radius);
        //image(this.image, 0, 0, this.width, this.height)////;

      //  
        //pop();

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        imageMode(CENTER)      
        image(this.image, 0,0,this.r,this.r);
        pop();
    }
}