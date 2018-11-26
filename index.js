var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
   itemName: item, 
   itemPrice: Math.floor(Math.random() * 100)
 });
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  } 
    let myCart = [];
    let myFinalCart = [];
    let string = 'In your cart, you have ';
    for (let i = 0; i < cart.length; i++) {
      let cartItem = Object.keys(cart[i])[0]
      let itemToView = cartItem + " at $" + cart[i][cartItem];
     let myCurrentCart = myCart.push(itemToView);
     console.log(myCurrentCart);
  }


//console.log(myCurrentCart);
// return `${string}`
}

function total() {
  let runningTotal = 0;
  let x;
  for (x in cart) {
   if (typeof x === "number") {
   runningTotal += x;
  } 
  return runningTotal;
}
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    let price = total(cart);
    cart = [];
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`;
  }

}