class autoLoopBg extends Sprite2 {
    constructor
    ({
        velocity: vel,
        imgSrc: src,
        imgWid: wid,
        imgHi: hi,
        imgFr: fr,
        imgBuffor: bf,
        imgOffsetX: offsetX,
        imgOffsetY: offsetY,
        imgSq: sq,
        imgRows: rows,
        imgName: name,
        imgPlan: plan,
        imgType: type
    })
    {
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
        this.velocity = vel;
        this.x = 0;
        this.y = 0;
    }
    move(delta){
        if(this.x == -1600){
            this.x = 0;
        } else {
            this.x -= this.velocity;
        }
    }
    draw(delta){
        this.move(delta);
        this.drawSpr();
        
    }
}