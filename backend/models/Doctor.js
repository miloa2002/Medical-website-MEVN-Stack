import mongoose from "mongoose";
import bcryptPlugin from "mongoose-bcrypt";

const DoctorSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        bcrypt: true
    },
    experience: {
        type: Number,
        required: true,
        trim: true
    },
    fees: {
        type: Number,
        required: true,
        trim: true
    },
    about: {
        type: String,
        required: true,
        trim: true
    },
    speciality: {
        type: String,
        required: true,
        trim: true
    },
    degree: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: false,
        trim: true,
        default: null
    },
    phone: {
        type: String,
        trim: true,
        required: false,
        default: "0000000"
    },
    image: {
        type: String,
        required: false,
    },
});

DoctorSchema.plugin(bcryptPlugin, {rounds: 12});

export const Doctor = mongoose.model("Doctor", DoctorSchema);