//Object Control:
const control = {
    left: false,
    right: false,
    up: false,
    down: false
}

//Event Listner KEY DOWN:
addEventListener("keydown", (event) => {
    switch (event.code){
    //Move right:
    case "KeyD":
        
        player.face = "right"
        
    //    if (playerSprObj.name != "RunR" && !control.up){
    //        changeSprite({
    //            objectSpr: playerSpr,
    //             object: playerSprObj,
     //           objectTarget: player
    //         },0)
    //    }
        
        
        if (control.left) {
            
        control.left = false;
        control.right = true;
        player.velocity.x = 1;
        } else {
        control.right = true;
        player.velocity.x = 1;
        }
                
        break;
    //Move left:
    case "KeyA":
        player.face = "left"
        
    //    if (playerSprObj.name != "RunL" && !control.up){
    //        changeSprite({
    //            objectSpr: playerSpr,
    //             object: playerSprObj,
    //            objectTarget: player
    //         },1)
    //    }
        
        if (control.right) {
            
        control.right = false;
        control.left = true;
        player.velocity.x = -1;
        } else {
        control.left = true;
        player.velocity.x = -1;
        }
        
        break;
    case "KeyW":
        if (player.jumpPremission){
        control.up = true;
        player.y -= -2;
        }
    //    console.log(player.velocity.y)
    //    if (player.velocity.y > 0){
    //        if (player.face == "right"){
    //            if (playerSprObj.name != "JumpR"){
    //            changeSprite({
    //                objectSpr: playerSpr,
    //                 object: playerSprObj,
    //                objectTarget: player
    //             },4)
    //            }
    //        } else if (player.face == "left"){
    //            if (playerSprObj.name != "JumpL"){
    //            changeSprite({
     //               objectSpr: playerSpr,
     //                object: playerSprObj,
    //                objectTarget: player
    //             },5)
    //            }
    //        }
    //    }
        break
    }
    
    
})

//Event Listner KEY UP:
addEventListener("keyup", (event) => {
    switch (event.code){
    //Move right:
    case "KeyD":
        
//        changeSprite({
//        objectSpr: playerSpr,
//        object: playerSprObj,
//        objectTarget: player
//       },2)
        if (control.right == false){
            
            return
        } else {
        control.right = false;
        player.velocity.x = 0;
        }
        
        break;
    //Move left:
    case "KeyA":
       
//       changeSprite({
//        objectSpr: playerSpr,
//        object: playerSprObj,
//       objectTarget: player
//       },3)
        if (control.left == false){
           
         return
        } else {
            control.left = false;
        player.velocity.x = 0;
        }
        
        break;
        case "KeyW":
            control.up = false;
            player.jumpPremission = false;
            player.jumpBlock = setTimeout(()=>{
                player.jumpPremission = true;
            }, player.jumpBlockTimer)
        break
    }
    
})