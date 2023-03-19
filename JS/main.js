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
bgSky.src = "img/bg/bg_sky.png"

const static1 = new Image
static1.src = "img/bg/1static.png"

const static2 = new Image
static2.src = "img/bg/2static.png"

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

const bgClouds2 = new autoLoopBg({
    velocity: .25,
    imgName: "Clouds",
    imgSrc: "img/bg/bg_clouds2.png",
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
            console.log(randomOneToThree)
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
    collisionEnemyGolem: Enemies,
    imgName: "RunR",
    imgSrc: "img/spr_player/plSpr.png",
    imgWid: 900,
    imgHi: 1500,
    imgFr: 6,
    imgBuffor: 10,
    imgOffsetX: -50,
    imgOffsetY: -23,
    imgSq: 150,
    imgRows: 10,
    imgPlan: ctx,
    imgType: "obj"

    });


//Camera:
const camera = new Camera({positionX: player.x - 500, positionY: player.y, width: 1300, height: 500})

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
        
        
        //Update Canvas Foreground:
        ctxFr.clearRect(0,0,1600,900)
        
        
                
     }
     lasttime = Date.now();
     window.requestAnimationFrame(animate);
 }

 window.requestAnimationFrame(animate);