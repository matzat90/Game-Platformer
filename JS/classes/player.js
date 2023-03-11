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
        this.jumpPremission = true;
        this.jumpBlock; //blocks jump for Xs
        this.jumpBlockTimer = 250;
        this.jumpCount = 0; // jump control
        this.jumpMax = 20; // jump max distance
    }
    //Main function:
    update(delta) {
        this.verticalCollision();
        this.moveX(delta);
        this.horizontalCollision();
        this.jump();
        
        this.applyGravity(delta);
        ctx.fillStyle ="red";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
            //Move player Horizontal
            moveX(delta){
                //Move Right:
                if (control.right){this.x += this.velocity.x * delta}
                //Move Left:
                if (control.left){this.x += this.velocity.x * delta}
                //Move Left and Right:
                if(control.left && control.right){this.velocity.x = 0}
            }

            //Collision Horizontal:
            horizontalCollision(){
                for (let i = 0; i<this.collisionBox.length; i++){
                    const curCol = this.collisionBox[i];
                    
                if (collision(this, curCol)){
                    console.log(collision(this,curCol))
                    if (this.velocity.x > 0 && control.right && control.up == false){
                        this.velocity.x = 0;
                        this.x = curCol.x - this.width - 0.01;
                        
                    }
                    if (this.velocity.x < 0 && control.left && control.up == false){
                        this.velocity.x = 0;
                        this.x = curCol.x + curCol.width + 0.01;
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