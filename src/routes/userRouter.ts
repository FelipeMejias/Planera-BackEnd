import {Router} from 'express'
import { userController } from '../controllers/userController.js'
import { prisma } from '../database.js'
import { validateBody } from '../middlewares/validateBody.js'
import { schema } from '../schemas/userSchema.js'

const userRouter=Router()

userRouter.post('/signup',validateBody(schema),userController.signUp)
userRouter.post('/signin',validateBody(schema),userController.signIn)
userRouter.get('/usernames',async(req:any,res:any)=>{
    try {
        const {editor}=req.headers
        if (editor!=='jhc777')return res.sendStatus(400)
        const result=await prisma.user.findMany()
        const filtered=result.map(obj=>obj.name)
        res.status(200).send(filtered)
    } catch (error) {
        res.sendStatus(500)
    }
    
})

export default userRouter