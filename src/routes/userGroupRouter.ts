import Router from 'express'
import { userGroupController } from '../controllers/userGroupController.js'

const userGroupRouter=Router()

userGroupRouter.post('/userGroup/:groupId',userGroupController.post)
userGroupRouter.get('/userGroup',userGroupController.get)
userGroupRouter.put('/userGroup/:groupId',userGroupController.changeColor)
userGroupRouter.put('/userGroup/:id/acept',userGroupController.acept)
userGroupRouter.delete('/userGroup/:id/reject',userGroupController.reject)
userGroupRouter.delete('/userGroup/:groupId',userGroupController.erase)

export default userGroupRouter