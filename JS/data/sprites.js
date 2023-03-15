const playerSprIdleR = new Image(600,150)
playerSprIdleR.src = "img/spr_player/IdleR.png"

const playerSprIdleL = new Image(600,150)
playerSprIdleL.src = "img/spr_player/IdleL.png"

const playerSprRunR = new Image(900,150)
playerSprRunR.src = "img/spr_player/RunR.png"

const playerSprRunL = new Image(900,150)
playerSprRunL.src = "img/spr_player/RunL.png"

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
        img: "",
        fr: 1,
    },
    {
        name: "JumpL",
        img: "",
        fr: 4,
    },
    {
        name: "FallR",
        img: "",
        fr: 4,
    },
    {
        name: "FallL",
        img: "",
        fr: 4,
    },
]