/* Aufgabe 1: Funktionen & Arrow Functions – Die flexible Code-Kapselung */

/* ----1.1 Funktionaler Werkzeugkasten für Arrays--*/

function map_array(arr, callback) 
{
  const result_arr = [];
  for (let i = 0; i < arr.length; i++) 
  {
    result_arr.push(callback(arr[i]));
  }

  return result_arr;
}

function callback_func(x) 
{
  return x + 2;
}

console.log(map_array([1, 2, 3, 4], callback_func));
console.log("**************************");

/*------------------------------------------------*/

function filter_array(arr, predicate)
{
  const result_arr = [];

  for (let i = 0; i < arr.length; i++) 
  {
    if (predicate(arr[i]) === true) 
    {
      result_arr.push(arr[i]);
    }   
  }

  return result_arr;
}

function predicate_func(x) 
{
  return x % 2 === 0;
}

console.log(filter_array([1,2,3,4,5,6], predicate_func));
console.log("**************************");


/*------------------------------------------------*/

function log_each(arr, logger) 
{
  for (let i = 0; i < arr.length; i++) 
  {
    logger(arr[i], i);    
  }
}

log_each(["a", "b", "c"], (elem, ind) => 
{
  console.log(elem, ind);
});
console.log("**************************");


/*------------------------------------------------*/
/*------------------------------------------------*/

/* ----1.2 Kontexte & this – Ein kniffliger Begleiter--*/

const calculator = 
{
    value: 0,

    add: function(num) 
    {
        this.value += num;
    },

    subtract: function(num) 
    {
        this.value -= num;
    },

    getFormattedValue: function() 
    {
        // Diese Methode soll 'Value: [aktueller Wert]' zurückgeben
        // Die Herausforderung ist, dass 'this.value' korrekt referenziert werden muss,
        // auch wenn du eine innere Hilfsfunktion verwendest, die möglicherweise den Kontext ändert.
        // Schreibe diese Methode so um, dass sie eine Arrow Function intern verwendet,
        // um den Wert zu formatieren und sicherzustellen, dass 'this.value' richtig bleibt.
        const format = () => {
            return `Value: ${this.value}`;
        };
        return format();
    }
};

calculator.add(5);
calculator.subtract(2);

console.log(calculator.getFormattedValue()); // "Value: 3"
console.log("**************************");

/*------------------------------------------------*/
/*------------------------------------------------*/

/* Aufgabe 2: Gültigkeitsbereich (Scope) – Die Architektur deiner Variablen */


/*----2.1 Variablen-Jagd: Vorhersagen und Erklären-----*/

function greet() {
    if (true) {
        var message = "Hello, ";
        let name = "World!";
        const greeting = message + name;
    }
    console.log(message); // message is still accessible here, because `var` has function scope (not block scope)
    //console.log(name); // <-- Was passiert hier, wenn entkommentiert? 
    /* !!!!!!name variable stayed inside the if scope and could not get out*/

    //console.log(greeting); // <-- Was passiert hier, wenn entkommentiert?
    /* !!!!!!greeting variable stayed inside the if scope and could not get out*/
}
greet();
console.log("**************************");


/*------------------------------------------------*/


// for (let i = 0; i < 3; i++) 
// {
//     setTimeout(function() {
//         console.log(i);
//     }, 100);
// }

// for (let j = 0; j < 3; j++) 
// {
//     setTimeout(function() {
//         console.log(j);
//     }, 200);
// }
/* kein kommentar :*/

console.log("**************************");
/*------------------------------------------------*/

let counter = 0;

function incrementer() {
    let counter = 10;
    return function() {
        counter++;
        console.log(counter);
    };
}

const incA = incrementer();
const incB = incrementer();

incA();
incA();
incB();

console.log("**************************");

/*------------------------------------------------*/
/*------------------------------------------------*/

/*-----2.2 Scope-Bugfix-----*/

function createDataProcessor(data) {
    const processedData = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i]; // Dieses 'var' ist problematisch
        setTimeout(function() {
            processedData.push("Verarbeitet: " + item); // Hier liegt der Hase im Pfeffer
            console.log("Aktueller Stand:", processedData);
        }, i * 100);
    }
    return processedData;
}

const myData = ["Apfel", "Birne", "Kirsche"];
const result = createDataProcessor(myData);

setTimeout(() => {
    console.log("Endgültiges Ergebnis nach 1 Sekunde:", result);
}, 1000);


/*------------------------------------------------*/
/*------------------------------------------------*/


/* Aufgabe 3: Kombinierte Herausforderung – Ein kleines Aufgabenmanagement-Tool*/

function create_task(title, description)
{
  let id_counter = 1;
  const status = "pending";

  const task = {
    id: id_counter++,
    title,
    description,
    status: "pending"
  }; 

  return task;
}

const task1 = create_task("Einkaufen", "Milch, Brot, Eier");
console.log(task1);


