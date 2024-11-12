
export const adminOnly = (req,res,next) => {
    if(!req.user || !req.user.admin) {
        return res.status(403).json({ msg: "Acceso denegado: No eres administrador" });
    }

    next();
}