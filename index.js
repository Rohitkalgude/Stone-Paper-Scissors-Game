let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userscorepara = document.querySelector("#user");
const computerscore = document.querySelector("#computer");

const genratecomputer = () => {
  const option = ["rock", "paper", "scissors"];
  const randomchice = Math.floor(Math.random() * 3);
  return option[randomchice];
};

const gamedraw = () => {
  console.log("Game was draw");
  message.innerText = "Game draw";
  message.style.backgroundColor = "blue";
};

const showwinner = (userwin, userchoice, computerchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    message.innerText = `You Winner ! ${userchoice} beats ${computerchoice} !`;
    message.style.backgroundColor = "green";
  } else {
    compscore++;
    computerscore.innerText = compscore;
    message.innerText = `You Loss!${computerchoice} beats ${userchoice} !`;
    message.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  const computerchoice = genratecomputer();

  if (userchoice === computerchoice) {
    gamedraw();
  } else {
    let userwin;
    if (
      (userchoice === "rock" && computerchoice === "scissors") ||
      (userchoice === "paper" && computerchoice === "rock") ||
      (userchoice === "scissors" && computerchoice === "paper")
    ) {
      userwin = true;
    } else {
      userwin = false;
    }

    showwinner(userwin, userchoice, computerchoice);
  }
};

choices.forEach((game) => {
  game.addEventListener("click", () => {
    const userchoice = game.getAttribute("id");
    playgame(userchoice);
  });
});
