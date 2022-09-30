import {Router} from 'express'
import { userController } from '../controllers/userController.js'
import { prisma } from '../database.js'
import { validateBody } from '../middlewares/validateBody.js'
import { schema } from '../schemas/userSchema.js'

const userRouter=Router()

userRouter.post('/signup',validateBody(schema),userController.signUp)
userRouter.post('/signin',validateBody(schema),userController.signIn)

export default userRouter