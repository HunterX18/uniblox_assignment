import {
	getCurrentOrder,
	getOrders,
	getProducts,
	getTotalDiscountAmount,
	setCurrentOrder,
	setOrders,
	setTotalDiscountAmount,
} from "../Database.js";
import { getCoupon, setCoupon } from "../Coupon.js";

const n = 3;

let couponApplicable = false;

export const getProductsController = (req, res) => {
	const products = getProducts();
	res.json(products);
};

export const addToCartController = (req, res) => {
	const currentOrder = getCurrentOrder();
	setCurrentOrder(currentOrder.concat(req.body.items));

	const orders = getOrders();

	if ((orders.length + 1) % n == 0) {
		couponApplicable = true;
		setCoupon();
		return res.json({
			message: "Added to Cart",
			discount: "discount coupon is available for this order",
		});
	}
	couponApplicable = false;
	return res.json({ message: "added to cart" });
};

export const checkoutController = (req, res) => {
	let totalPrice = 0;
	let discountedPrice = 0;
	let applyCoupon = req.query.applyCoupon == "true" && couponApplicable;
	const currentOrder = getCurrentOrder();

	for (let item of currentOrder) {
		totalPrice += item.price * item.quantity;
	}

	setOrders(currentOrder);
	setCurrentOrder([]);

	if (applyCoupon) {
		const coupon = getCoupon();
		let discount = Math.ceil((10 * totalPrice) / 100);
		const totalDiscountAmount = getTotalDiscountAmount();
		setTotalDiscountAmount(totalDiscountAmount + discount);
		discountedPrice = totalPrice - discount;
		return res.json({
			"Total Price": totalPrice,
			discount: `Coupon code ${coupon} applied for 10% discount`,
			"Discounted Price": discountedPrice,
		});
	}
	return res.json({
		"Total Price": totalPrice,
	});
};
