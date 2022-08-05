import Router from 'express'
import { habitController } from '../controllers/habitController.js'

const habitRouter=Router()

habitRouter.post('/habit',habitController.post)
habitRouter.get('/habit',habitController.get)

export default habitRouter