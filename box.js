class box {
constructor(x,y,width,height){
var box_options={
    restitution: 1.2
}
this.body=Bodies.rectangle(x,y,width,height,box_options);
World.add(world,this.body);


}

display(){
    var pos= this.body.position
    rectMode(CENTER);
fill("yellow");
rect(pos.x,pos.y,this.width,this.height);


}
}


