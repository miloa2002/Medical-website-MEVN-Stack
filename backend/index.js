import express from "express";
import colors from "colors";
import conectDB from "./config/db.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

conectDB();

const PORT = 4000 | process.env.PORT;
app.listen(PORT, () => {
    console.log(colors.green(`Port listening on the server ${PORT}`));
})