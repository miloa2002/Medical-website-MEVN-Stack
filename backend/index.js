import express from "express";
import colors from "colors";
import conectDB from "./config/db.js";
import dotenv from "dotenv";
import adminRoutes from "./routes/adminRoutes.js"

const app = express();

dotenv.config();

conectDB();

app.use(express.json());
app.use("/api/v1/admin", adminRoutes);

const PORT = 4000 | process.env.PORT;
app.listen(PORT, () => {
    console.log(colors.green(`Port listening on the server ${PORT}`));
})