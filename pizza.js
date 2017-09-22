function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>you ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}	
	if (selectedSize === "Personal Pizza") {
			sizeTotal = 6;
	}	else if (selectedSize === "Medium Pizza") {
			sizeTotal = 10;
	}	else if (selectedSize === "Large Pizza") {
			sizeTotal = 14;
	}	else if (selectedSize === "Extra Large Pizza") {
			sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subTotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); //all three variables will be passed on to each function
};
	
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("purchase total: "+"$"+meatTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCheese(runningTotal,text1);
	
};

function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var k = 0; k < cheeseArray.length; k++) {
		if (cheeseArray[k].checked) {
			selectedCheese.push(cheeseArray[k].value);
			text1= text1+cheeseArray[k].value+"<br>";
		}
	}
	console.log("cheese text1: "+text1);
	console.log("purchase total: "+"$"+cheeseTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCrust(runningTotal,text1);
	
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var m = 0; m < crustArray.length; m++) {
		if (crustArray[m].checked) {
		  var selectedCrust = crustArray[m].value;
              text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === 'cheese stuffed crust') {
		crustTotal = 3;
	}
	runningTotal = (runningTotal + crustTotal);
	console.log("crust text1: "+text1);
	console.log("purchase total: "+"$"+crustTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getSauce(runningTotal,text1);
	
};

function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	selectedSauce =[];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var n = 0; n < sauceArray.length; n++) {
		if (sauceArray[n].checked) {
			selectedSauce.push(sauceArray[n].value);
			text1 = text1+sauceArray[n].value+"<br>";
		}
	}
	
	console.log("sauce text1: "+text1);
	console.log("purchase total: "+"$"+sauceTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVeggie(runningTotal,text1);
	
};

function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;
	selectedVeggie =[];
	var veggieArray = document.getElementsByClassName("veggie");
	for (var o = 0; o < veggieArray.length; o++) {
		if (veggieArray[o].checked) {
			selectedVeggie.push(veggieArray[o].value);
			console.log("selected veggie item: ("+veggieArray[o].value+")");
			text1 = text1+veggieArray[o].value+"<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("purchase total: "+"$"+veggieTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	
};
	