class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.1,
		}
//'this' refer to object created using the class. we always use 'this' within the constructor
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    //define a function
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        console.log(this.body.speed)

        if(this.body.speed<4){
            rect(this.body.position.x,this.body.position.y, this.width, this.height);
        }
else{
    World.remove(world,this.body);
    push();
    this.visibility  = this.visibility-5;
    tint(255,this.visibility);
    
    pop();
}


      
        
       
       
    }

}

