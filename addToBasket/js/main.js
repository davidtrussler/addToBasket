/**
 * main JS file for Test page
**/
document.addEventListener('DOMContentLoaded', init, false); 

function init() {
	setUpBasket(); 
}

setUpBasket = function() {
	var basket = new Basket(); 
	
	basket.init(); 
}