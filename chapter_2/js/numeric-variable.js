var cottagePrice;
var cottageProfit;
var total;

cottagePrice = 500;
cottageProfit = 725;
total = cottagePrice  * cottageProfit;


var el = document.getElementById('cost');
el.textContent = '$ ' + total;
