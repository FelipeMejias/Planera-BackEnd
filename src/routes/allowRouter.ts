import Router from 'express'
import { allowController } from '../controllers/allowController.js'
import { checkGroupMembership } from '../middlewares/checkGroupMembership.js'

const allowRouter=Router()

allowRouter.post('/allow/:groupId',checkGroupMembership,allowController.post)
allowRouter.post('/allow/:groupId/crossboard',checkGroupMembership,allowController.getHabits)
allowRouter.get('/allow/:groupId',checkGroupMembership,allowController.getAllows)

export default allowRouter