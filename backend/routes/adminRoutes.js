import express from "express";
import { addDoctor } from "../controller/adminController.js";

const router = express.Router();

router.post("/add-doctor", addDoctor);

export default router;