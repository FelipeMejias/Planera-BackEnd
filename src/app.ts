import express,{json} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import  router  from './routes/index.js'
import { handleError } from './middlewares/handleError.js'
dotenv.config()

export const app=express()

app.use(cors())
app.use(json())

app.use(router)

app.use(handleError)


