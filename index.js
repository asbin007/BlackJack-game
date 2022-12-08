let cards = []
let sum = 0;
let Blackjack = false;
let isAlive = false;

let messageEl = document.querySelector("#message-el");

let sumEl = document.querySelector("#sum-el");
let player={
    name: "Asbin",
    chips: 245,

}
let playerEl= document.querySelector("#player-el");
playerEl.textContent=player.name+": "+"$"+ player.chips;

// random number generating
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else return randomNumber;
}

let cardEl = document.querySelector("#card-el");
function startGame() {
  renderGame();
}

let message = "";

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  //display card
  cardEl.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card? 😶";
  } else if (sum === 21) {
    message = "Wohoo! YOu've got a Blackjack 🙀";
    Blackjack = true;
  } else {
    message = "You are out of the game! 😫";
    isAlive = false;
  }
  // display the messsage in messageel

  messageEl.textContent = message;

  // display sum
  sumEl.textContent = "sum: " + sum;
}

// for new card
function newCard() {
    if(isAlive===true && Blackjack===false){


  console.log("Drawing a new card from the deck!");
  let cards = getRandomCard();
  sum = cards + sum;
  startGame();
  //   renderGame();
}
}