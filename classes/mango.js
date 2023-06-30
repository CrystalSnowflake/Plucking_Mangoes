class Mango{
    constructor(x, y){
        var options = {
            isStatic: true,
            restitution: 0.4,
            density: 1.2,
            friction: 0.8
        }

        this.x = x;
        this.y = y;
        this.r = 40

        this.fruit = Bodies.circle(x, y, 40, options);
        this.fruitImage = loadImage("Photos/mango.png")
        World.add(world, this.fruit);
    }

    show(){
        var x = this.fruit.position.x;
        var y = this.fruit.position.y;
        var angle = this.fruit.angle;

        push();
        ellipseMode(CENTER)
        translate(x, y);
        rotate(angle);
        image(this.fruitImage, 0, 0, this.r, this.r)
        pop();
    }
}