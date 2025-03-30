function calculateBill() {
    let pizzaQty = parseInt(document.getElementById("pizzaQty").value);
    let burgerQty = parseInt(document.getElementById("burgerQty").value);
    let pastaQty = parseInt(document.getElementById("pastaQty").value);
    let sandwichQty = parseInt(document.getElementById("sandwichQty").value);

    let total = (pizzaQty * 250) + (burgerQty * 150) + (pastaQty * 200) + (sandwichQty * 120);

    alert(`Total Price: ₹${total}`);
}
