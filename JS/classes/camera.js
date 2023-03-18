class Camera {
    constructor({
        positionX: x,
        positionY: y,
        width: w,
        height: h
})
{
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.dir = -1
    this.camSpeed = 1
}

update(delta){
    ctx.fillStyle = "rgba(0,255,0,.5)"
    ctx.fillRect(this.x, this.y, this.width, this.height)
    this.followPlayer(delta)
    
}

followPlayer(delta){
    
    let distance = Math.round(player.x - this.x)
    let y = player.y - this.height + player.height
    let x = this.width/2 - player.width/2
    let camSpeed = 1;
    let canvasStep = delta*camSpeed;
    const paralaxBg = [firstPlan,firstPlan2,firstPlan3]
    
    // Set camera scroll directrion:
    if (distance > x){
        this.dir = 1
    } else if (distance < x){
        this.dir = -1
    }
    //Move camera and CTX (main canvas)
    if (distance < x - 3 || distance > x + 3){
        this.x += this.dir*delta
        switch (this.dir){
            case 1:
            canvasPositionX -= canvasStep * this.camSpeed;
            ctx.translate(-canvasStep * this.camSpeed,0)
            paralaxBg.forEach((el)=>{
                if (el.x + el.img.width > canvasBg.width){
                el.x -= delta*el.velocity
                }
            })
            break
            case -1:
            canvasPositionX += canvasStep * this.camSpeed;;
            ctx.translate(canvasStep * this.camSpeed,0)
            paralaxBg.forEach((el)=>{
                if (el.x < 0){
                    el.x += delta*el.velocity
                    }
            })
            break
        }
    } else {
        this.x = player.x - x
    }
    this.y = y
}


}
