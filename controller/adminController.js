//import model
const admins = require('../models/adminModel')

//controller for adminRegister
exports.adminRegisterController = async (req, res) => {
    console.log(`Inside admin register controller`);

    const { adminname, email, password } = req.body
    console.log(adminname, email, password);

    try {
        const existingAdmin = await admins.findOne({ email })
        if (existingAdmin) {
            res.status(406).json(`Admin already exists`)
        } else {
            const newAdmin = await new admins({
                adminname, email, password
            })
            await newAdmin.save()
            res.status(200).json(newAdmin)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}