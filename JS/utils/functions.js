function collision(object1, object2){
    return (
        object1.x + object1.width >= object2.x &&
        object1.x <= object2.x + object2.width &&
        object1.y + object1.height >= object2.y &&
        object1.y <= object2.y + object2.height
    )
}

function changeSprite(
    {objectSpr: objectSpr, object:object, objectTarget:objectTarget
    },num){
    object.name = objectSpr[num].name
    object.src = objectSpr[num].src
    object.frames = objectSpr[num].fr
    object.buffor = objectSpr[num].buffor
    object.width = objectSpr[num].width
    object.height = objectSpr[num].height
    object.offSetX = objectSpr[num].offSetX
    object.offSetY = objectSpr[num].offSetY
    object.sq = objectSpr[num].frameSquer
    object.counter = 0
    object.curFrame = 0
    object.ObjTarget = objectTarget
}