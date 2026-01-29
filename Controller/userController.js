import UserModel from "../Model/userModel.js";

//user creation
export const createUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const id = await UserModel.createUserModel({ name, email, password })
        res.status(201).json({
            message: "user has been created",
            userId: id
        })
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

//get all users
export const getAllUsersController = async (req, res) => {
    try {
        const data = await UserModel.getAllUsers();
        res.json(data)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

