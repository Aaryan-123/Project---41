class Umbrella {
    constructor(x,y) {
        var options = {
            isStatic : true
        }
        this.image = loadImage("WalkingFrame");

        this.body = Bodies.circle(x,y,options);
        World.add(this.body);
    }
    display() {
        image(this.image,x,y);
    }
}
