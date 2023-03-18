class Player {
    constructor
        ({
        positionX: x,
        positionY: y,
        width: width,
        height: height,
        collisionBox: collisionBox,
        collisionCoins: collisionCoins,
        collisionEnemyGolem: collisionEnemyGolem
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
        this.face = "right"
        this.collisionBox = collisionBox;
        this.collisionCoins = collisionCoins;
        this.collisionEnemyGolem = collisionEnemyGolem;
        this.velVerMaxSpeed = 25;
        this.dead = false;
        this.victory = false;
        this.score = 0;
        this.scoreMax = collisionCoinsArr.length
        this.restartTimer
        //Hit:
        this.hit = false;
        this.hitTime = 300;
        this.hitTimer;
        //Jump control section:
        this.jumpPremission = true;
        this.jumpBlock; //blocks jump for Xs
        this.jumpBlockTimer = 100;
        this.jumpCount = 0; // jump control
        this.jumpMax = 20; // jump max distance
        

    }
    //Main function:
    update(delta) {
        
        if (!this.dead && !this.hit){
            if (this.victory){
                return
            } else {
        this.death()
        this.applyGravity(delta);
        this.jump();
        this.verticalCollision();
        
        this.moveX(delta);
        this.spriteControl();
        this.collisionCoinsFun()
        this.collisionFinish()
        this.collisionEnemy()
        this.horizontalCollision(delta);
        
        //ctx.fillStyle ="red";
       // ctx.fillRect(this.x,this.y,this.width,this.height);
       // ctx.fillStyle = this.cam.color;
       // ctx.fillRect(this.cam.x,this.cam.y,this.cam.width,this.cam.height);
            }
        } else {
            if (this.dead){
            this.applyGravity(delta)
            this.verticalCollision()
            } else if (this.hit){
            this.applyGravity(delta)
            this.verticalCollision()
            this.moveX(delta)
            this.horizontalCollision(delta);
            this.y -= 10
            console.log("uderzony")    
            }
            //this.restartTimer = setTimeout(() => {
                //this.dead = false;
                //ctx.translate(this.x - 1300,0)
                //this.reset()
            //}, 1000)
            
            
            
            
        }
        
    }
            //Move player and camera Horizontal
            moveX(delta){
                //Move Left and Right:
                if(control.left && control.right){this.velocity.x = 0}
                //Move Right:
                if (this.velocity.x == 1 && this.x + this.width <= mapSize){this.x += this.velocity.x * delta}
                //Move Left:
                if (this.velocity.x == -1 && this.x >= 0){this.x += this.velocity.x * delta}
                
            }
           
            
            //Collision Horizontal:
            horizontalCollision(delta){
                for (let i = 0; i<this.collisionBox.length; i++){
                    const curCol = this.collisionBox[i];
                    
                if (collision(this, curCol)){
                    
                    if (control.right){
                       
                    this.x = curCol.x - this.width -1;
                        
                    }
                    if (control.left){
                    this.x = curCol.x + curCol.width + 1;
                        
                    }
                }
            }
            }

            //Collision Coins:
            collisionCoinsFun(){
                for (let i = 0; i<this.collisionCoins.length; i++){
                    const curCol = this.collisionCoins[i];
                   
                if (collision(this, curCol)){
                    
                    let x = this.collisionCoins.indexOf(curCol)
                    this.collisionCoins.splice(x,1);
                    
                    this.score ++;
                    
                    
                }
            }
            }
            //Collison Finish:
            collisionFinish(){
                if (collision(this, finish)){
                    if (finish.status == true){
                        
                        this.victory = true;
                        console.log(this.victory)
                    }
                }
            }
            //Applys global gravity from main.js
            applyGravity(delta){
                if (this.velocity.y < this.velVerMaxSpeed){
                this.velocity.y += .25;
                } else {
                this.velocity.y == this.velVerMaxSpeed;
                }
                this.y += gravity*delta*this.velocity.y;
                
            }

            //Jump (move Verticly):
            jump(){
            if (control.up && this.jumpPremission == true){
                if (this.jumpCount < this.jumpMax){
                    this.y -= 26;
                    this.jumpCount ++;
                }
                else {
                    control.up = false;
                    this.jumpPremission = false;
                    this.jumpBlock = setTimeout(()=>{
                        this.jumpPremission = true;
                    },this.jumpBlockTimer)
                }
              }
            }
            //Collision Verticly:
            verticalCollision(){
                for (let i = 0; i<this.collisionBox.length; i++){
                    const curCol = this.collisionBox[i];
                    
                if (collision(this, curCol)){
                    if (this.velocity.y > 0 && control.up == false){
                        
                        this.jumpCount = 0;
                        this.velocity.y = 0;
                        this.y = curCol.y - this.height - 0.01;
                    }
                    if (this.velocity.y > 0 && control.up){
                        
                        this.y = curCol.y + 50 + 0.01;
                        this.velocity.y = 0;
                        this.jumpPremission = false;
                        this.jumpBlock = setTimeout(()=>{
                            this.jumpPremission = true;
                        },this.jumpBlockTimer)
                        control.up = false;
                    }
                }
              }
            }
            //Sprite Control:
            spriteControl(){
                switch(this.face){
                    case "right":
                        if (this.velocity.y != 0 && control.up && playerSprObj != "JumpR"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },4)
                        }else if (this.velocity.y != 0 && control.up && control.right && playerSprObj != "JumpR"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },4)
                        }else if (this.velocity.y != 0 && !control.up && playerSprObj != "FallR"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },6)
                            
                        }else if (this.velocity.y != 0 && !control.up && control.right && playerSprObj != "FallR"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },6)
                            
                        }else if (!control.right && !control.left && !control.up && playerSprObj.name != "IdleR"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },2)
                        }else if (control.right && !control.up && playerSprObj.name != "RunR"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },0)
                        } 
                    break
                    case "left":
                        if (this.velocity.y != 0 && control.up && playerSprObj != "JumpL"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },5)
                        }else if (this.velocity.y != 0 && control.up && control.left && playerSprObj != "JumpL"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },5)
                        }else if (this.velocity.y != 0 && !control.up && playerSprObj != "FallL"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },7)
                            
                        }else if (this.velocity.y != 0 && !control.up && control.left && playerSprObj != "FallL"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },7)
                            
                        }else if (!control.right && !control.left && !control.up && playerSprObj.name != "IdleL"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },3)
                        }else if (control.left && !control.up && playerSprObj.name != "RunL"){
                            changeSprite({
                            objectSpr: playerSpr,
                            object: playerSprObj,
                            objectTarget: player
                            },1)
                        } 
                    break
                }
                
            }
            death(){
                if(this.y > canvas.height){
                    
                    this.restartTimer = setTimeout(() => {
                        
                    }, 1000)
                    
                 this.dead = true;
                }
            }
            reset(){
                this.x = 1300
                this.y = 0 - this.height;
                this.velocity.x = 0
                this.velocity.y = 0
                this.face = "right"
                this.cam.x = this.x + this.width/2 - (1200/2)
                this.cam.y = this.y - (500 - this.height)
                
            }
           
            collisionEnemy(){
                
                
                for (let c =0; c<this.collisionEnemyGolem.length; c++){
                const curCol = this.collisionEnemyGolem[c]
                
                if(collision(this,curCol,) && !this.dead){
                    this.hit = true;
                    switch (this.face){
                       case "right":
                        this.velocity.x = -1
                        this.hitTimer = setTimeout(()=>{
                            this.velocity.x = 0
                            this.hit = false;
                        },this.hitTime)
                        break
                        case "left":
                        this.velocity.x = 1
                        this.hitTimer = setTimeout(()=>{
                            this.velocity.x = 0
                            this.hit = false;
                        },this.hitTime)
                        break
                    }
                }
                }
            }
}