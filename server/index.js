import express from "express";
import products from "./products.js";

const app = express();

app.use(express.json());

const n = 3;

let orders = [];

let currentOrder = [];

let couponApplicable = false;

// order = {
//     items: [
//         {
//             "name":
//             "price":
//             "quantity":
//         }
//     ]
// }

app.get("/", (req, res) => {
	res.send("Server is running");
});

app.get("/products", (req, res) => {
	res.json(products);
});

app.post("/addToCart", (req, res) => {
	currentOrder = req.body.items;
	// console.log("Current order", currentOrder);
	orders = orders.concat(currentOrder);
	// console.log("orders", orders);
	if (orders.length > 0 && orders.length % n == 0) {
		couponApplicable = true;
	} else {
		couponApplicable = false;
	}
	if (couponApplicable) {
		return res.json({ message: "added to cart", coupon: "applicable" });
	} else {
		return res.json({ message: "added to cart" });
	}
});

app.post("/checkout", (req, res) => {
	let totalPrice = 0;
	let discountedPrice = 0;
	let applyCoupon = req.query.applyCoupon == "true" && couponApplicable;

	for (let item of currentOrder) {
		totalPrice += item.price * item.quantity;
	}
	if (applyCoupon) {
		discountedPrice = totalPrice - Math.ceil((10 * totalPrice) / 100);
		return res.json({
			"Total Price": totalPrice,
			dicount: "Coupon applied for 10% discount",
			"Discounted Price": discountedPrice,
		});
	}
	return res.json({
		"Total Price": totalPrice,
	});
});

app.listen(5000, () => {
	console.log("server running on 5000");
});
