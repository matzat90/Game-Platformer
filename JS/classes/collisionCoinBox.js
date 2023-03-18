class CollisionCoinBox extends Sprite2 {
    constructor({
        positionX: x,
        positionY: y,
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
        this.width = 50
        this.height = 50
        
        
}
coinDraw(){
    //ctx.fillStyle = "rgba(0,255,0,.5)"
    //ctx.fillRect(this.x, this.y, this.width,this.height)
    this.drawSpr()
}

}