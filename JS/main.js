// Canvas settings:
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1600;
canvas.height = 900;



//Instances:
const player = new Player ({
    positionX: 100,
    positionY:100,
    width:100,
    height:150});

//Animation loop:
let lasttime;
 function animate() {
     if (lasttime != null){
         let delta = (Date.now() - lasttime)/2;
         //Update section:
        ctx.clearRect(0,0,canvas.width,canvas.height)
        player.update(delta);
        
         
     }
     lasttime = Date.now();
     window.requestAnimationFrame(animate);
 }

 window.requestAnimationFrame(animate);