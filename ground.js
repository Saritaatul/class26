class ground
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        push()
        fill ("brown")
        var pos= this.body.position
         rectMode(CENTER);
         rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop ()
    }
}
