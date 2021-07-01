let cartList = document.querySelector(".cart-list");

let cart = JSON.parse(localStorage.getItem("cart"));

// if (!cart) {
// 	cart = [];
// 	localStorage.setItem("cart", []);
// }
testObj = [
	{ title: "shirt", price: 1 },
	{ title: "shirt", price: 2 },
	{ title: "shirt", price: 1 },
	{ title: "shirt", price: 5 },
];
localStorage.setItem("cart", JSON.stringify(testObj));
let totalSum = 0;
let removeItems = 0;
for (let x in cart) {
	totalSum += cart[x].price;
	let item = document.createElement("li");
	item.classList.add("list-group-item");
	item.classList.add("d-flex");
	item.classList.add("justify-content-between");
	item.classList.add("align-items-start");
	item.innerHTML = `
				<div class="ms-2 me-auto">
					<div class="fw-bold">${cart[x].title}</div>
					
				</div>
                <div>
					
                    <span class="badge bg-primary rounded-pill"> price : ${cart[x].price}</span>
					<div><i class="fas fa-trash-alt delete-icon"></i></div>
				</div>
			`;
	item.querySelector(".delete-icon").addEventListener("click", function (e) {
		e.path[3].remove();
		removeItems++;
		totalSum = totalSum - cart[x].price;
		delete cart[x];
		localStorage.setItem("cart", JSON.stringify(cart));
		document.querySelector(".t-price").remove();
		setPrice();
	});
	cartList.appendChild(item);
}

setPrice();
function setPrice() {
	let item = document.createElement("li");
	item.classList.add("list-group-item");
	item.classList.add("d-flex");
	item.classList.add("justify-content-between");
	item.classList.add("align-items-start");
	item.classList.add("t-price");
	item.innerHTML = `
<div class="ms-2 me-auto">
<div class="fw-bold"></div>

</div>
                <div>
                
                <span class="badge bg-primary rounded-pill">Total Price : ${totalSum}</span>
                
				</div>
                `;

	document.querySelector("body").appendChild(item);
}
