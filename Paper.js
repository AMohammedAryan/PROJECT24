class Paper{

    constructor(x, y){

        var options ={
            density:1.2,
            friction:0.5,
            restitution:0.3,
            isStatic:true
        }

        this.body = Bodies.circle(x, y, 70, options);
        this.diameter = 70;

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push()

        translate(pos.x, pos.y);
        rotate(angle);

        ellipseMode(CENTER);
        fill("purple");
        
        ellipse(0, 0, this.diameter);

        pop()
    }
}