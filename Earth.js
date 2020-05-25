class Earth{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("pics/earth.png")
        this.image.scale = 0.8
        World.add(world, this.body);
    }
      display(){
        image(this.image,0, 0, this.width, this.height);
    }
}