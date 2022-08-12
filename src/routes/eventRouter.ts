import Router from 'express'
import { eventController } from '../controllers/eventController.js'

const eventRouter=Router()

eventRouter.post('/event/:groupId',eventController.post)
eventRouter.get('/event',eventController.get)

export default eventRouter