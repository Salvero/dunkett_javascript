var inStock;
var shippingAvailable;
inStock = true;
shippingAvailable = false;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shippingAvailable;
