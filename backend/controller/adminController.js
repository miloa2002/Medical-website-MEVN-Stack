const getAdmin = (req,res) => {
    res.json(
        req.user
    )
}

const addDoctor = (req, res) => {

}

export {
    getAdmin,
    addDoctor
}