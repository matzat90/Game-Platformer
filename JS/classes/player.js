class Player {
    constructor
        ({
        positionX: x,
        positionY: y,
        width: width,
        height: height
        })
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = 1;
    }

    move(delta){
        //Move Right:
        if (control.right){this.x += this.velocity * delta}
        //Move Left:
        if (control.left){this.x -= this.velocity * delta}
    }

    update(delta) {
        
        this.move(delta);
        ctx.fillStyle ="red";
        ctx.fillRect(this.x,this.y,this.width,this.height);
        
    }

}