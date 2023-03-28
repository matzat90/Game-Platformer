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

//Randomize Numer 1-3:
let randomOneToThree = 0;

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
        if (col == 2){
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
        if (col == 3){
            collisionCoinsArr.push(new CollisionCoinBox({
                positionX: x*50,
                positionY: y*50,
                imgName: "Coins",
                imgSrc: "img/spr_star/stars.png",
                imgWid: 400,
                imgHi: 50,
                imgFr: 8,
                imgBuffor: 10,
                imgOffsetX: -10,
                imgOffsetY: -10,
                imgSq: 50,
                imgRows: 1,
                imgPlan: ctx,
                imgType: "obj"
                
                
            }))
            
        }
    })
})

for (i=0; i< collisionCoinsArr.length; i++){
    collisionCoinsArr[i].curFr = Math.floor(Math.random()*8)
    
}

//Map size:
const mapSize = collisionArr[0].length*50

//INSTANCEC BG-CANVAS:
//Sky background:
const bgSky = new Image
bgSky.src = levelsData[level-1].bgSky

const static1 = new Image
static1.src = levelsData[level-1].static1

const static2 = new Image
static2.src = levelsData[level-1].static2

//Clouds autoLoop Object:
const bgClouds = new autoLoopBg({
    velocity: .15,
    imgName: "Clouds",
    imgSrc: levelsData[level-1].bgClouds1,
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

const bgClouds2 = new autoLoopBg({
    velocity: .25,
    imgName: "Clouds",
    imgSrc: levelsData[level-1].bgClouds2,
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
    velocity: .08,
    imgName: "Trees",
    imgSrc: levelsData[level-1].firstPlan1,
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
    imgSrc: levelsData[level-1].firstPlan2,
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



const finish = new Door({
    positionX: levelsData[level-1].finishPositionX,
    positionY:levelsData[level-1].finishPositionY,
    width: 50,
    height: 70,
    imgName: "doors",
    imgSrc: "img/spr_door/doorSpr.png",
    imgWid: 1260,
    imgHi: 105,
    imgFr: 12,
    imgBuffor: 5,
    imgOffsetX: -28,
    imgOffsetY: -35,
    imgSq: 105,
    imgRows: 1,
    imgPlan: ctx,
    imgType: "obj"
})
    




//Enemy Object:
const collisionEnemyArr = [];
for(let i = 0; i< floorArr.length; i += 300){
    collisionEnemyArr.push(floorArr.slice(i,i +300));
}
let collisionBoxEnemyArr = [];
collisionEnemyArr.forEach((row, y) => {
    row.forEach((col,x) => {
        if (col == 2 || col == 5){
            collisionBoxEnemyArr.push(new CollisionBox({
                positionX: x*50,
                positionY: y*50
            }))
        }
    })
})
let Enemies = [];
collisionArr.forEach((row, y) => {
    row.forEach((col,x) => {
        if (col == 4){
            randomOneToThree = Math.floor(Math.random()*3)+1
            
            Enemies.push(new golemEnemy({
                positionX: x*50,
                positionY: y*50,
                width: 60,
                height: 80,
                collisionBox: collisionBoxEnemyArr,
                imgName: "WalkR",
                imgSrc: "img/spr_golem/enGolSpr.png",
                imgWid: 2700,
                imgHi: 450,
                imgFr: 12,
                imgBuffor: 10,
                imgOffsetX: -80,
                imgOffsetY: -80,
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
    positionX: levelsData[level-1].playerPositionX,
    positionY:levelsData[level-1].playerPositionY,
    width:30,
    height:85,
    collisionBox: collisionBoxArr,
    collisionCoins: collisionCoinsArr,
    collisionEnemyGolem: Enemies,
    imgName: "RunR",
    imgSrc: "img/spr_player/plSpr.png",
    imgWid: 900,
    imgHi: 1650,
    imgFr: 6,
    imgBuffor: 10,
    imgOffsetX: -60,
    imgOffsetY: -35,
    imgSq: 150,
    imgRows: 11,
    imgPlan: ctx,
    imgType: "obj"

    });


//Camera:
const camera = new Camera({positionX: player.x-900, positionY: player.y, width: 1300, height: 500})

// Main Map Image:
const mainBg = new Image
mainBg.src = levelsData[level-1].mainBg

//Animation loop:
let lasttime;
 function animate() {
     if (lasttime != null){
         let delta = (Date.now() - lasttime)/2;
        //Update Canvas-Bg section:
        ctxBg.clearRect(0,0,canvasBg.width,canvasBg.height) 
        ctxBg.drawImage(bgSky,0,0);
        bgClouds.draw(delta)
       bgClouds2.draw(delta)
       ctxBg.drawImage(static2,0,0);
       firstPlan2.draw()
       ctxBg.drawImage(static1,0,0);
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
        
        collisionBoxEnemyArr.forEach((el) => {
            el.update()
        })
        Enemies.forEach((el)=> {
            el.update(delta)
        })
        
        finish.update()
        camera.update(delta)
        player.update(delta);
        
        
        //Update Canvas Foreground:
        ctxFr.clearRect(0,0,1600,900)
        
        
                
     }
     lasttime = Date.now();
     window.requestAnimationFrame(animate);
 }

 window.requestAnimationFrame(animate);