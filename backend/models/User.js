import mongoose from "mongoose";
import bcryptPlugin from "mongoose-bcrypt";

const UserSchema = mongoose.Schema({
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
    address: {
        type: String,
        required: false,
        trim: true,
        default: null
    },
    birthdate: {
        type: Date,
        trim: true,
        required: false,
        default: null
    },
    gender: {
        type: String,
        trim: true,
        required: false,
        default: "No seleccionado"
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
        default: "data:image/png;base64,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"
    },
    admin: {
        type: Boolean,
        default: false
    }
});

UserSchema.plugin(bcryptPlugin, {rounds: 12});

export const User = mongoose.model("User", UserSchema);