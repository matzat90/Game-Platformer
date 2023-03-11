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
        break;
    //Move left:
    case "KeyA":
        control.left = true;
        break;
    }
    console.log(control);
})

//Event Listner KEY UP:
addEventListener("keydown", (event) => {
    switch (event.code){
    //Move right:
    case "KeyD":
        control.right = false;
        break;
    //Move left:
    case "KeyA":
        control.left = false;
        break;
    }
    console.log(control);
})