var milkshakeAdd = document.getElementById("milkshakeAdd");
var cheeseAdd = document.getElementById("cheeseAdd");
var eggsAdd = document.getElementById("eggsAdd");
var tamalesAdd = document.getElementById("tamalesAdd");
var checkOut = document.getElementById("checkOut");
var totalTable = document.getElementById("totalTable");
var menuList = document.getElementById("menuList");
var shopAgain = document.getElementById("shopAgain");

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
	if (orderNameArray.length < 1) {
		alert("Sorry! Please add something to your order!")
	} else {
		showTotalBox();
		for (var i = 0; i < orderNameArray.length; i++) {
			totalTable.innerHTML += "<tr><td>" + orderNameArray[i] + "</td><td>$" + orderPriceArray[i] + "</td></tr>";
		}
		totalTable.innerHTML += "<br>" + calcTotal();
		menuList.style.display = "none";
	}
}

shopAgain.onclick = function() {
	showMenuAgain();
}

function calcTotal() {
	var total = null;
	for (var i = 0; i < orderPriceArray.length; i++) {
		total += parseInt(orderPriceArray[i], 10);
	}
	return "<b>Total:</b> $" + total;
}

function showTotalBox() {
	document.getElementById("totalBox").style.display = "block";
}

function showMenuAgain() {
	orderNameArray = [];
	orderPriceArray = [];
	totalTable.innerHTML = "<tr><th>Item</th><th>Price</th></tr><br>";
	document.getElementById("menuList").style.display = "block";
	totalBox.style.display = "none";
}