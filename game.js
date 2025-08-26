let user_score = 0;
let comp_score = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");
const compChoice=()=>{
    let arr=["rock","paper","scissor"];
    let i = Math.floor(Math.random()*3);   // generate random value between 0 to 2
    return arr[i];
}
const drawgame=()=>
{
    msg.innerText="Game was Drawn!";
    msg.style.backgroundColor="blue";
}
const showWin=(userwin,id,compchoice)=>
{
    if(userwin==true)
    {
         user_score++;
         user.innerText=user_score;
         msg.innerText="You Win!, play again";
         msg.style.backgroundColor = "green";
    }
    else{
        comp_score++;
        comp.innerText=comp_score;
        msg.innerText="You Loose!, try again";
        msg.style.backgroundColor = "red";
    }
}
const playgame=(id)=>{
    console.log("User choice = ",id);
    const compchoice=compChoice();
    console.log("compchoice = ",compchoice);
    if(id==compchoice)
    {
        drawgame();
    }
    else
    {
        let userwin = true;
        if(id=="rock")
        {
            if(compchoice=="paper")
            {
                userwin = false;
            }
        }
        if(id=="paper")
        {
            if(compchoice=="scissor")
            {
                userwin = false;
            }
        }
        if(id=="scissor")
        {
            if(compchoice=="rock")
            {
                userwin=false;
            }
        }
        showWin(userwin,id,compchoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const id=choice.getAttribute("id");
        console.log("choice was clicked",id);
        playgame(id);
    });
});
