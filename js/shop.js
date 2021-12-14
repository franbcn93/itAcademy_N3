// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
  grocery: {
    value: 0,
    discount: 0,
  },
  beauty: {
    value: 0,
    discount: 0,
  },
  clothes: {
    value: 0,
    discount: 0,
  },
};
var total = 0;
buy(1);
buy(1);
// Exercise 1
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array
// https://medium.com/@jmoran.losada/javascript-map-reduce-filter-find-foreach-c%C3%B3mo-utilizarlos-y-sus-diferencias-e0e078646d11
function buy(id) {
  var valueProd = products.find((prod) => prod.id === id);
  // Afegim el valor a l'array
  // cart.push(valueProd.price);
  //   Afegim l'Objecte sencer
  cartList.push(valueProd);
  // calculateSubtotals();
  // calculateTotal();
  generateCart();
  //   console.log(cartList);
}

// Exercise 2
// https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
// Eliminaem l'array dels Objectes clickats i del preu.
function cleanCart() {
  while (cartList.length > 0) {
    cartList.pop();
    cart.pop();
  }
  //   console.log(cart);
  //   console.log(cartList);
}

// Exercise 3
// 1. Create a for loop on the "cartList" array
// 2. Implement inside the loop an if...else or switch...case to add the quantities of each
// type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

function calculateSubtotals() {
  var totalGrocery = 0;
  var totalBeauty = 0;
  var totalClothes = 0;

  for (const iterator of cartList) {
    switch (iterator.id) {
      case 1:
      case 2:
      case 3:
        totalGrocery = iterator.price;
        break;
    }
    switch (iterator.id) {
      case 4:
      case 5:
      case 6:
        totalBeauty = iterator.price;
        break;
    }
    switch (iterator.id) {
      case 7:
      case 8:
      case 9:
        totalClothes = iterator.price;
        break;
    }
  }
  subtotal.grocery.value += totalGrocery;
  subtotal.beauty.value += totalBeauty;
  subtotal.clothes.value += totalClothes;

  // console.log("El total de Grocery es: ", subtotal.grocery.value);
  // console.log("El total de beauty es: ", subtotal.beauty.value);
  // console.log("El total de clothes es: ", subtotal.clothes.value);
}

// Exercise 4
// Calculate total price of the cart either using the "cartList" array
function calculateTotal() {
  var total = 0;
  for (const iterator of cartList) {
    total += iterator.price;
  }
  console.log(total);
}

// Exercise 5
// Using the "cartlist" array that contains all the items in the shopping cart,
// generate the "cart" array that does not contain repeated items, instead each
//  item of this array "cart" shows the quantity of product.
function generateCart() {
  cartList.forEach(function (product) {
    var found = false;
    cart.forEach(function (item) {
      if (item.id == product.id) {
        item.quantity += 1;
        found = true;
      }
    });
    if (!found) {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
      return;
    }
  });
  console.log("function generateCart()", cart);
}

// Exercise 6
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
}

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}
