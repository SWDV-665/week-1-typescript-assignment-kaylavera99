var Grocery = /** @class */ (function () {
    function Grocery(item, quantity, unit, dept) {
        this.item = item;
        this.quantity = quantity;
        this.unit = unit;
        this.dept = dept;
    }
    return Grocery;
}());
var cart = [
    new Grocery("Banana", 1.5, "", "Produce"),
    new Grocery("Carrot", 5, "", "Produce"),
    new Grocery("Milk", 1, "", "Dairy"),
    new Grocery("Bread", 2, "", "Bakery"),
    new Grocery("Grilled Chicken", 4, "", "Deli"),
    new Grocery("Gouda", 1, "", "Deli"),
    new Grocery("Ranch Dressing", 1, "", "Condiments"),
    new Grocery("Steak", 4, "", "Deli"),
    new Grocery("Gouda", 1, "", "Deli")
];
for (var j = 0; j < cart.length; j++) {
    if (cart[j].dept === "Deli" || cart[j].dept === "Produce") {
        if (cart[j].quantity > 1) {
            cart[j].unit = "pounds";
        }
        else {
            cart[j].unit = "pound";
        }
    }
    else {
        continue;
    }
}
for (var i = 0; i < cart.length; i++) {
    if (cart[i].quantity > 1 && (cart[i].dept === "Produce")) {
        var mult = "s";
        cart[i].item = cart[i].item + mult;
    }
    else {
        continue;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var groceryList = document.getElementById("grocery_list");
    if (groceryList) {
        cart.forEach(function (grocery) {
            var listItem = document.createElement("li");
            listItem.textContent = "".concat(grocery.item, ",       ").concat(grocery.quantity, "         ").concat(grocery.unit, ",       ").concat(grocery.dept);
            groceryList.appendChild(listItem);
        });
    }
});
