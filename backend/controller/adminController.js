const getAdmin = (req,res) => {
    res.json(
        req.user
    )
}

export {
    getAdmin
}