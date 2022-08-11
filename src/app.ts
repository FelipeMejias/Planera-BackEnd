import express,{json} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import "express-async-errors";
import  router  from './routes/index.js'
import { handleError } from './middlewares/handleError.js'
import { prisma } from './database.js'
dotenv.config()

export const app=express()

app.use(cors())
app.use(json())

app.use(router)
router.use(handleError)

