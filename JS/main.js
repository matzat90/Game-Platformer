// Canvas settings:
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1600;
canvas.height = 900;

//Animation loop:
let lasttime;
// function animate() {
//     if (lasttime != null){
//         let delta = lasttime -Date.now;

//         window.requestAnimationFrame(animate);
//         console.log(delta);
//     }
//     lasttime = Date.now;
// }

function test(){
    let x = 1;
    console.log(x);
}

animate();