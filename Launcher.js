class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.pointB = pointB
        this.bodyA = bodyA
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
        fly()
        {
            this.launcher.bodyA = null
        }
        attach(bodyA)
        {
            this.launcher.bodyA = bodyA
        }
    
    display(){

        if(this.launcher.bodyA){
        var posA = this.bodyA.position
        var posB = this.pointB
        line(posA.x ,posA.y, posB.x, posB.y)
        }

    }
}
