var Basket = function() {};

Basket.prototype.init = function() {
	Basket.contents = []; 
	Basket.form = document.getElementsByTagName('form')[0]; 
	Basket.basketContents = document.getElementById('basketContents'); 

	Basket.form.addEventListener('submit', Basket.addToBasket, false); 

	document.getElementById('basketLink').addEventListener(
		'click', 
		Basket.showBasket, 
		false
	); 
}

Basket.addToBasket = function(e) {
	e.preventDefault(); 
	
	var item = {}
	var selects = Basket.form.getElementsByTagName('select'); 
	
	for (var i = 0; i < selects.length; i++) {
		item[selects[i].name] = selects[i].value; 
	}
	
	item.productTitle = document.getElementById('productTitle').textContent; 
	item.productPrice = document.getElementById('productPrice').textContent;

	Basket.contents.push(item); 
	Basket.showBasket('justAdded'); 
	
	document.getElementById('numItems').firstElementChild.textContent = Basket.contents.length; 
}

Basket.showBasket = function() {
	var ul = document.createElement('ul'); 
	var close = '<p id="close"><a href="#">Close<span>X</span></a></p>'; 
	
	Basket.basketContents.innerHTML = ''; 
	
	if (this.id == 'basketLink') {
		for (var i = 0; i < Basket.contents.length; i++) {
			var item = Basket.item(Basket.contents[i]); 
			ul.appendChild(item); 
		}
	} else {
		var item = Basket.item(Basket.contents[Basket.contents.length - 1]); 
		ul.appendChild(item); 
	} 

	basketContents.innerHTML = close; 
	basketContents.appendChild(ul); 
	basketContents.className = ''; 
	basketContents.style.width = 
		parseFloat(window.getComputedStyle(basketContents.parentNode.parentNode)['width'].replace('px', '')) / 3 + 'px'; 
	
	document.getElementById('close').addEventListener('click', Basket.closeBasket, false); 
}

Basket.closeBasket = function() {
	Basket.basketContents.className = 'hide'; 
}

Basket.item = function(item) {
	var li_item = document.createElement('li'); 
	var ul_item = document.createElement('ul'); 
	
	li_productTitle = document.createElement('li'); 
	li_productPrice = document.createElement('li'); 
	li_productColour = document.createElement('li'); 
	li_productSize = document.createElement('li'); 
	li_productQuantity = document.createElement('li'); 
	
	li_productTitle.textContent = item.productTitle; 
	li_productPrice.innerHTML = '<span class="label">Price</span>' + item.productPrice; 
	li_productColour.innerHTML = '<span class="label">Colour</span>' + item.productColour; 
	li_productSize.innerHTML = '<span class="label">Size</span>' + item.productSize; 
	li_productQuantity.innerHTML = '<span class="label">Quantity</span>' + item.productQuantity; 

	li_productTitle.className = 'productTitle'; 
	li_productPrice.className = 'productPrice'; 
	li_productColour.className = 'productColour'; 
	li_productSize.className = 'productSize'; 
	li_productQuantity.className = 'productQuantity'; 

	ul_item.appendChild(li_productTitle); 
	ul_item.appendChild(li_productPrice); 
	ul_item.appendChild(li_productColour); 
	ul_item.appendChild(li_productSize); 
	ul_item.appendChild(li_productQuantity); 
	li_item.appendChild(ul_item);
	
	return li_item; 
}