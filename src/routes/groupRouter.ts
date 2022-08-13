import Router from 'express'
import { groupController } from '../controllers/groupController.js'
import { checkGroupMembership } from '../middlewares/checkGroupMembership.js'

const groupRouter=Router()

groupRouter.post('/group',groupController.post)
groupRouter.get('/group',groupController.getAll)
groupRouter.get('/group/:groupId',checkGroupMembership,groupController.get)

export default groupRouter