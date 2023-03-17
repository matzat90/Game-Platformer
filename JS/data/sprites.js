const playerSprIdleR = new Image(600,150)
playerSprIdleR.src = "img/spr_player/IdleR.png"

const playerSprIdleL = new Image(600,150)
playerSprIdleL.src = "img/spr_player/IdleL.png"

const playerSprRunR = new Image(900,150)
playerSprRunR.src = "img/spr_player/RunR.png"

const playerSprRunL = new Image(900,150)
playerSprRunL.src = "img/spr_player/RunL.png"

const playerSprJumpR = new Image(150,150)
playerSprJumpR.src = "img/spr_player/JumpR.png"

const playerSprJumpL = new Image(150,150)
playerSprJumpL.src = "img/spr_player/JumpL.png"

const playerSprFallR= new Image(150,150)
playerSprFallR.src = "img/spr_player/FallR.png"

const playerSprFallL= new Image(150,150)
playerSprFallL.src = "img/spr_player/FallL.png"

const playerSprDead = new Image(150,150)
playerSprDead.src = "img/spr_player/Dead.png"

const playerSpr = [
    {
        name: "RunR",
        src: playerSprRunR,
        fr: 6,
        buffor: 10,
        width: playerSprRunR.width,
        height: playerSprRunR.height,
        offSetX: 50,
        offSetY: -25,
        frameSquer: 150
    },
    {
        name: "RunL",
        src: playerSprRunL,
        fr: 6,
        buffor: 10,
        width: playerSprRunL.width,
        height: playerSprRunL.height,
        offSetX: 50,
        offSetY: -25,
        frameSquer: 150
    },
    {
        name: "IdleR",
        src: playerSprIdleR,
        fr: 4,
        buffor: 10,
        width: playerSprIdleR.width,
        height: playerSprIdleR.height,
        offSetX: 45,
        offSetY: -26,
        frameSquer: 150
    },
    {
        name: "IdleL",
        src: playerSprIdleL,
        fr: 4,
        buffor: 10,
        width: playerSprIdleL.width,
        height: playerSprIdleL.hegiht,
        offSetX: 45,
        offSetY: -26,
        frameSquer: 150
    },
    {
        name: "JumpR", 
        src: playerSprJumpR,
        fr: 1,
        buffor: 10,
        width: playerSprJumpR.width,
        height: playerSprJumpR.hegiht,
        offSetX: 45,
        offSetY: -26,
        frameSquer: 150
    },
    {
        name: "JumpL",
        src: playerSprJumpL,
        fr: 1,
        buffor: 10,
        width: playerSprJumpL.width,
        height: playerSprJumpL.hegiht,
        offSetX: 45,
        offSetY: -26,
        frameSquer: 150
    },
    {
        name: "FallR",
        src: playerSprFallR,
        fr: 1,
        buffor: 10,
        width: playerSprFallR.width,
        height: playerSprFallR.hegiht,
        offSetX: 45,
        offSetY: -26,
        frameSquer: 150
    },
    {
        name: "FallL",
        src: playerSprFallL,
        fr: 1,
        buffor: 10,
        width: playerSprFallL.width,
        height: playerSprFallL.hegiht,
        offSetX: 45,
        offSetY: -26,
        frameSquer: 150
    },
    {
        name: "Dead",
        src: playerSprDead,
        fr: 1,
        buffor: 10,
        width: playerSprDead.width,
        height: playerSprDead.hegiht,
        offSetX: 45,
        offSetY: -50,
        frameSquer: 150
    },
]

const coinsSprImg = new Image(250,50)
coinsSprImg.src = "img/spr_star/stars.png"

const coinsSpr = [
    {
        name: "starIdle",
        src: coinsSprImg,
        fr: 6,
        buffor: 5,
        width: coinsSprImg.width,
        height: coinsSprImg.height,
        offSetX: 0,
        offSetY: 0,
        frameSquer: 50
    }
]

const golemWalkRSprImg = new Image (3600,300)
golemWalkRSprImg.src = "img/spr_golem/GolemR.png"

const golemWalkLSprImg = new Image (3600,300)
golemWalkLSprImg.src = "img/spr_golem/GolemL.png"

const golemSpr = [
    {
        name: "WalkR",
        src: golemWalkRSprImg,
        fr: 12,
        buffor: 5,
        width: golemWalkRSprImg.width,
        height: golemWalkRSprImg.hegiht,
        offSetX: 70,
        offSetY: -80,
        frameSquer: 300
    },
    {
        name: "WalkL",
        src: golemWalkLSprImg,
        fr: 12,
        buffor: 5,
        width: golemWalkLSprImg.width,
        height: golemWalkLSprImg.hegiht,
        offSetX: 70,
        offSetY: -80,
        frameSquer: 300
    }
]