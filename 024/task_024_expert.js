//* Tag: 023 Aufgabe 1: Dynamisches Bestandsmanagement für ein Lagerhaus*/

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

let filtered_products = products_list.filter(function(filter_product)
{
  return filter_product.quantity < 10;
});

const new_products = filtered_products.map(function(product)
{
  return { name: product.name, totalValue: product.quantity*product.price};
});

console.log(new_products);

function find_product(products_list, find_id)
{
  for (let i = 0; i < products_list.length; i++) {
    if (products_list[i].id === find_id) 
    {
      products_list[i].quantity -= 1;
      return console.log(products_list[i]);      
    }    
  }
}

find_product(products_list, 3);

function add_product(products_list, new_name, new_price, new_quantity, new_category)
{
  products_list.push({id: Number(products_list[products_list.length-1].id)+1,
                      name: new_name,
                      price: new_price,
                      quantity: new_quantity,
                      category: new_category})
};

add_product(products_list, "Speaker", 200, 9, "Electronics")

console.log("************new products*************");
products_list.forEach(function(products)
{
  console.log(products);
});