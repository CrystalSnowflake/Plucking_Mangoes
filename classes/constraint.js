class Connect{
    constructor(a, b){
        var options = {
            bodyA: a,
            pointB: b,
            stiffness: 0.005,
            length: 1
        }

        this.bodyA = a
        this.pointB = b
        this.connect = Constraint.create(options)
        World.add(world, this.connect)
    }

    show(){
        if(this.connect.bodyA){
            var xA = this.bodyA.position.x;
            var yA = this.bodyA.position.y;
            var xB = this.pointB.x;
            var yB = this.pointB.y;

            stroke(0)
            strokeWeight(1)
            line(xA, yA, xB, yB);
        }
    }
}