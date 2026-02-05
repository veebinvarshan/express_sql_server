import { hashpassword, passwordcheck } from "../utils/hash.js";
import { createToken } from "../utils/token.js";

import AuthUserModel from '../Model/authUserModel.js'


export const userSignupController = async (req,res) => {
    try {
        const { name, email, password, role } = req.body;
        const checkEmail = await AuthUserModel.userLoginModel(email);
        if (checkEmail) {
            return res.status(400).json({ message: "email already exists" })
        }
        const newPassword = await hashpassword(password);
        const id = await AuthUserModel.userSignupModel({ name: name, email: email, password: newPassword, role: role || user });
        if (id) {
            res.status(201).json({ message: "user has been created" })
        }
        else {
            res.status(500).json({ message: "user has not been created" })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const authLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await AuthUserModel.userLoginModel(email);
        if (!user) {
            return res.status(400).json({ message: "user not found" })
        }
        const checkPassword = await passwordcheck(password, user.password)
        if (!checkPassword) {
            return res.status(401).json({ message: "invalid password" })
        }
        const token = createToken({ id: user.id, role: user.role })
        res.status(200).json({ message: "user has been logged in", token })
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}
