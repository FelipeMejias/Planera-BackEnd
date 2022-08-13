import Router from 'express'
import { habitController } from '../controllers/habitController.js'
import { checkHabitOwnership } from '../middlewares/checkHabitOwnership.js'

const habitRouter=Router()

habitRouter.post('/habit',habitController.post)
habitRouter.get('/habit',habitController.get)
habitRouter.put('/habit/:id',checkHabitOwnership,habitController.put)
habitRouter.delete('/habit/:id',checkHabitOwnership,habitController.erase)

export default habitRouter