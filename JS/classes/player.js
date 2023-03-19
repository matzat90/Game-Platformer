class Player extends Sprite2 {
    constructor
        ({
        positionX: x,
        positionY: y,
        width: width,
        height: height,
        collisionBox: collisionBox,
        collisionCoins: collisionCoins,
        collisionEnemyGolem: collisionEnemyGolem,
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
    {
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
        this.loopSprite = false;
        //Hit:
        this.hit = false;
        this.hitTime = 100;
        this.hitTimer;
        //Jump control section:
        this.jumpPremission = true;
        this.jumpBlock; //blocks jump for Xs
        this.jumpBlockTimer = 300;
        this.jumpCount = 0; // jump control
        this.jumpMax = 25; // jump max distance
        

    }
    //Main function:
    update(delta) {
        
        if (!this.dead && !this.hit){
            if (this.victory){
                return
            } else {
        
        this.drawSpr()
        this.applyGravity(delta);
        this.jump();
        this.verticalCollision();
        
        this.moveX(delta);
        
        this.spriteControl();
        //ctx.fillStyle ="red";
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        
        this.collisionCoinsFun()
        this.collisionFinish()
        this.collisionEnemy()
        this.horizontalCollision(delta);
        
        
       // ctx.fillStyle = this.cam.color;
       // ctx.fillRect(this.cam.x,this.cam.y,this.cam.width,this.cam.height);
            }
        } else {
            if (this.dead){
            this.drawSpr()
            this.spriteControl()
            this.applyGravity(delta)
            this.verticalCollision()
            
            } else if (this.hit){
                this.spriteControl();
                this.drawSpr()
            this.applyGravity(delta)
            this.verticalCollision()
            this.horizontalCollision(delta);
            this.moveX(delta)
            this.y -= 10
            
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
                    starsDis.innerHTML = player.score
                    
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
                if (player.y > canvas.height){
                    if (!player.dead){
                    player.dead = true;
                    timerGameOver()
                    }
                }
                
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
                    this.jumpFalse()
                }
              } else {
                
              }
            }
            //Collision Verticly:
            verticalCollision(){
                for (let i = 0; i<this.collisionBox.length; i++){
                    const curCol = this.collisionBox[i];
                    
                if (collision(this, curCol)){
                    
                    if (this.velocity.y > 0 && !control.up){
                        
                        this.jumpCount = 0;
                        this.velocity.y = 0;
                        this.y = curCol.y - this.height - 0.01;
                    }
                    if (this.velocity.y > 0 && control.up){
                        
                        this.y = curCol.y + 50 + 0.01;
                        this.velocity.y = 5;
                        this.jumpFalse()
                        control.up = false;
                    }
                }
              }
            }
            //Sprite Control:
            spriteControl(){
                //console.log(this.hit)
                //console.log(this.imgName, this.img.width, this.frames, this.row)    
                switch(this.face){
                    case "right":
                        if (this.dead){
                            
                            if (this.imgName == "DeadR" && this.loopSprite && this.curFr >= 4){
                            this.curFr = 5
                            this.counter = 0
                            }
                            else if (this.imgName != "DeadR" && !this.loopSprite){
                            
                            this.row = 8
                            this.imgName = "DeadR"
                            this.frames = 5
                            this.img.width = 750
                            this.curFr = 0
                            this.counter = 0
                            this.loopSprite = true
                            } 
                            
                        } else if (!player.dead) {
                        if (this.velocity.y != 0 && control.up && this.imgName != "JumpR"){
                            this.row = 2
                            this.imgName = "JumpR"
                            this.frames = 2
                            this.img.width = 300
                            this.curFr = 0
                            this.counter = 0
                            return
                        }else if (this.velocity.y != 0 && control.up && control.right && this.imgName != "JumpR"){
                            this.row = 2
                            this.imgName = "JumpR"
                            this.frames = 2
                            this.img.width = 300
                            this.curFr = 0
                            this.counter = 0
                            return
                        }else if (this.velocity.y != 0 && !control.up && this.imgName != "FallR"){
                            this.row = 3
                            this.imgName = "FallR"
                            this.frames = 2
                            this.img.width = 300
                            this.curFr = 0
                            this.counter = 0
                            return
                        }else if (this.velocity.y != 0 && !control.up && control.right && this.imgName != "FallR"){
                            this.row = 3
                            this.imgName = "FallR"
                            this.frames = 2
                            this.img.width = 300
                            this.curFr = 0
                            this.counter = 0
                            return
                        }else if (this.velocity.y <= 0 && !control.right && !control.left && !control.up && this.imgName != "IdleR"){
                            this.row = 1
                            this.imgName = "IdleR"
                            this.frames = 4
                            this.img.width = 600
                            this.curFr = 0
                            this.counter = 0
                            return
                        }else if (this.velocity.y <= 0 && control.right && !control.up && this.imgName != "RunR"){
                            this.row = 0
                            this.imgName = "RunR"
                            this.frames = 6
                            this.img.width = 900
                            this.curFr = 0
                            this.counter = 0
                            return
                        }
                        }
                    break
                    case "left":
                        if (this.dead){
                        if (this.imgName == "DeadL" && this.loopSprite && this.curFr >= 4){
                            this.curFr = 5
                            this.counter = 0
                            }
                            else if (this.imgName != "DeadL" && !this.loopSprite){
                            
                            this.row = 9
                            this.imgName = "DeadL"
                            this.frames = 5
                            this.img.width = 750
                            this.curFr = 0
                            this.counter = 0
                            this.loopSprite = true
                            } 
                        } else {if (this.velocity.y != 0 && control.up && this.imgName != "JumpL"){
                            this.row = 6
                            this.imgName = "JumpL"
                            this.frames = 2
                            this.img.width = 300
                            this.curFr = 0
                            this.counter = 0
                            return
                        }else if (this.velocity.y != 0 && control.up && control.left && this.imgName != "JumpL"){
                            this.row = 6
                            this.imgName = "JumpL"
                            this.frames = 2
                            this.img.width = 300
                            this.curFr = 0
                            this.counter = 0
                            return
                        }else if (this.velocity.y != 0 && !control.up && this.imgName != "FallL"){
                            this.row = 7
                            this.imgName = "FallL"
                            this.frames = 2
                            this.img.width = 300
                            this.curFr = 0
                            this.counter = 0
                            return
                            
                        }else if (this.velocity.y != 0 && !control.up && control.left && this.imgName != "FallL"){
                            this.row = 7
                            this.imgName = "FallL"
                            this.frames = 2
                            this.img.width = 300
                            this.curFr = 0
                            this.counter = 0
                            return
                        }else if (this.velocity.y <= 0 && !control.right && !control.left && !control.up && this.imgName != "IdleL"){
                            this.row = 5
                            this.imgName = "IdleL"
                            this.frames = 4
                            this.img.width = 600
                            this.curFr = 0
                            this.counter = 0
                            return
                        }else if (this.velocity.y <= 0 && control.left && !control.up && this.imgName!= "RunL"){
                            this.row = 4
                            this.imgName = "RunL"
                            this.frames = 6
                            this.img.width = 900
                            this.curFr = 0
                            this.counter = 0
                            return
                        } 
                    break
                        }
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
                        if (curCol.x < this.x){
                        this.velocity.x = 1
                            this.hitTimer = setTimeout(()=>{
                                this.velocity.x = 0
                                this.dead = true
                                this.hit = false
                                timerGameOver()
                            },this.hitTime)
                        } else {
                        this.velocity.x = -1
                        this.hitTimer = setTimeout(()=>{
                            this.velocity.x = 0
                            this.dead = true
                            this.hit = false
                            timerGameOver()
                        },this.hitTime)
                        }
                        break
                        case "left":
                            if (curCol.x > this.x){
                                this.velocity.x = -1
                                    this.hitTimer = setTimeout(()=>{
                                        this.velocity.x = 0
                                        this.dead = true
                                        this.hit = false
                                        timerGameOver()
                                    },this.hitTime)
                                } else {
                        this.velocity.x = 1
                        this.hitTimer = setTimeout(()=>{
                            this.velocity.x = 0
                            this.dead = true
                            this.hit = false
                            timerGameOver()
                        },this.hitTime)
                    }
                        break
                    }
                }
                }
            }

            jumpFalse(){
                this.jumpPremission = false;
                        this.jumpBlock = setTimeout(()=>{
                        this.jumpPremission = true;
                    },this.jumpBlockTimer)
            }
}