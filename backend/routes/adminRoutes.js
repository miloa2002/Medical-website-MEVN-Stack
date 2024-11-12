import express from "express";
import { getAdmin, addDoctor, getDoctors } from "../controller/adminController.js";

const router = express.Router();

router.get("/get-admin", getAdmin);
router.post("/add-doctor", addDoctor);
router.get("/get-doctors", getDoctors);

export default router;