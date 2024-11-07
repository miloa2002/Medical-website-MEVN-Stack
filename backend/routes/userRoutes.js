import express from "express";
import { registerUser, loginUser, loginAdmin  } from "../controller/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/login-admin", loginAdmin);

export default router;