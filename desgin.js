let gameseq=[];
let userseq=[];
let btns=["red","green","purple","yellow"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let back=document.querySelector('body');
let h1=document.querySelector('h1');
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function gameFlash(y)
{
   y.classList.add("flash");
   setTimeout(function()
   {
    y.classList.remove("flash");
   },250);
}

function userflash(y)
{
   y.classList.add("userflash");
   setTimeout(function()
   {
    y.classList.remove("userflash");
   },250);
}

function levelUp()
{
    userseq=[];

    let s=level++;
    if(s<4)
    {
    h2.innerText=`first Level${level}`;
    h2.style.color="green";
    h2.style.fontSize="50px";
    }
    else
    {
        h2.innerText=`second Level${level}`;
    h2.style.color="orange";
    back.style.backgroundColor="black";
    h2.style.fontSize="50px"; 
    h1.style.color="yellow";

    }
    let randemindex=Math.floor(Math.random()*4);
    let randomColor=btns[randemindex];
    let randombtn=document.querySelector(`.${randomColor}`);
   /* console.log(randemindex);
    console.log(randomColor);
    console.log(randombtn);*/
    gameseq.push(randomColor);
    console.log(gameseq);
    gameFlash(randombtn);

}
function checkAns(idx)
{
/* console.log(`current level${level}`); */
 

 if(userseq[idx]===gameseq[idx])
 {
   if(userseq.length==gameseq.length)
   {
    setTimeout(levelUp,1000);
   }
 }
 else 
 {
    h2.innerText=`Sorry Game is over! your score${(level)} press any key to start`;
    h2.style.color="red";
    let bc=document.querySelector('body');
    bc.style.backgroundColor="red";
    h1.style.color="black";
    setTimeout(function()
    {
        bc.style.backgroundColor="white";
    },150);
    
    renew();
 }
}

function btnpress()
{
    console.log(this);
   let btn=this;
   userflash(btn);

   let userColor=btn.getAttribute("id");
   console.log(userColor)
   userseq.push(userColor);
   checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(let i=0;i<allbtns.length;i++)
{
    allbtns[i].addEventListener("click",btnpress);
    
}
function renew()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;


}