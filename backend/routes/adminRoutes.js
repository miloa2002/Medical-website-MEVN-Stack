import express from "express";
import { getAdmin } from "../controller/adminController.js";

const router = express.Router();

router.get("/get-admin", getAdmin);

export default router;