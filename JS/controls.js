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
        control.right = true;
        player.velocity.x = 1;
        break;
    //Move left:
    case "KeyA":
        control.left = true;
        player.velocity.x = 1;
        break;
    }
    
})

//Event Listner KEY UP:
addEventListener("keyup", (event) => {
    switch (event.code){
    //Move right:
    case "KeyD":
        control.right = false;
        player.velocity.x = 0;
        break;
    //Move left:
    case "KeyA":
        control.left = false;
        player.velocity.x = 0;
        break;
    }
    
})