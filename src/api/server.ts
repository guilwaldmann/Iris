import express from "express";
import { routes }  from "./router";
import cors from "cors";

const api = express()

api.use(cors())
api.use(express.json())
api.use(routes);

const PORT = 3333;
api.listen(PORT, () => console.log(`Server is runign on Port ${PORT}`));