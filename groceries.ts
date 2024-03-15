class Grocery {
	item: string;
	quantity: number;
	unit: string;
	dept: string;
	

	constructor(item:string, quantity:number,unit:string, dept:string) {
		this.item = item;
		this.quantity = quantity;
		this.unit = unit;
		this.dept = dept;
	}
}


let cart: Grocery[] = [
	new Grocery("Banana", 1.5, "", "Produce"),
	new Grocery("Carrot", 5,"", "Produce"),
	new Grocery("Milk", 1, "", "Dairy"),
	new Grocery("Bread", 2, "", "Bakery"),
	new Grocery("Grilled Chicken", 4, "", "Deli"),
	new Grocery("Gouda", 1, "","Deli"),
	new Grocery("Ranch Dressing", 1,"", "Condiments"),
	new Grocery("Steak", 4, "","Deli"),
	new Grocery("Gouda", 1,"", "Deli")
	];

for (let j = 0; j < cart.length; j++){
	if (cart[j].dept === "Deli" || cart[j].dept === "Produce") {
		if (cart[j].quantity > 1) {
			cart[j].unit = "pounds"
		}
		else {
			cart[j].unit = "pound"
		}
		
	} else {
		continue;
	}
}

for (let i = 0; i < cart.length; i ++){
	if (cart[i].quantity > 1 && (cart[i].dept === "Produce")){
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
            listItem.textContent = `${grocery.item},       ${grocery.quantity}         ${grocery.unit},       ${grocery.dept}`;
            groceryList.appendChild(listItem);
        });
    }
});