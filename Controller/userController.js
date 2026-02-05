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

export const updateUserPasswordController = async (req, res) => {
    try {
        const { password } = req.body;
        const updatePassword = await UserModel.updateUserPasswordModel(req.params.id, { password });
        if (!updatePassword) {
            res.status(404).json({ message: "user not found" })
        }
        else {
            res.status(200).json({ message: "password has been updated" })
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteUserController = async (req, res) => {
    try {
        const delte = await UserModel.deleteUserModel(req.params.id);
        if (!delte) {
            res.status(404).json({ message: "user not found" })
        }
        else {
            res.status(200).json({ message: "user has been deleted" })
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

