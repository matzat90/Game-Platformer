class autoLoopBg {
    constructor
    ({
        src: src,
        velocity: vel
    })
    {
        this.src = src;
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
        ctxBg.drawImage(this.src,this.x,this.y) 
        
    }
}