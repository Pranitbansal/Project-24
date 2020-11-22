class Paper {
    constructor(x,y) {
        this.body=Bodies.circle(x,y,20,{restitution: 0.3, isStatic: false, density: 1.2, friction: 0.5})
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        fill("pink")
        ellipse(pos.x, pos.y, 20,20);
    }
}