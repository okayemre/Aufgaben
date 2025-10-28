const number1 = document.querySelector("#num1");
const number2 = document.querySelector("#num2");
const result = document.querySelector("#result");
const numbers_buttons = document.querySelector("#numbers_btn");


const btn_1 = document.querySelector("#one");
const btn_2 = document.querySelector("#two");

const start_button = document.querySelector("#start");



const trigger = document.querySelector("#generate");

const add_numbers = document.querySelector("#addi");
const sub_numbers = document.querySelector("#sub");
const multi_numbers = document.querySelector("#multi");
const div_numbers = document.querySelector("#div");
const mod_numbers = document.querySelector("#mod");
const power_numbers = document.querySelector("#power");

let num1;
let num2;

start_button.addEventListener("click", () => 
{
  let mode;
  let enter_numbers;

  if (confirm("Choose how to set the numbers:\n\n 🟢 Enter manually --> Click OK \n 🔵 Generate randomly --> Click Cancel or Abbrechen")) 
  {
    mode = "manual";
  } 
  else 
  {
    mode = "random";
  }

  if (mode == "manual") 
  {
    if(confirm("Choose how to enter the numbers:\n\n Prompt --> Click OK \n Buttons --> Click Cancel or Abbrechen"))
    {
      enter_numbers ="prompt";
      num1 = Number(prompt("Enter 1. Number:"));
      num2 = Number(prompt("Enter 2. Number:"));

      number1.innerText = "1. Number: " + num1;
      number2.innerText = "2. Number: " + num2;
    }
    else
    {
      numbers_buttons.style.display = "block";
      num1 = Number(btn_1 + btn_2);
      num2 = Number(btn_1 + btn_2);
    }
  } 
  else if(mode == "random")
  {
    trigger.style.display = "block";
    trigger.addEventListener("click", () => 
    {
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 100);

      number1.innerText = "1. Number: " + num1;
      number2.innerText = "2. Number: " + num2;
      result.innerText = "Result: ";
    });
  }
  else
  {
    trigger.style.display = "block"; 
  }
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

// const num1 =  Math.floor(Math.random() * (100 - 1));

// //   setTimeout(() => {
// //   console.log("Delayed for 1 second.");
// // }, "1000");

// // return random_num1;
// // };

// // num1();

// const num2 = Math.floor(Math.random() * (100 - 1));

// number1.innerText += " "+ num1;
// number2.innerText += " "+ num2;

//const add = (num1, num2) => num1 + num2 ;
//const sub = (num1, num2) => num1 - num2;
//const multi = (num1, num2) => num1 * num2;
//const div = (num1, num2) => (num1 / num2).toFixed(2);

// function add_func(num1, num2)
// {
//   return num1 + num2
// };

// add_numbers.innerText += " " + add_func(num1, num2);

// add_numbers.innerText += " " + add(num1, num2);
// sub_numbers.innerText += " " + sub(num1, num2);
// multi_numbers.innerText += " " + multi(num1, num2);
// div_numbers.innerText += " " + div(num1, num2);
