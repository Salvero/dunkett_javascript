var greeting = "Howdy ";
var name = "Matt";
var message = ', please check your order:';
var welcome = greeting + name + message;

//Create variables to hold details about the sign
var sign = 'Cottage Store';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of Tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that SubTotal to replace it
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// Get the element that Shipping to replace it.
var elShipping = document.getElementById('shipping');
elShipping.textContent =  '$' + shipping;

// Get the element that grandTotal to replace it.
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
