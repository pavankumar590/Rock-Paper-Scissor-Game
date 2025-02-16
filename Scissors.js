let images = document.querySelectorAll(".choice");
let move = document.querySelector(".win-para");
let divPara = document.querySelector(".win-div");
let userScore = 0;
let compScore = 0;
let uscore = document.querySelector(".user-update-score");
let cscore = document.querySelector(".comp-update-score");

let genCompScore=()=>{
  let arr = ["rock","paper","sciccors"];
  let options = Math.floor(Math.random()*3);
  return arr[options];
};

let playGame = (userChoice)=>{
  let compChoice = genCompScore();
  if(userChoice===compChoice){
    move.innerText = "It Is Draw";
    move.style.backgroundColor = "black";
  }
  else{
    let userWin = true;
    if(userChoice==="rock"){
      userWin=compChoice==="paper" ? false:true;
    }
  else if(userChoice==="paper"){
    userWin=compChoice==="sciccors" ? false:true;
  }
  else{
    userWin=compChoice==="rock" ? false:true;
  }
  showWinner(userWin,userChoice,compChoice);
  }
 
};

let showWinner = (userWin, userChoice, compChoice)=>{
  if(userWin){
   move.innerText=`${userChoice} beats the ${compChoice}`;
   userScore++;
   uscore.innerText=userScore;
    move.style.backgroundColor = "green";

  }
  else{
    compScore++;
    move.innerText=`${compChoice} beats your ${userChoice}`;
    move.style.backgroundColor = "red";
    cscore.innerText=compScore;
    
    // move.innerText="bro";
  }
}

images.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    
   let userChoice= choice.getAttribute("id");
   playGame(userChoice);
  });
});