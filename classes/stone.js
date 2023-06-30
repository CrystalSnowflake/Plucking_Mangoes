class Stone{
    constructor(x, y){
        var options = {
            isStatic: true,
            restitution: 0.5,
            friction: 1,
            density: 2
        }

        this.x = x;
        this.y = y;
        this.r = 40;
        this.stoneImage = loadImage("Photos/stone.png");
        this.stone = Bodies.circle(x, y, 40, options);
        World.add(world, this.stone)
    }

    show(){
        var x = this.stone.position.x;
        var y = this.stone.position.y;
        var angle = this.stone.angle;

        push();
        imageMode(CENTER)
        translate(x, y);
        rotate(angle)
        image(this.stoneImage, 0, 0, this.r, this.r);
        pop();
    }
}