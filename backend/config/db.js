import mongoose from "mongoose";
import colors from "colors";

const conectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(colors.bold("Database connected successfully"));
    } catch (error) {
        console.log(error);
    }
}

export default conectDB;