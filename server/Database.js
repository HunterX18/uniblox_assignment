const products = [
	{
		name: "phone",
		price: 100,
	},
	{
		name: "laptop",
		price: 200,
	},
	{
		name: "TV",
		price: 500,
	},
	{
		name: "shirt",
		price: 100,
	},
	{
		name: "pant",
		price: 200,
	},
];

export const getProducts = () => {
	return products;
};

let orders = [];

export const getOrders = () => {
	return orders;
};

export const setOrders = (order) => {
	orders.push(order);
};

let currentOrder = [];

export const getCurrentOrder = () => {
	return currentOrder;
};

export const setCurrentOrder = (order) => {
	currentOrder = order;
	// console.log("Current Order", currentOrder);
};

let coupons = [];

export const getCoupons = () => {
	return coupons;
};

export const setCoupons = (couponsList) => {
	coupons = couponsList;
};

let totalDiscountAmount = 0;

export const getTotalDiscountAmount = () => {
	return totalDiscountAmount;
};

export const setTotalDiscountAmount = (amount) => {
	totalDiscountAmount = amount;
};
