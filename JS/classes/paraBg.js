class paraBg {
    constructor({
        src: src,
        velocity: vel,
        width: wid,
        
    })
    {
        this.src = src;
        this.velocity = vel;
        this.width = wid;
        this.x = 0;
        this.y = 0;
    }
   
    draw(){
        if (player.dead == false && player.victory == false){
        
        ctxBg.drawImage(this.src,this.x,this.y)
        } else {
        ctxBg.drawImage(this.src,this.x,this.y)
            if (player.dead == true){
            ctxBg.font = "48px serif";
            ctxBg.fillText("Game Over", 300, 100);
            }
        }
    }
}