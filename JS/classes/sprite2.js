class Sprite2 {
    constructor({
        imgName: name,
        imgSrc: src,
        imgWid: wid,
        imgHi: hi,
        imgFr: fr,
        imgBuffor: bf,
        imgOffsetX: offsetX,
        imgOffsetY: offsetY,
        imgSq: sq,
        imgRows: rows,
        imgPlan: plan,
        imgType: type
    })
    {
        this.imgName = name
        this.img = new Image(wid,hi)
        this.img.src = src
        this.row = 0
        this.rows = rows
        this.frames = fr
        this.buffor = bf
        this.offSetX = offsetX
        this.offSetY = offsetY
        this.sq = sq
        this.plan = plan
        this.curFr = 0
        this.counter = 0
        this.type = type
    }

    count(){
        this.counter ++
        if (this.counter % this.buffor == 0){
            if(this.curFr == this.frames -1){
                this.curFr = 0;
            }
            this.curFr++
            this.counter = 0
        }
        
        
    }
    drawSpr(){
        
        this.count()
        if (!this.img) {return}
        if (this.frames == 1 && this.type == "static"){
            this.plan.drawImage(this.img,this.x,this.y)
        } else {
        this.plan.drawImage(
        this.img,
        this.curFr * (this.img.width/this.frames),
        this.row*(this.img.height/this.rows),
        (this.img.width/this.frames),
        this.sq,
        this.x + this.offSetX,
        this.y + this.offSetY,
        this.sq,
        this.sq )
        }
    }
}