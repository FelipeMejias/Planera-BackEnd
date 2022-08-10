import Router from 'express'
import { habitController } from '../controllers/habitController.js'

const habitRouter=Router()

habitRouter.post('/habit',habitController.post)
habitRouter.get('/habit',habitController.get)
habitRouter.put('/habit/:id',habitController.put)
habitRouter.delete('/habit/:id',habitController.erase)

export default habitRouter