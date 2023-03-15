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
        player.y = player.y - 2;
        }
        break
    }
    
    
})

//Event Listner KEY UP:
addEventListener("keyup", (event) => {
    switch (event.code){
    //Move right:
    case "KeyD":
        if (control.right == false){
            return
        } else {
        control.right = false;
        player.velocity.x = 0;
        }
        break;
    //Move left:
    case "KeyA":
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