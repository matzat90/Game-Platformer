class Door extends Sprite2 {
    constructor({
        positionX: x,
        positionY: y,
        width: w,
        height: h,

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
    }){
        super({
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
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    
    this.status = 0

    }

    update(){
        this.checkForStars()
        this.changeSpr()
        //ctx.fillStyle = "green"
        //ctx.fillRect(this.x,this.y,this.width,this.height)
        this.drawSpr()
        

    }

    changeSpr(){
        switch (this.status){
            case 0:
                this.imgName = "Closed"
                this.img.width = 105
                this.frames = 1
                this.curFr = 0
                this.counter = 0
            break
            case 1:
                this.imgName = "During"
                this.img.width = 1260
                this.frames = 12
                if (this.curFr == 10){
                    this.status = 2
                }
            break
            case 2:
                this.imgName = "Open"
                this.img.width = 105
                this.frames = 1
                this.curFr = 11
                this.counter = 0
                this.status = 2
            break
        }
    }

    checkForStars(){
        if (collisionCoinsArr.length == 0 && this.imgName == "Closed"){
            this.status = 1
        }
    }
}