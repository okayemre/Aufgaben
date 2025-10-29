const number1 = document.querySelector("#num1");
const number2 = document.querySelector("#num2");
const result = document.querySelector("#result");

const start_button = document.querySelector("#start");
const reset_button = document.querySelector("#reset");
const input_prompt = document.querySelector("#input-prompt");
const input_button = document.querySelector("#input-button");
const input_random = document.querySelector("#input-random");
const number_buttons = document.querySelectorAll("#numbers_btn button");

const generator = document.querySelector("#generate");
const add_numbers = document.querySelector("#addi");
const sub_numbers = document.querySelector("#sub");
const multi_numbers = document.querySelector("#multi");
const div_numbers = document.querySelector("#div");
const mod_numbers = document.querySelector("#mod");
const power_numbers = document.querySelector("#power");

let num1 ="";
let num2 ="";

/*----START----*/
start_button.addEventListener("click", () => {
  input_nums.style.display = "block";
});

input_prompt.addEventListener("click", () => {
  numbers_btn.style.display = "none";  

  num1 = Number(prompt("Enter 1. Number:"));
  num2 = Number(prompt("Enter 2. Number:"));

  number1.innerText = "1. Number: " + num1;
  number2.innerText = "2. Number: " + num2;
});

input_button.addEventListener("click", () => {
  alert("!!! Enter two digits only. \n\n Use 0 at the beginning for single-digit numbers (e.g., 05).");

  numbers_btn.style.display = "grid";

  let input_val = "";
  let current_num = 1;

  for (let i = 0; i < number_buttons.length; i++) {
    number_buttons[i].addEventListener("click", () => {
      input_val += number_buttons[i].innerText;

      if (input_val.length === 2) {
        if (current_num === 1) {
          num1 = Number(input_val);
          number1.innerText = "1. Number: " + num1;
          input_val = "";
          current_num = 2;
        } else {
          num2 = Number(input_val);
          number2.innerText = "2. Number: " + num2;
          input_val = "";
          numbers_btn.style.display = "none";
        }
      }
    });
  }
});

input_random.addEventListener("click", () => {
  numbers_btn.style.display = "none";
  generator.style.display = "block";
  generator.addEventListener("click", () => {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    number1.innerText = "1. Number: " + num1;
    number2.innerText = "2. Number: " + num2;
  });
});

add_numbers.addEventListener("click", () => {
  result.innerText = `Result: ${num1 + num2}`;
});

sub_numbers.addEventListener("click", () => {
  result.innerText = `Result: ${num1 - num2}`;
});

multi_numbers.addEventListener("click", () => {
  result.innerText = `Result: ${num1 * num2}`;
});

div_numbers.addEventListener("click", () => {
  if (num2 === 0) {
    result.innerText = "Result: !!! Cannot divide by zero!";
  } else {
    result.innerText = `Result: ${(num1 / num2).toFixed(2)}`;
  }
});

mod_numbers.addEventListener("click", () => {
  result.innerText = `Result: ${num1 % num2}`;
});

power_numbers.addEventListener("click", () => {
  result.innerText = `Result: ${Math.pow(num1, num2)}`;
});

reset_button.addEventListener("click", () => {
  input_nums.style.display = "none";
  generator.style.display = "none";
  numbers_btn.style.display = "none";

  number1.innerText = "1. Number:";
  number2.innerText = "2. Number:";
  result.innerText = "Result:";

  num1 = "";
  num2 = "";
});

