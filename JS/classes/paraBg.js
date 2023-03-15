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
    move(delta){
        if (control.right && this.x+this.width >= canvasBg.width){
            this.x -= this.velocity*delta;
        } else if (control.left && this.x <= 0){
            this.x += this.velocity*delta;
        }
    }
    draw(delta){
        this.move(delta);
        ctxBg.drawImage(this.src,this.x,this.y)
    }
}