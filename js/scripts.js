function Phone(brand, model, price, color) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", model is " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.showPrice = function() {
  console.log("The " + this.brand + " " + this.model+ " costs " + this.price);
}

var SamsungS6 = new Phone("Samsung","S6", 3300, "white");
var iPhone6S = new Phone("Apple", "6S", 2250, "silver");
var OnePlusOne = new Phone ("OnePlus", "One", 1500, "black");

SamsungS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();

iPhone6S.showPrice();