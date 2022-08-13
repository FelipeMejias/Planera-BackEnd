import Router from 'express'
import { userGroupController } from '../controllers/userGroupController.js'
import { checkGroupMembership } from '../middlewares/checkGroupMembership.js'

const userGroupRouter=Router()

userGroupRouter.post('/userGroup/:groupId',checkGroupMembership,userGroupController.post)

userGroupRouter.get('/userGroup',userGroupController.get)
userGroupRouter.put('/userGroup/:id/acept',userGroupController.acept)
userGroupRouter.delete('/userGroup/:id/reject',userGroupController.reject)

userGroupRouter.get('/userGroup/:groupId',checkGroupMembership,userGroupController.getPendent)
userGroupRouter.put('/userGroup/:groupId',checkGroupMembership,userGroupController.changeColor)
userGroupRouter.delete('/userGroup/:groupId',checkGroupMembership,userGroupController.erase)


export default userGroupRouter