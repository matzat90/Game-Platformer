class Player {
    constructor
        ({
        positionX: x,
        positionY: y,
        width: width,
        height: height,
        collisionBox: collisionBox,
        collisionCoins: collisionCoins
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
        this.velVerMaxSpeed = 25;
        this.dead = false;
        this.victory = false;
        this.score = 0;
        this.scoreMax = collisionCoinsArr.length
        this.restartTimer
        //Jump control section:
        this.jumpPremission = true;
        this.jumpBlock; //blocks jump for Xs
        this.jumpBlockTimer = 100;
        this.jumpCount = 0; // jump control
        this.jumpMax = 20; // jump max distance
        //Camera section:
        this.cam =
        {
            width: 1200,
            height: 500,
            x: this.x + this.width/2 - (1200/2),
            y: this.y - (500 - this.height),
            color: "rgba(0,255,0,.5)"
        }

    }
    //Main function:
    update(delta) {
        if (this.dead  == false){
            if (this.victory){
                return
            } else {
        this.death()
        this.applyGravity(delta);
        this.jump();
        this.verticalCollision();
        this.applyCam(delta);
        this.moveX(delta);
        this.spriteControl();
        this.collisionCoinsFun()
        this.collisionFinish()
        this.horizontalCollision(delta);
        
        //ctx.fillStyle ="red";
       // ctx.fillRect(this.x,this.y,this.width,this.height);
       // ctx.fillStyle = this.cam.color;
       // ctx.fillRect(this.cam.x,this.cam.y,this.cam.width,this.cam.height);
            }
        } else {
            this.applyGravity(delta)
            this.verticalCollision()
            this.restartTimer = setTimeout(() => {
                this.dead = false;
                ctx.translate(this.x - 1300,0)
                this.reset()
            }, 1000)
            
            
            
            
        }
        
    }
            //Move player and camera Horizontal
            moveX(delta){
                //Move Left and Right:
                if(control.left && control.right){this.velocity.x = 0}
                //Move Right:
                if (control.right && control.left == false && this.x + this.width <= mapSize){this.x += this.velocity.x * delta
                this.cam.x = this.x + this.width/2 - (1200/2)
                
            }
                //Move Left:
                if (control.left &&  control.right == false && this.x >= 0){this.x += this.velocity.x * delta
                   this.cam.x = this.x + this.width/2 - (1200/2)
                 
                }
                
            }
            //applyCam:
            applyCam(delta){
            if (this.cam.x > 200 && control.right && control.left == false && this.cam.x + this.cam.width <= mapSize - 200 ){
                ctx.translate(-this.velocity.x*delta,0);
            } else if (this.cam.x > 200 && control.left && control.right == false && this.cam.x + this.cam.width <= mapSize -200){
                ctx.translate(-this.velocity.x*delta,0);
                
            } else if (this.cam.x <= 0 && control.left && this.cam.x + this.cam.width <= mapSize -200){
                ctx.translate(0,0);
                
            }
            else {
                ctx.translate(0,0);
                
            } 
            
             }

            //Collision Horizontal:
            horizontalCollision(delta){
                for (let i = 0; i<this.collisionBox.length; i++){
                    const curCol = this.collisionBox[i];
                    
                if (collision(this, curCol)){
                    
                    if (control.right){
                        firstPlan.x += firstPlan.velocity*delta
                        firstPlan2.x += firstPlan2.velocity*delta
                        firstPlan3.x += firstPlan3.velocity*delta
                        this.x = curCol.x - this.width -1;
                        //Move Gameboard:
                        if (this.cam.x > 200 && (control.right && control.left == false) && this.cam.x + this.cam.width <= mapSize - 200 ){
                            ctx.translate(delta,0);
                        } 
                    }
                    if (control.left){
                        firstPlan.x -= firstPlan.velocity*delta
                        firstPlan2.x -= firstPlan2.velocity*delta
                        firstPlan3.x -= firstPlan3.velocity*delta
                        this.x = curCol.x + curCol.width + 1;
                        //Move Gameboard:
                        if (this.cam.x > 200 && (control.left && control.right == false) && this.cam.x + this.cam.width <= mapSize -200){
                            ctx.translate(-delta,0);
                        } 
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
                    coinsArrSpr.splice(x,1)
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
                this.cam.y = this.y - (this.cam.height - this.height);
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
                        this.dead = false;
                        ctx.translate(this.x - 1300,0)
                        this.reset()
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
                firstPlan.x = 0
                firstPlan2.x = 0
                firstPlan3.x = 0
            }
           
}