class paraBg extends Sprite2 {
    constructor({
        
        velocity: vel,
        
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
   
    draw(){
        if (player.dead == false && player.victory == false){
        
        this.drawSpr()
        } else {
        this.drawSpr()
            if (player.dead == true){
            ctxBg.font = "48px serif";
            ctxBg.fillText("Game Over", 300, 100);
            }
        }
    }
}