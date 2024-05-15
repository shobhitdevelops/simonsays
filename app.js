let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started =true;
        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelUp(){

    userseq=[];
    level ++;
    h2.innerText = `Level ${level}`;

    let ranidx=Math.floor(Math.random()*3);
    let rancolor = btns[ranidx];
    let ranbtn = document.querySelector(`.${rancolor}`);

    gameseq.push(rancolor);
    console.log(gameseq);
    
    gameflash(ranbtn);

}

function checkanswer(idx){
    // console.log("current level: ",level);

    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `game over! your score was <b>${level}</br><br>press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#646B63";

        }),250;
        reset();

    }
}

function btnpress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkanswer(userseq.length-1);

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}   
function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level = 0;
}
