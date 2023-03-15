// Canvas settings:
const canvas = document.querySelector(".canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 1600;
canvas.height = 900;
ctx.translate(-600,0);

const canvasBg = document.querySelector(".canvas2")
const ctxBg = canvasBg.getContext('2d')
canvasBg.width = 1600;
canvasBg.height = 900;

//Gravity:
const gravity = 0.25;

//CollisionBox Array:


const collisionArr = [];
for(let i = 0; i< floorArr.length; i += 150){
    collisionArr.push(floorArr.slice(i,i +150));
}

let collisionBoxArr = [];
collisionArr.forEach((row, y) => {
    row.forEach((col,x) => {
        if (col == 15){
            collisionBoxArr.push(new CollisionBox({
                positionX: x*50,
                positionY: y*50
            }))
        }
    })
})


//Map size:
const mapSize = collisionArr[0].length*50

//Instances Bg-Canvas:
const bgSky = new Image
bgSky.src = "img/bg/bg_sky.png"

const bgCloudsImg = new Image
bgCloudsImg.src = "img/bg/bg_clouds.png"
const bgClouds = new autoLoopBg({
    src: bgCloudsImg,
    velocity: .25
});

const firstPlanImg = new Image
firstPlanImg.src = "img/bg/bgP_1.png"
const firstPlan = new paraBg({
    src: firstPlanImg,
    velocity: .2,
    width: 3200
})

const firstPlanImg2 = new Image
firstPlanImg2.src = "img/bg/bgP_2.png"
const firstPlan2 = new paraBg({
    src: firstPlanImg2,
    velocity: .1,
    width: 2400
})

const firstPlanImg3 = new Image
firstPlanImg3.src = "img/bg/bgP_3.png"
const firstPlan3 = new paraBg({
    src: firstPlanImg3,
    velocity: .05,
    width: 2400
})

//Instances Game-Canvas:
const player = new Player 
    ({
    positionX: 1300,
    positionY:100,
    width:50,
    height:99,
    collisionBox: collisionBoxArr
    });


const playerSprObj = new Sprite(playerSpr,2,player)    

const mainBg = new Image
mainBg.src = "img/bg/Map2.png"
console.log(mainBg)

//Animation loop:
let lasttime;
 function animate() {
     if (lasttime != null){
         let delta = (Date.now() - lasttime)/2;
        //Update Canvas-Bg section:
        ctxBg.clearRect(0,0,canvasBg.width,canvasBg.height) 
        ctxBg.drawImage(bgSky,0,0);
        bgClouds.draw(delta)
        firstPlan3.draw(delta)
        firstPlan2.draw(delta)
        firstPlan.draw(delta)
        //Update Canvas-Game section:
        ctx.clearRect(0,0,mapSize,canvas.height) //If map is not scaled than clear width and heigt must be equal to all map size.
        ctx.drawImage(mainBg,0,0);
        ctx.translate(0,0);
        collisionBoxArr.forEach((el) => {
            el.update();
        })
        
        player.update(delta);
        playerSprObj.drawSpr();
        
        
                
     }
     lasttime = Date.now();
     window.requestAnimationFrame(animate);
 }

 window.requestAnimationFrame(animate);