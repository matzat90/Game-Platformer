class golemEnemy {
    constructor
    ({
        positionX: x,
        positionY: y,
        width: w,
        height: h,
        collisionBox: collisionBoxEnemyArr,
       
        
        
    }){
        
        this.x = x
        this.y = y
        this.width = w,
        this.height = h
        this.velocity = {
            x: 0.25,
            y: 0,
            yMax: 25
        }
        this.collisionBox = collisionBoxEnemyArr
        
        this.face = "left"
        this.hit;
        this.hitTimer;
    }
    update(delta){
        this.applyGravity(delta);
        this.verCollision()
        this.moveX(delta)
        this.horCollision()
           
        ctx.fillStyle = "red"
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }

    applyGravity(delta){
        
        if (this.velocity.y < this.velocity.yMax){
            this.velocity.y += .25
        } else {
            this.velocity.y = this.velocity.yMax
        }
        this.y += gravity*delta*this.velocity.y;
    
}
    
    verCollision(){
        
        for(i = 0; i < this.collisionBox.length; i++){
            const curCol = this.collisionBox[i]
            if (collision(this,curCol)){
                
                this.y = curCol.y - this.height - 0.01;
                this.velocity.y = 0;
                
            }
        }
    }

    horCollision(){
        
        for(i = 0; i < this.collisionBox.length; i++){
            const curCol = this.collisionBox[i]
            if (collision(this,curCol)){
                let x = Enemies.indexOf(this)
                
                if (this.velocity.y == 0){
                    switch(this.face){
                        case "left":
                            this.face = "right"
                            this.x = curCol.x + curCol.width + 0.01
                            changeSprite({
                                objectSpr: golemSpr,
                                object: EnemiesSpr[x],
                                objectTarget: this
                                },0)
                        break
                        case "right":
                            this.face = "left"
                            this.x = curCol.x - this.width - 0.01
                            changeSprite({
                                objectSpr: golemSpr,
                                object: EnemiesSpr[x],
                                objectTarget: this
                                },1)
                        break
                    }
                     
                }
                
            }
        }
    }
    moveX(delta){
        if (this.face == "right"){this.x += delta*this.velocity.x} 
        else if (this.face == "left"){this.x -= delta*this.velocity.x}
    }

    


}