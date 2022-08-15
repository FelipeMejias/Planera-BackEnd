import Router from 'express'
import { userGroupController } from '../controllers/userGroupController.js'
import { checkGroupMembership } from '../middlewares/checkGroupMembership.js'
import { validateBody } from '../middlewares/validateBody.js'
import { postSchema, putSchema } from '../schemas/userGroupSchemas.js'

const userGroupRouter=Router()

userGroupRouter.post('/userGroup/:groupId',checkGroupMembership,validateBody(postSchema),userGroupController.post)

userGroupRouter.get('/userGroup',userGroupController.getMyGroups)
userGroupRouter.put('/userGroup/:id/acept',userGroupController.acept)
userGroupRouter.delete('/userGroup/:id/reject',userGroupController.reject)

userGroupRouter.get('/userGroup/:groupId',checkGroupMembership,userGroupController.getPendent)
userGroupRouter.put('/userGroup/:groupId',checkGroupMembership,validateBody(putSchema),userGroupController.changeColor)
userGroupRouter.delete('/userGroup/:groupId',checkGroupMembership,userGroupController.erase)


export default userGroupRouter