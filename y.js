document.addEventListener("DOMContentLoaded", () => {
let playerscore=0;
let computerscore=0;
let cc=" ";
let hc=" ";
let rmsg="";
let wmsg="";
let rp=0;
const wholeresult=document.createElement("div");
document.body.appendChild(wholeresult);
const Rock=document.createElement("button");
Rock.textContent="Rock";
const Paper=document.createElement("button");
Paper.textContent="Paper";
const Scissor=document.createElement("button");
Scissor.textContent="Scissor";
const rresult=document.createElement("div");
document.body.appendChild(rresult);
document.body.appendChild(Rock);
document.body.appendChild(Paper);
document.body.appendChild(Scissor);
Rock.addEventListener("click",()=>
    {
    hc="rock";
    cc=computerchoice();
    playgame();

    }
);
Paper.addEventListener("click",()=>
    {
    hc="paper";
    cc=computerchoice();
    playgame();

    }
);
Scissor.addEventListener("click",()=>
    {
    hc="scissor";
    cc=computerchoice();
    playgame();
    }
);

function computerchoice()
{   let cc;
    const choice=["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    cc=choice[index];
    return cc;
}


/*function humanchoice()
{   
    let hc=prompt("enter your choice");
    hc=hc.toLowerCase();
    if(hc=="rock"||hc=="paper"||hc=="scissor")
        {
            console.log(hc);
        }
    else
    {
        console.log("enter valid choice else gfy ");
    }
    return hc;

}*/


function RPC(hc,cc)
{
    if(hc=="rock")
        {
            if(cc=="paper")
                {
                    computerscore=computerscore+1;
                    rmsg="bohoo! paper defeats rock, you lose <br> Score: Human- "+playerscore+"Computer- "+computerscore;
                }
            else if(cc=="scissor")
                {
                    playerscore=playerscore+1;
                    rmsg="booyah! rock defeats scissor,you win <br>Score: Human- "+playerscore+" Computer- "+computerscore;
                }
            else
                {
                    rmsg="its a tie!,yeah how abt we play again <br> Score: Human- "+playerscore+" Computer- "+computerscore;
                }

        }
    else if(hc=="paper")
        {
            if(cc=="scissor")
                {
                    computerscore=computerscore+1;
                    rmsg="bohoo! scissor defeats paper, you lose <br> Score: Human- "+playerscore+"Computer- "+computerscore;
                }
            else if(cc=="rock")
                {
                    playerscore=playerscore+1;
                    rmsg="booyah! paper defeats rock,you win <br> score: Human- "+playerscore+" Computer- "+computerscore;
                }
            else{
                rmsg="its a tie!,yeah how abt we play again <br> Score: Human- "+playerscore+" Computer- "+computerscore;
                }
            
        }
    else
    {
        if(cc=="rock")
            {
                computerscore=computerscore+1;
                rmsg="bohoo! rock defeats scissor, you lose<br> Score: Human- "+playerscore+"Computer- "+computerscore;
            }
        else if(cc=="paper")
            {
                playerscore=playerscore+1;
                rmsg="booyah! scissor defeats paper,you win<br> Score: Human-"+playerscore+"Computer-"+computerscore;
            }
        else
            {
                rmsg="its a tie!,yeah how abt we play again<br> Score: Human- "+playerscore+" Computer- "+computerscore;
            }
    }
    rresult.innerHTML=rmsg;
    
}


function playgame()
{   
    if(rp<5)
    {
    RPC(hc,cc);
    rp++
    }
    if(rp===5)
    {
    if(playerscore>computerscore)
        {
            wmsg="YOU WIN";
        }
    else if(computerscore>playerscore)
    {
        wmsg="YOU LOSE";
    }
    else{
        wmsg="TIE";
    }
    wholeresult.textContent=wmsg;
}
}

});