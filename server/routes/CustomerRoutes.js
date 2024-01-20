import { Router } from "express";
import {
	getProductsController,
	addToCartController,
	checkoutController,
} from "../controllers/CustomerController.js";

const router = Router();

router.get("/products", getProductsController);
router.post("/addToCart", addToCartController);
router.get("/checkout", checkoutController);

export default router;
