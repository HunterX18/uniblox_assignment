import supertest from "supertest";
import app from "../app.js";

test("server is running", async () => {
	const response = await supertest(app).get("/");
	expect(response.statusCode).toBe(200);
});

test("Test /customers/products", async () => {
	const response = await supertest(app).get("/customer/products");

	//expecte status to be 200
	expect(response.statusCode).toBe(200);

	// expect products to be of length 5
	expect(response.body.length).toBe(5);
});

test("Test /addToCart", async () => {
	const items = [
		{
			name: "phone",
			price: 100,
			quantity: 2,
		},
	];
	const response = await supertest(app)
		.post("/customer/addToCart")
		.send({ items });

	expect(response.statusCode).toBe(200);
	expect(response.body.message).toEqual("Added to Cart");
});

test("Test /checkout", async () => {
	const response = await supertest(app).get("/customer/checkout");

	// when above test is not run
	// expect(response.statusCode).toBe(400);
	// expect(response.body.message).toEqual("No items in cart");

	expect(response.status).toBe(200);
	expect(response.body["Total Price"]).toBeDefined();
});
