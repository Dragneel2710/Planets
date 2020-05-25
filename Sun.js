class Sun{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image2 = loadImage("pics/sun.jpg")
        this.image2.scale = 0.8
        World.add(world, this.body);
    }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image2,0, 0, this.width, this.height);
        pop();
    }
}