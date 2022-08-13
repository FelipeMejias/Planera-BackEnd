import Router from 'express'
import { eventController } from '../controllers/eventController.js'
import { checkGroupMembership } from '../middlewares/checkGroupMembership.js'

const eventRouter=Router()

eventRouter.post('/event/:groupId',checkGroupMembership,eventController.post)
eventRouter.get('/event',eventController.get)

export default eventRouter