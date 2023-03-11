class Player {
    constructor({
        positionX: x,
        positionY: y,
        width: width,
        height: height
    }){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    move(delta){
        this.x = this.x + 1 * delta
    }

    update(delta){
        this.move(delta);
        ctx.fillStyle ="red";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }

}