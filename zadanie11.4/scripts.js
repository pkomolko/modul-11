function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("This phone is " + this.brand +", color is " + this.color +" and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");

iPhone6S.printInfo();