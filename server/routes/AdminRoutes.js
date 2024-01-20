import { Router } from "express";
import { getDetails } from "../controllers/AdminController.js";

const router = Router();

router.get("/details", getDetails);

export default router;
