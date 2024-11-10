import express from "express";
import { getAdmin, addDoctor } from "../controller/adminController.js";

const router = express.Router();

router.get("/get-admin", getAdmin);
router.post("/add-doctor", addDoctor);

export default router;