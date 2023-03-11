class Player {
    constructor
        ({
        positionX: x,
        positionY: y,
        width: width,
        height: height,
        collisionBox: collisionBox
        })
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity =
        {
            x:0,
            y:0
        }
        this.collisionBox = collisionBox;
        this.velVerMaxSpeed = 10;
    }
    //Main function:
    update(delta) {
        this.moveX(delta);
        this.applyGravity(delta);
        ctx.fillStyle ="red";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    //Move player Horizontal
    moveX(delta){
        //Move Right:
        if (control.right){this.x += this.velocity.x * delta}
        //Move Left:
        if (control.left){this.x -= this.velocity.x * delta}
    }
    //Applys global gravity from main.js
    applyGravity(delta){
        if (this.velocity.y < this.velVerMaxSpeed){
        this.velocity.y += 0.25;
        } else {
        this.velocity.y == this.velVerMaxSpeed;
        }
        this.y += gravity*delta*this.velocity.y;
    }
}