class Drop {
    constructor(x,y) {
        var options = {
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,options);
        this.x = x;
        this.y = y;
        World.add(this.body);
    }
    display() {
        ellipse(x,y,10,10);
    }
}