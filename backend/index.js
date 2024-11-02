import express from "express";
import colors from "colors";

const app = express();

const PORT = 4000 | process.env.PORT;
app.listen(PORT, () => {
    console.log(colors.green(`Puerto escuchando en el servidor ${PORT}`));
})