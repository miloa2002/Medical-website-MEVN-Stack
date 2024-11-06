import express from "express";
import { registerUser, loginUser, addDoctor } from "../controller/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/add-doctor", authMiddleware, addDoctor);

export default router;