class Sprite {
    constructor
    (Obj,x, ObjTarget)
    {
        this.src = Obj[x].src;
        this.frames = Obj[x].fr;
        this.buffor = Obj[x].buffor,
        this.width = Obj[x].width,
        this.height = Obj[x].height,
        this.offSetX = Obj[x].offSetX,
        this.offSetY = Obj[x].offSetY,
        this.sq = Obj[x].frameSquer,
        this.ObjTarget = ObjTarget,
        this.curFrame = 0;
        this.counter = 0;
    }
    count(){
        this.counter ++
        if (this.counter % this.buffor == 0){
            if(this.curFrame == this.frames -1){
                this.curFrame = 0;
            }
            this.curFrame++
        }
        
        
    }
    drawSpr(){
        this.count()
        ctx.drawImage(this.src, this.curFrame * (this.width/this.frames),0,(this.width/this.frames),this.sq, this.ObjTarget.x - this.offSetX, this.ObjTarget.y + this.offSetY,this.sq,this.sq )
    }
}