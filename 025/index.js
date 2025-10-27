const number1 = document.querySelector("#num1");
const number2 = document.querySelector("#num2");
const result = document.querySelector("#result");

const trigger = document.querySelector("#generate");

const add_numbers = document.querySelector("#addi");
const sub_numbers = document.querySelector("#sub");
const multi_numbers = document.querySelector("#multi");
const div_numbers = document.querySelector("#div");

trigger.addEventListener("click", () => {
  rand_num1 = Math.floor(Math.random() * 100);
  rand_num2 = Math.floor(Math.random() * 100);

  number1.innerText = "1. Number: " + rand_num1;
  number2.innerText = "2. Number: " + rand_num2;
  result.innerText = "Result: ";
});

add_numbers.addEventListener("click", () => {
  result.innerText = `Result: ${rand_num1 + rand_num2}`;
});

sub_numbers.addEventListener("click", () => {
  result.innerText = `Result: ${rand_num1 - rand_num2}`;
});

multi_numbers.addEventListener("click", () => {
  result.innerText = `Result: ${rand_num1 * rand_num2}`;
});

div_numbers.addEventListener("click", () => {
  result.innerText = `Result: ${(rand_num1 / rand_num2).toFixed(2)}`;
});

// const rand_num1 =  Math.floor(Math.random() * (100 - 1));

// // function rand_num1()
// // {
// //   const random_num1 =  Math.floor(Math.random() * (100 - 1));

// //   setTimeout(() => {
// //   console.log("Delayed for 1 second.");
// // }, "1000");

// // return random_num1;
// // };

// // rand_num1();

// const rand_num2 = Math.floor(Math.random() * (100 - 1));

// number1.innerText += " "+ rand_num1;
// number2.innerText += " "+ rand_num2;

//const add = (rand_num1, rand_num2) => rand_num1 + rand_num2 ;
//const sub = (rand_num1, rand_num2) => rand_num1 - rand_num2;
//const multi = (rand_num1, rand_num2) => rand_num1 * rand_num2;
//const div = (rand_num1, rand_num2) => (rand_num1 / rand_num2).toFixed(2);

// function add_func(rand_num1, rand_num2)
// {
//   return rand_num1 + rand_num2
// };

// add_numbers.innerText += " " + add_func(rand_num1, rand_num2);

//add_numbers.innerText += " " + add(rand_num1, rand_num2);
sub_numbers.innerText += " " + sub(rand_num1, rand_num2);
multi_numbers.innerText += " " + multi(rand_num1, rand_num2);
div_numbers.innerText += " " + div(rand_num1, rand_num2);
