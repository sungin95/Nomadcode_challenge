const choiceForm = document.getElementById("choice_form");
const first_input = document.getElementById("max-number");
const second_input = document.getElementById("choice-number");
const game = document.getElementById("star-game");
const first_info = document.querySelector("#chose");
const second_info = document.querySelector("#machine");
const result = document.querySelector("#result")

choiceForm.addEventListener("submit", handlePlay);

function handlePlay(event){
  event.preventDefault();
  const maxNun = first_input.value;
  const choNum = second_input.value;
  game.classList.remove("hidden");
  const random_num = (Math.floor(Math.random() * maxNun) + 1)
  first_info.innerText = choNum;
  second_info.innerText = random_num;
  if(random_num == choNum ){
    result.innerText = "You win! So ease!!!";
    result.classList.add("red");
  }
  else {
    result.innerText = "You lost!";
    result.classList.remove("red");
  }
}




