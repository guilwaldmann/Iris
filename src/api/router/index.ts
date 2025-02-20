import { Router } from "express"
import { UserController } from "../controllers/UserController"

const userRouter = Router()

const userController = new UserController

userRouter.get("/api/", userController.fetch)
userRouter.get("/api/:id", userController.get)
userRouter.put("/api/", userController.update)
userRouter.post("/api/", userController.create)
userRouter.delete("/api/:id", userController.delete)

export const routes = userRouter