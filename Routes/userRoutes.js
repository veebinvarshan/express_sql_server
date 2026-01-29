import { createUserController, getAllUsersController } from "../Controller/userController.js";

import express from 'express'

const userRoute = express.Router();//post put get delete

userRoute.post('/signup', createUserController);
userRoute.get('/getusers', getAllUsersController);

export default userRoute