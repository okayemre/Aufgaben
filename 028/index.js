const start_button = document.querySelector("#start_game");
const play_button = document.querySelector("#play_game");
const restart_button = document.querySelector("#restart_game");
const generator_button = document.querySelector("#number_generator");

const game_area = document.querySelector("#game_area_container");
const game_info = document.querySelector("#game_info_container");
const lets_play = document.querySelector("#play_container");
const input_area = document.querySelector("#input_area");
const random_number_display = document.querySelector("#random_number_display");
const game_reset_button = document.querySelector("#restart_game");

let points = document.getElementById("points").value;
let user_number = document.getElementById("user_number").value;

start_button.addEventListener("click", () => {
  game_area.style.display = "none";
  game_info.style.display = "block";
  lets_play.style.display = "block";
});

play_button.addEventListener("click", () => {
  input_area.style.display = "block";
});

document.getElementById("points").addEventListener("input", () => {
  let points_input = document.getElementById("points");
  let points = Number(points_input.value);

  if (points < 1 || points > 50) {
    alert("Please enter a valid point range (1-50).");
    points_input.value = "";
  }
});

document.getElementById("user_number").addEventListener("input", () => {
  let user_number_input = document.getElementById("user_number");
  let user_number = Number(user_number_input.value);

  if (user_number !== "" && user_number >= 1 && user_number <= 100) {
    generator_button.style.display = "block";
  } else {
    generator_button.style.display = "none";
    alert("Please enter a valid number (1-100).");
    user_number_input.value = "";
  }
});

generator_button.addEventListener("click", () => {
  const random_number = Math.floor(Math.random() * 100) + 1;
  random_number_display.style.display = "block";
  random_number_display.innerText = "Random Number: " + random_number;

  let points = Number(document.getElementById("points").value);
  let user_number = Number(document.getElementById("user_number").value);

  if (
    random_number >= user_number - (50 - points) &&
    random_number <= user_number + (50 - points)
  ) {
    game_result.style.display = "block";
    game_result.innerText = "Congratulations! You " + points + " points win!";
    game_reset_button.style.display = "block";
  } else {
    game_result.style.display = "block";
    game_result.innerText = "Sorry! You lose. Try again!";
    game_reset_button.style.display = "block";
  }
});

game_reset_button.addEventListener("click", () => {
  location.reload();
});
