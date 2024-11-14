let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  //rock paper scissors option
  const option = ["rock", "paper", "scissors"];
  const randInd = Math.floor(Math.random() * 3);
  return option[randInd];
};
const drawGame = () => {
  msg.innerText = "Game Was Draw.Paly Again!";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = ` You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    comScore++;
    compScorePara.innerText = comScore;
    msg.innerText = ` You Lose!  ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      // scissor,// paper
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissor , rock
      userwin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
