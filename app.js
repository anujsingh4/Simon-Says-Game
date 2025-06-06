let gameSequence=[];
let userSequence=[];

let btns = ["yellow", "red", "purple", "green"];


let started = false;
let level = 0;

let h2 = document.querySelector("#level-title");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
    }
    started = true;
    levelUp();
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp() {
    userSequence = [];
    level++;
    h2.classList.remove("blink");
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random() * 4 );
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSequence.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userSequence[idx] === gameSequence[idx]){
        if(userSequence.length === gameSequence.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.classList.add("blink");
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#e0e1dd";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSequence.push(userColor);

    checkAns(userSequence.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset() {
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}

