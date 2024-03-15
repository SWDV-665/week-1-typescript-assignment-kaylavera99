var Grocery = /** @class */ (function () {
    function Grocery(item, quantity, dept) {
        this.item = item;
        this.quantity = quantity;
        this.dept = dept;
    }
    return Grocery;
}());
var cart = [
    new Grocery("Banana", 10, "Produce"),
    new Grocery("Carrot", 5, "Produce"),
    new Grocery("Milk", 1, "Dairy"),
    new Grocery("Bread", 2, "Bakery"),
    new Grocery("Grilled Chicken", 4, "Deli"),
    new Grocery("Gouda", 1, "Deli")
];
for (var i = 0; i < cart.length; i++) {
    if (cart[i].quantity > 1) {
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
            listItem.textContent = "".concat(grocery.quantity, " ").concat(grocery.item, " ").concat(grocery.dept);
            groceryList.appendChild(listItem);
        });
    }
});
