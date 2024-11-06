import express from "express";
import colors from "colors";
import conectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app = express();

dotenv.config();

conectDB();

const corsOption = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());
app.use("/api/v1/user", userRoutes);

const PORT = 4000 | process.env.PORT;
app.listen(PORT, () => {
  console.log(colors.green(`Port listening on the server ${PORT}`));
});
