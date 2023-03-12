// Canvas settings:
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1600;
canvas.height = 900;

//Gravity:
const gravity = 0.25;



//CollisionBox Array:
let collisionBoxArr = [];
collisionArr.forEach((row, y) => {
    row.forEach((col,x) => {
        if (col == 1){
            collisionBoxArr.push(new CollisionBox({
                positionX: x*50,
                positionY: y*50
            }))
        }
    })
})



//Map size:
const mapSize = collisionArr[1].length*50

//Instances:
const player = new Player 
    ({
    positionX: 100,
    positionY:100,
    width:100,
    height:150,
    collisionBox: collisionBoxArr
    });

//Animation loop:
let lasttime;
 function animate() {
     if (lasttime != null){
         let delta = (Date.now() - lasttime)/2;
         
         //Update section:
        
        ctx.clearRect(0,0,mapSize,canvas.height) //If map is not scaled than clear width and heigt must be equal to all map size.
        
        ctx.translate(0,0);
        collisionBoxArr.forEach((el) => {
            el.update();
        })
        player.update(delta);
        
        
        
                
     }
     lasttime = Date.now();
     window.requestAnimationFrame(animate);
 }

 window.requestAnimationFrame(animate);