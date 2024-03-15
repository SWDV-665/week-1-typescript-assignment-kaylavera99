class Grocery {
	item: string;
	quantity: number;
	dept: string;

	constructor(item:string, quantity:number, dept:string) {
		this.item = item;
		this.quantity = quantity;
		this.dept = dept;
	}
}


let cart: Grocery[] = [
	new Grocery("Banana", 10, "Produce"),
	new Grocery("Carrot", 5, "Produce"),
	new Grocery("Milk", 1, "Dairy"),
	new Grocery("Bread", 2, "Bakery"),
	new Grocery("Grilled Chicken", 4, "Deli"),
	new Grocery("Gouda", 1, "Deli")
	];


for (let i = 0; i < cart.length; i ++){
	if (cart[i].quantity > 1){
		let mult = "s";
		cart[i].item = cart[i].item + mult;
	}
	else {
		continue;

	}
}

document.addEventListener("DOMContentLoaded", () => { 
    const groceryList = document.getElementById("grocery_list");
    if (groceryList) {
        cart.forEach(grocery =>{
            let listItem = document.createElement("li");
            listItem.textContent = `${grocery.quantity} ${grocery.item} ${grocery.dept}`;
            groceryList.appendChild(listItem);
        });
    }
});