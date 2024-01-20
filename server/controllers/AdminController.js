import { getCoupons, getOrders, getTotalDiscountAmount } from "../Database.js";

export const getDetails = (req, res) => {
	const allOrders = getOrders();
	const discountCodes = getCoupons();
	const discountAmount = getTotalDiscountAmount();
	let totalPurchaseAmount = 0;
	let countOfItems = {};

	for (let order of allOrders) {
		for (let item of order) {
			{
				if (countOfItems.hasOwnProperty(item.name)) {
					countOfItems[item.name] += item.quantity;
				} else {
					countOfItems[item.name] = item.quantity;
				}
				totalPurchaseAmount += item.quantity * item.price;
			}
		}
	}

	res.json({
		"Count of items purchased": countOfItems,
		"List of discount codes": discountCodes,
		"Total discount amount": discountAmount,
	});
};
