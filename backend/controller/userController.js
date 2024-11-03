import { User } from "../models/User.js"
import colors from "colors";

const registerUser = async (req, res) => {
    if(Object.values(req.body).includes("")) {
        const error = new Error("Los datos no pueden ir vacíos");
        return res.status(400).json({msg: error.message});
    }

    const {email, password} = req.body;

    const MIN_PASS = 8;

    const userExists = await User.findOne({email: email});
    if(userExists) {
        const error = new Error("El email ya se encuentra en la base de datos");
        return res.status(400).json({msg: error.message});
    }

    if(password.trim().length < MIN_PASS) {
        const error = new Error("La contraseña debe ser mayor a 8 caracteres");
        return res.status(400).json({msg: error.message});
    }

    try {
        const user = await new User(req.body);
        await user.save();
        res.status(200).json({msg: "Usuario registrado correctamente"});
    } catch {
        const error = new Error("Error en el servidor");
        res.status(500).json({msg: error.message});
        console.log(colors.red(error));
    }
}

const loginUser = async(req, res) => {
    if(Object.values(req.body).includes("")) {
        const error = new Error("Los datos no pueden ir vacíos");
        return res.status(400).json({msg: error.message});
    }

    const {email, password} = req.body;

    const user = await User.findOne({email: email});
    if(!user) {
        const error = new Error("El usuario no existe en la base de datos");
        return res.status(401).json({msg: error.message});
    }

    try {
        res.status(200).json({msg: "Inicio de sesión exitoso"});
    } catch {
        const error = new Error("Error en el servidor");
        res.status(500).json({msg: error.message});
        console.log(colors.red(error));
    }
}

export {
    registerUser,
    loginUser
}