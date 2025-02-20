import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { User, CreateUserDTO } from "../types";
import { dbConnection } from "../database";

export class UserController {
    async create(req: Request, res: Response): Promise<void> {
        const { name, email, age } = req.body as CreateUserDTO

        const checkUserExists = await dbConnection("users").select().where({email: email})

        if(checkUserExists) {
            throw new AppError("Email já cadastrado")
        }
        
        if(age<18) {
            throw new AppError("Idade insuficiente")
        }
        
        if(name.length<3) {
            throw new AppError("Nome com caracteres insuficientes")
        }

        await dbConnection("users").insert(req.body)

        res.status(201).json()
    }

    async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        await dbConnection("users")
            .where({ id })
            .delete()

        res.status(200).json()
        
    }

    async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params
        const { name, email, age } = req.body

        const [user] = await dbConnection<User>("users").select("*").where({ id: +id })

        if (!user) {
            throw new AppError("Usuário não encontrado.");
        }

        const [userWithUpdatedEmail] = await dbConnection<User>("users").select("*").where({ email })

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== +id) {
            throw new AppError("Este email já está em uso.");
        }

        user.name ??= name  
        user.email ??= email
        user.age ??= age

        const updatedUser = await dbConnection("users").update({
            id: id,
            name: user.name,
            email: user.email,
            age: user.age,
        }).where({ id })

        res.status(200).json(updatedUser)
    }

    async get(req: Request, res: Response): Promise<void> {
        const { search } = req.body
        
        const result = await dbConnection<User>("users").select("*").where("name", search).orWhere("email", search).orderBy("name")

        res.status(200).json(result)
    }

    async fetch(res: Response): Promise<void> {
        const getAllUsers = await dbConnection<User>("users").select("*").orderBy("name")

        res.status(200).json(getAllUsers)
    }
}