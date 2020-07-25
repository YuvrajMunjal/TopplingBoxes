class Ground{
constructor(x,y,width,height){

    var groundOptions ={

        isStatic : true
    }

    this.ground = Bodies.rectangle(x,y,width,height,groundOptions)
    World.add(world, this.ground)

this.width = width;
this.height = height;

}

display(){
var pos = this.ground.position;
rectMode(CENTER);
fill("cyan")
rect(pos.x,pos.y,this.width,this.height)

}
}  