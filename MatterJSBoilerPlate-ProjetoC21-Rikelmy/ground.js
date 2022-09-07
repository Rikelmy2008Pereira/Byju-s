class Ground{
    constructor(x,y,w,h){
   var Option={
   isStatic:true
   }
   this.x=x
   this.y=y
   this.w=w
   this.h=h
   this.body=Bodies.rectangle(x,y,w,h,Option)
   World.add(world,this.body)
   
   }
   display(){
   push()
   translate(this.body.position.x,this.body.position.y)
   strokeWeight(4)
   fill('yellow')
   rect(0,0,this.w,this.h)
   pop()
   }
   }