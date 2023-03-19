class golemEnemy extends Sprite2 {
    constructor
    ({
        positionX: x,
        positionY: y,
        width: w,
        height: h,
        collisionBox: collisionBoxEnemyArr,
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
        this.width = w,
        this.height = h
        this.velocity = {
            x: 0.04*randomOneToThree,
            y: 0,
            yMax: 25
        }
        this.collisionBox = collisionBoxEnemyArr
        
        this.face = "right"
        this.hit;
        this.hitTimer;
    }
    update(delta){
        this.applyGravity(delta);
        this.verCollision()
        this.moveX(delta)
        this.horCollision()
         
        //ctx.fillStyle = "red"
        //ctx.fillRect(this.x,this.y,this.width,this.height)
        this.drawSpr()  
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
        
        for(let c = 0; c < this.collisionBox.length; c++){
            const curCol = this.collisionBox[c]
            if (collision(this,curCol)){
                
                this.y = curCol.y - this.height - 0.01;
                this.velocity.y = 0;
                
            }
        }
    }

    horCollision(){
        
        for(let c = 0; c < this.collisionBox.length; c++){
            const curCol = this.collisionBox[c]
            if (collision(this,curCol)){
                let x = Enemies.indexOf(this)
                
                if (this.velocity.y == 0){
                    switch(this.face){
                        case "left":
                            this.face = "right"
                            this.x = curCol.x + curCol.width + 0.01
                            this.row = 0
                            
                        break
                        case "right":
                            this.face = "left"
                            this.x = curCol.x - this.width - 0.01
                            this.row = 1
                           
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