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

const canvasFr = document.querySelector(".canvas3")
const ctxFr = canvasFr.getContext('2d')
canvasFr.width = 1600;
canvasFr.height = 900;

//Gravity:
const gravity = 0.25;

//Global Velocity:

const globalVel = 5;

//Global Canvas Position:
let canvasPositionZero = -521;
let canvasPositionX = 0;


//Collisions Arrays:
// Full Map Draft in rows and col:
const collisionArr = [];
for(let i = 0; i< floorArr.length; i += 300){
    collisionArr.push(floorArr.slice(i,i +300));
}
// Floors Objects:
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

//Coins Objects:
let collisionCoinsArr = []
collisionArr.forEach((row, y) => {
    row.forEach((col,x) => {
        if (col == 10){
            collisionCoinsArr.push(new CollisionCoinBox({
                positionX: x*50,
                positionY: y*50,
                imgName: "Coins",
                imgSrc: "img/spr_star/stars.png",
                imgWid: 250,
                imgHi: 50,
                imgFr: 6,
                imgBuffor: 10,
                imgOffsetX: 0,
                imgOffsetY: 0,
                imgSq: 50,
                imgRows: 1,
                imgPlan: ctx,
                imgType: "obj"
                
            }))
        }
    })
})


//Map size:
const mapSize = collisionArr[0].length*50

//INSTANCEC BG-CANVAS:
//Sky background:
const bgSky = new Image
bgSky.src = "img/bg/bg_sky.png"

//Clouds autoLoop Object:
const bgClouds = new autoLoopBg({
    velocity: .15,
    imgName: "Clouds",
    imgSrc: "img/bg/bg_clouds.png",
    imgWid: 3200,
    imgHi: 900,
    imgFr: 1,
    imgBuffor: 1,
    imgOffsetX: 0,
    imgOffsetY: 0,
    imgSq: 900,
    imgRows: 1,
    imgPlan: ctxBg,
    imgType: "static"
});
//ParalaxBg:
const firstPlan = new paraBg({
    //src: firstPlanImg,
    velocity: .1,
    imgName: "Trees",
    imgSrc: "img/bg/bgP_1.png",
    imgWid: 3200,
    imgHi: 900,
    imgFr: 1,
    imgBuffor: 1,
    imgOffsetX: 0,
    imgOffsetY: 0,
    imgSq: 3200,
    imgRows: 1,
    imgPlan: ctxBg,
    imgType: "static"
})
const firstPlan2 = new paraBg({
   
    velocity: .05,
    imgName: "Plains",
    imgSrc: "img/bg/bgP_2.png",
    imgWid: 2400,
    imgHi: 900,
    imgFr: 1,
    imgBuffor: 1,
    imgOffsetX: 0,
    imgOffsetY: 0,
    imgSq: 2400,
    imgRows: 1,
    imgPlan: ctxBg,
    imgType: "static"
  
})
const firstPlan3 = new paraBg({
   
    velocity: .05,
    imgName: "Moutains",
    imgSrc: "img/bg/bgP_3.png",
    imgWid: 2400,
    imgHi: 900,
    imgFr: 1,
    imgBuffor: 1,
    imgOffsetX: 0,
    imgOffsetY: 0,
    imgSq: 2400,
    imgRows: 1,
    imgPlan: ctxBg,
    imgType: "static"
})

//Instances Game-Canvas:

const finishImg = new Image(75,100)
finishImg.src = "img/doors/doorC.png"
const finish = {
    x: 10000,
    y: 500,
    width: 75,
    height: 100,
    img: finishImg,
    status: false,
    fun1: function() {
        if (player.score == player.scoreMax){
            
            this.status = true
            finishImg.src = "img/doors/doorO.png"
        }
    }

}


//Enemy Object:
const collisionEnemyArr = [];
for(let i = 0; i< enemyCollArr.length; i += 300){
    collisionEnemyArr.push(enemyCollArr.slice(i,i +300));
}
let collisionBoxEnemyArr = [];
collisionEnemyArr.forEach((row, y) => {
    row.forEach((col,x) => {
        if (col == 15){
            collisionBoxEnemyArr.push(new CollisionBox({
                positionX: x*50,
                positionY: y*50
            }))
        }
    })
})
let Enemies = [];
collisionEnemyArr.forEach((row, y) => {
    row.forEach((col,x) => {
        if (col == 5){
            Enemies.push(new golemEnemy({
                positionX: x*50,
                positionY: y*50,
                width: 80,
                height: 110,
                collisionBox: collisionBoxEnemyArr,
                imgName: "WalkR",
                imgSrc: "img/spr_golem/enGolSpr.png",
                imgWid: 2700,
                imgHi: 450,
                imgFr: 12,
                imgBuffor: 10,
                imgOffsetX: -70,
                imgOffsetY: -60,
                imgSq: 225,
                imgRows: 2,
                imgPlan: ctx,
                imgType: "obj"
                

            }))
        }
    })
})



//Player:
const player = new Player 
    ({
    positionX: 1300,
    positionY:100,
    width:50,
    height:99,
    collisionBox: collisionBoxArr,
    collisionCoins: collisionCoinsArr,
    collisionEnemyGolem: Enemies
    });
const playerSprObj = new Sprite(playerSpr,2,player)

//Camera:
const camera = new Camera({positionX: player.x - 500, positionY: player.y, width: 1300, height: 500})

//Add Sprite for CoinsArr
///const coinsArrSpr = []
//console.log(collisionCoinsArr)
//for(i=0; i<collisionCoinsArr.length; i++){
//    let x = new Sprite(coinsSpr,0,collisionCoinsArr[i])
//    coinsArrSpr.push(x);
//    
//}

// Main Map Image:
const mainBg = new Image
mainBg.src = "img/bg/BigMap.png"


//Animation loop:
let lasttime;
 function animate() {
     if (lasttime != null){
         let delta = (Date.now() - lasttime)/2;
        //Update Canvas-Bg section:
        ctxBg.clearRect(0,0,canvasBg.width,canvasBg.height) 
        ctxBg.drawImage(bgSky,0,0);
        bgClouds.draw(delta)
        firstPlan3.draw()
        firstPlan2.draw()
        firstPlan.draw()
        //Update Canvas-Game section:
        ctx.clearRect(0,0,mapSize,canvas.height) //If map is not scaled than clear width and heigt must be equal to all map size.
        ctx.drawImage(mainBg,0,0);
        ctx.translate(0,0);
        collisionBoxArr.forEach((el) => {
            el.update();
        })
        collisionCoinsArr.forEach((el)=> {
            el.coinDraw();
        })
        //coinsArrSpr.forEach((el)=> {
        //    el.drawSpr();
        //})
        collisionBoxEnemyArr.forEach((el) => {
            el.update()
        })
        Enemies.forEach((el)=> {
            el.update(delta)
        })
        
        
        ctx.drawImage(finish.img, finish.x,finish.y)
        finish.fun1()
        camera.update(delta)
        player.update(delta);
        if (!player.dead){
        playerSprObj.drawSpr();
        } else {
        ctx.drawImage(playerSprDead,player.x - 50,player.y - 50)
        }
        
        //Update Canvas Foreground:
        ctxFr.clearRect(0,0,1600,900)
        ctxFr.font = "48px serif";
        ctxFr.fillText(player.score, 10, 100);
        
                
     }
     lasttime = Date.now();
     window.requestAnimationFrame(animate);
 }

 window.requestAnimationFrame(animate);