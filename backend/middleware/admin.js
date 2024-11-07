
export const adminOnly = (req,res,next) => {
    const {user} = req;
    if(user.admin !== true) {
        return res.status(403).json({ msg: "Acceso denegado: No eres administrador" });
    }

    next();
}