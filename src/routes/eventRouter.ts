import Router from 'express'
import { eventController } from '../controllers/eventController.js'
import { checkGroupMembership } from '../middlewares/checkGroupMembership.js'

const eventRouter=Router()

eventRouter.post('/event/:groupId',checkGroupMembership,eventController.post)
eventRouter.get('/event',eventController.getMyEvents)
eventRouter.get('/event/:id',eventController.getParticipants)
eventRouter.delete('/event/:id',eventController.erase)

export default eventRouter