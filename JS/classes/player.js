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
        this.applyGravity(delta);
        this.jump();
        this.verticalCollision();
        this.applyCam(delta);
        this.moveX(delta);
        this.horizontalCollision(delta);
            
        ctx.fillStyle ="red";
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.fillStyle = this.cam.color;
        ctx.fillRect(this.cam.x,this.cam.y,this.cam.width,this.cam.height);
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
                        
                        //this.velocity.x = 0;
                        firstPlan.x += firstPlan.velocity*delta
                        firstPlan2.x += firstPlan2.velocity*delta
                        firstPlan3.x += firstPlan3.velocity*delta
                        this.x = curCol.x - this.width -1;
                        
                        if (this.cam.x > 200 && (control.right && control.left == false) && this.cam.x + this.cam.width <= mapSize - 200 ){
                            ctx.translate(delta,0);
                            
                            
                        } 
                        
                        
                        
                    }
                    if (control.left){
                        
                        firstPlan.x -= firstPlan.velocity*delta
                        firstPlan2.x -= firstPlan2.velocity*delta
                        firstPlan3.x -= firstPlan3.velocity*delta
                        this.x = curCol.x + curCol.width + 1;
                        if (this.cam.x > 200 && (control.left && control.right == false) && this.cam.x + this.cam.width <= mapSize -200){
                            ctx.translate(-delta,0);
                            
                            
                            
                            
                        } 
                        
                    }
                    
                }
            }
            }

            //Applys global gravity from main.js
            applyGravity(delta){
                if (this.velocity.y < this.velVerMaxSpeed){
                this.velocity.y += 0.25;
                } else {
                this.velocity.y == this.velVerMaxSpeed;
                }
                this.y += gravity*delta*this.velocity.y;
                this.cam.y = this.y - (this.cam.height - this.height);
            }

            //Jump:
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
                        control.up = false;
                        this.y += 25;
                        this.velocity.y = 0;
                        this.jumpPremission = false;
                        this.jumpBlock = setTimeout(()=>{
                            this.jumpPremission = true;
                        },this.jumpBlockTimer)
                    }
                }
              }
            }
}