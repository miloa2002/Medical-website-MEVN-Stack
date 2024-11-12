import { Doctor } from "../models/Doctor.js"

const getAdmin = (req,res) => {
    res.json(
        req.user
    )
}

const addDoctor = async (req, res) => {
    const {email, password} = req.body;

    if(Object.values(req.body).includes("")) {
        const error = new Error("Los datos no pueden ir vacíos");
        return res.status(400).json({msg: error.message});
    }

    const MIN_PASS = 8;

    const doctorExists = await Doctor.findOne({email: email});
    if(doctorExists) {
        const error = new Error("El email ya se encuentra en la base de datos");
        return res.status(400).json({msg: error.message});
    }

    if(password.trim().length < MIN_PASS) {
        const error = new Error("La contraseña debe ser mayor a 8 caracteres");
        return res.status(400).json({msg: error.message});
    }

    try {
        const doctor = await new Doctor(req.body);
        await doctor.save();
        res.status(200).json({msg: "Doctor registrado correctamente"});
    } catch (error) {
        res.status(500).json({msg: error.message});
        console.log(colors.red(error));
    }
}

const getDoctors = async(req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch {
        const error = new Error("Error en el servidor");
        res.status(500).json({msg: error.message});
        console.log(colors.red(error));
    }
}

export {
    getAdmin,
    addDoctor,
    getDoctors
}