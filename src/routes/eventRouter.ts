import Router from 'express'
import { eventController } from '../controllers/eventController.js'
import { checkGroupMembership } from '../middlewares/checkGroupMembership.js'
import { validateBody } from '../middlewares/validateBody.js'
import { schema } from '../schemas/eventSchema.js'

const eventRouter=Router()

eventRouter.post('/event/:groupId',checkGroupMembership,validateBody(schema),eventController.post)
//eventRouter.post('/event/:groupId/quest',checkGroupMembership,validateBody(schema),eventController.quest)
eventRouter.get('/event',eventController.getMyEvents)
eventRouter.get('/event/:id',eventController.getParticipants)
eventRouter.delete('/event/:id',eventController.erase)

export default eventRouter