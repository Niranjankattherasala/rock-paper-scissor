let userscore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelectorAll("#msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];

};
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="draw";
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win!");
        msg.innerText="you win";

    }else{
        console.log("you lose");
        msg.innerText="you lose";

    }
}
const playGame=(userChoice)=>{

    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("compchoice=",compChoice);
    if(userChoice===compChoice){
        drawGame();

    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
     else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
     }else{
        userWin=compChoice==="rock"?false:true;
     }
     showWinner(userWin);

    }
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked",choiceId);
playGame(userChoice);
    });
});