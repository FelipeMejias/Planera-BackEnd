import Router from 'express'
import { userGroupController } from '../controllers/userGroupController.js'

const userGroupRouter=Router()

userGroupRouter.post('/invitation/:groupId',userGroupController.post)
userGroupRouter.get('/invitation',userGroupController.get)
userGroupRouter.put('/invitation/:id',userGroupController.put)
userGroupRouter.delete('/invitation/:id',userGroupController.erase)

export default userGroupRouter