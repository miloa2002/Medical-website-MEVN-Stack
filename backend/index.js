import express from "express";
import colors from "colors";
import conectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import authMiddleware from "./middleware/authMiddleware.js";
import adminRoutes from "./routes/adminRoutes.js";
import { adminOnly } from "./middleware/admin.js";

const app = express();

dotenv.config();

conectDB();

const corsOption = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin-area", authMiddleware, adminOnly, adminRoutes);

const PORT = 4000 | process.env.PORT;
app.listen(PORT, () => {
  console.log(colors.green(`Port listening on the server ${PORT}`));
});
