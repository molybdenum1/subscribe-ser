import { Router } from "express";
import userController from "../controller/user.controller";


const userRouter = new Router();

userRouter.post('/create', userController.createUser )

export default userRouter;