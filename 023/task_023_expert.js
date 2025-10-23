/* Tag:022!!! Aufgabe 3: Kombinierte Herausforderung – Ein kleines Aufgabenmanagement-Tool*/
/*
let id_counter = 1;

function create_task(title, description)
{
  const task = {
    id: id_counter++,
    title,
    description,
    status: "pending"
  }; 

  return task;
}

const task = [];

const add_task = function(create_task)
{
  task.push(create_task);
}

const get_tasks_by_status = status =>
{
  const tasks_status = [];

  for (let i = 0; i < task.length; i++) 
  {
    if(task[i].status === status) 
      {
         tasks_status.push(task[i]); 
      }    
  }

  return tasks_status;
}

function update_task_status(id, newStatus)
{
  for (let i = 0; i < task.length; i++) 
  {
    if(task[i].id === id) 
      {
         task[i].status = newStatus;
         return true;
      }     
  }
  return false;
}

const get_task_by_id = id =>
{
  for (let i = 0; i < task.length; i++) 
  {
    if(task[i].id === id) 
      {
         return task[i];
      }      
  }
}

// Hier nur Beispiel-Aufrufe, du musst die Implementierung schreiben!
// const task1 = create_task("Einkaufen", "Milch, Brot, Eier");
// add_task(task1);

// const task2 = create_task("Code Review", "Review Pull Request #123");
// add_task(task2);

// update_task_status(task1.id, "completed");

// const pending_tasks = get_tasks_by_status("pending");
// console.log("Offene Aufgaben:", pending_tasks);

// const completed_task = get_task_by_id(task1.id);
// console.log("Abgeschlossene Aufgabe:", completed_task);

// === TEST SECTION ===

// Create 4 example tasks
const task1 = create_task("Grocery Shopping", "Buy milk, bread, and eggs");
const task2 = create_task("Code Review", "Check pull request #123");
const task3 = create_task("Gym Workout", "Leg day at the gym");
const task4 = create_task("Call Parents", "Weekly family call");

// Add them to the list
add_task(task1);
add_task(task2);
add_task(task3);
add_task(task4);

// Update some statuses
update_task_status(task1.id, "completed");
update_task_status(task3.id, "completed");

// Show all tasks
console.log("📋 All Tasks:");
console.log(task);

// Filter by status
const pendingTasks = get_tasks_by_status("pending");
console.log("🕓 Pending Tasks:", pendingTasks);

const completed_task = get_tasks_by_status("completed");
console.log("✅ Completed Tasks:", completed_task);

// Get task by ID
const foundTask = get_task_by_id(2);
console.log("🔍 Task found by ID (2):", foundTask);

*/

/************************************************ */

/* Tag: 023 Aufgabe 1: Dynamisches Bestandsmanagement für ein Lagerhaus*/

const products_list = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    quantity: 5,        
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    quantity: 15,       
    category: "Electronics"
  },
  {
    id: 3,
    name: "Office Chair",
    price: 150,
    quantity: 8,        
    category: "Furniture"
  },
  {
    id: 4,
    name: "Desk Lamp",
    price: 40,
    quantity: 20,       
    category: "Furniture"
  },
  {
    id: 5,
    name: "Water Bottle",
    price: 10,
    quantity: 50,       
    category: "Accessories"
  },
  {
    id: 6,
    name: "Notebook",
    price: 5,
    quantity: 7,        
    category: "Stationery"
  },
  {
    id: 7,
    name: "Pen Set",
    price: 12,
    quantity: 25,       
    category: "Stationery"
  }
];


products_list.forEach(function(products)
{
  console.log(products);
});

products_list.filter(function(filter_product)
{
  return filter_product.quantity < 10;
});





