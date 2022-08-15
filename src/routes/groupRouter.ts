import Router from 'express'
import { groupController } from '../controllers/groupController.js'
import { checkGroupMembership } from '../middlewares/checkGroupMembership.js'
import { validateBody } from '../middlewares/validateBody.js'
import { schema } from '../schemas/groupSchema.js'

const groupRouter=Router()

groupRouter.post('/group',validateBody(schema),groupController.post)
groupRouter.get('/group',groupController.getAll)
groupRouter.get('/group/:groupId',checkGroupMembership,groupController.get)

export default groupRouter