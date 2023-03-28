const menu = document.querySelector(".menu")
const opt1 = document.getElementById("1")
const opt2 = document.getElementById("2")
const opt3 = document.getElementById("3")
let menuState = true;

const list = document.querySelector(".list")
const li1 = document.getElementById("li1")
const li2 = document.getElementById("li2")
const li3 = document.getElementById("li3")
let listState = false;

const premWindow = document.querySelector(".prem")
const btnAcc = document.getElementById("acc")
const btnDec = document.getElementById("dec")

const menuArr = [
    {disable: false,
    function: () => {window.location.replace('../Game-Platformer/game.html');},
    name: "1"},
    {disable: false,
    function: () => {
    menu.classList.toggle("displayNone")
    list.classList.toggle("displayNone")
    li1.classList.toggle("color-red")
    li1.classList.toggle("anim-blink")
    for(i =0; i < listArr.length; i++){
        if (listArr[i].disable){
            document.getElementById("li"+listArr[i].name).classList.add("opacity-5")
            listMax--
        }
        
    }
    controlNum = 1
    menuState = false
    listState = true
    },
    name: "2"},
    {disable: false,
    function: () => {close()},
    name: "3"},
]

const listArr =[
    {disable: false,
        function: () => {
            sessionStorage.setItem("level","1")
            window.location.replace('../Game-Platformer/game.html');},
    name: "1",
    },
    {disable: true,
        function: () => {
            sessionStorage.setItem("level","2")
            window.location.replace('../Game-Platformer/game.html');},
    name: "2",
    },
    {disable: true,
        function: () => {
            sessionStorage.setItem("level","3")
            window.location.replace('../Game-Platformer/game.html');},
    name: "3",
    },
]


let controlNum = 1
let listNum = 1
let listMax = 3

window.onload = () => {
//Ask for Local Storage:
switch (localStorage.getItem("premisson")){
    case null:
    premWindow.classList.toggle("displayNone")
    document.querySelector("body").style.cursor = "auto";
    break
    case"true":
    
    break
    case "false":
        menuArr[1].disable = true
        premWindow.classList.toggle("displayNone")
        document.querySelector("body").style.cursor = "auto";
           
    break
}
opt1.classList.toggle("color-red")
opt1.classList.toggle("anim-blink")

if (localStorage.getItem("premisson") == "true" && !localStorage.getItem("level")){
    localStorage.setItem("level","1")
} else if (localStorage.getItem("premisson") && localStorage.getItem("level")){
    let tempNum = Number(localStorage.getItem("level"))
    for(let i = 0; i<tempNum; i++){
        listArr[i].disable = false
        listMax ++
    }
    sessionStorage.setItem("level","1")
} else if (!localStorage.getItem("premisson")){
    sessionStorage.setItem("level","1")
}

if(localStorage.getItem("level")){
    listMax = Number(localStorage.getItem("level"))
}

}

btnAcc.addEventListener("click", ()=> {
    premWindow.classList.toggle("displayNone")
    localStorage.setItem("premisson", "true")
    localStorage.setItem("level", "1")
    sessionStorage.setItem("level","1")
    document.querySelector("body").style.cursor = "none";
   
})

btnDec.addEventListener("click", ()=> {
    premWindow.classList.toggle("displayNone")
    localStorage.setItem("premisson", "false")
    sessionStorage.setItem("level","1")  
    document.querySelector("body").style.cursor = "none";
})


addEventListener("keydown", (event)=>{
    if(menuState){
    for(i = 0; i< menuArr.length; i++){
        document.getElementById(menuArr[i].name).classList.remove("color-red")
        document.getElementById(menuArr[i].name).classList.remove("anim-blink")
    }
    if (event.code == "KeyW" || event.code=="ArrowUp"){
        controlNum --
    } else if (event.code == "KeyS" || event.code=="ArrowDown"){
        controlNum++
    }

    const controlRangeMenu = (x,min,max)=>{
        if (x > max){controlNum = min}
        else if (x< min){controlNum = max}
    }
    controlRangeMenu(controlNum,1,3)
        
    document.getElementById(controlNum.toString()).classList.toggle("color-red")
    document.getElementById(controlNum.toString()).classList.toggle("anim-blink")

    if (event.code == "Enter"){
        menuArr[controlNum-1].function()
    }
} else if (listState){
    
    for(i = 0; i< listArr.length; i++){
        document.getElementById("li"+ listArr[i].name).classList.remove("color-red")
        document.getElementById("li" +listArr[i].name).classList.remove("anim-blink")
        
    }
    if (event.code == "KeyW" || event.code=="ArrowUp"){
        listNum --
        console.log(listNum)
    } else if (event.code == "KeyS" || event.code=="ArrowDown"){
        listNum++
        console.log(listNum)
    }
    
    const controlRangeList = (x,min,max)=>{
        if (x > max){
        listNum = min}
        else if (x< min){
        listNum = max}
    }

    controlRangeList(listNum,1,listMax)
        
    document.getElementById("li" + listNum.toString()).classList.toggle("color-red")
    document.getElementById("li" + listNum.toString()).classList.toggle("anim-blink")

    if (event.code == "Enter"){
        listArr[listNum-1].function()
    }
    if (event.code == "Escape"){
        menuState = true
        listState = false
        controlNum = 1
        listNum = 1
        list.classList.toggle("displayNone")
        menu.classList.toggle("displayNone")
        for(i = 0; i< menuArr.length; i++){
            document.getElementById(menuArr[i].name).classList.remove("color-red")
            document.getElementById(menuArr[i].name).classList.remove("anim-blink")
        }
        for(i = 0; i< listArr.length; i++){
            document.getElementById("li"+ listArr[i].name).classList.remove("color-red")
            document.getElementById("li" +listArr[i].name).classList.remove("anim-blink")
            
        }
        opt1.classList.toggle("color-red")
        opt1.classList.toggle("anim-blink")
    }
}
})
