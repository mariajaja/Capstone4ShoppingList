var milkshakeAdd = document.getElementById("milkshakeAdd");
var cheeseAdd = document.getElementById("cheeseAdd");
var eggsAdd = document.getElementById("eggsAdd");
var tamalesAdd = document.getElementById("tamalesAdd");
var checkOut = document.getElementById("checkOut");

var orderNameArray = [];
var orderPriceArray = [];

milkshakeAdd.onclick = function() {
	addItemToArray("Chocolate Cherry Milkshake", "25");
}

cheeseAdd.onclick = function() {
	addItemToArray("Organic Low-Fat American Cheese", "10");
}

eggsAdd.onclick = function() {
	addItemToArray("Egg-less Hard-Boiled Eggs", "5");
}

tamalesAdd.onclick = function() {
	addItemToArray("Tamales fresh from the can", "30");
}

function addItemToArray(name, price) {
	orderNameArray.push(name);
	orderPriceArray.push(price);
}

checkOut.onclick = function() {
	for (var i = 0; i < orderNameArray.length; i++) {
		console.log("Item: " + orderNameArray[i] + " Price: $" + orderPriceArray[i]);
	}
	calcTotal();
}

function calcTotal() {
	var total = null;
	for (var i = 0; i < orderPriceArray.length; i++) {
		total += parseInt(orderPriceArray[i], 10);
	}

	console.log("Total: $" + total);
}
