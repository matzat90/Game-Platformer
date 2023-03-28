const starsDis = document.querySelector(".bar-star-con")
const timerDis = document.querySelector(".bar-timer")
const levelDis = document.querySelector(".bar-timer")
const infoDead = document.querySelector(".info-dead")
const infoWin = document.querySelector(".info-win")

let timerCount = 100;
const countDown = setInterval(()=>{
if (timerCount <= 1){
    player.dead = true;
    timerGameOver()
}else {
timerCount --
timerDis.innerHTML = timerCount
}
},1000)


function timerGameOver(){
    timerDis.classList.toggle("color-red")
    timerDis.classList.toggle("anim-blink")
    infoDead.classList.toggle("displayNone")
    infoDead.classList.toggle("anim-OnceFadeIn")
    timerDis.innerHTML = `Press <span class="color-white">F5</span>  to try again`
    clearInterval(countDown)
}

function winnerActive(){
    timerDis.classList.toggle("anim-blink")
    timerDis.classList.toggle("color-green")
    infoWin.classList.toggle("displayNone")
    infoWin.classList.toggle("anim-OnceFadeIn")
    clearInterval(countDown)
    timerDis.innerHTML = `Press <span class="color-white">F5</span>  to continue`
}

levelDis.innerHTML = "LEVEL "+level