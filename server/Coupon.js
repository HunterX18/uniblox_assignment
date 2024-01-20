import { getCoupons, setCoupons } from "./Database.js";

let coupon = null;

function generateRandomString(length) {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let randomString = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		randomString += characters.charAt(randomIndex);
	}

	return randomString;
}

export const getCoupon = () => {
	return coupon;
};

export const setCoupon = () => {
	coupon = generateRandomString(5);
	const coupons = getCoupons();
	setCoupons([...coupons, coupon]);
};
