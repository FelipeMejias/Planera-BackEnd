import Router from 'express'
import { habitController } from '../controllers/habitController.js'
import { checkHabitOwnership } from '../middlewares/checkHabitOwnership.js'
import { validateBody } from '../middlewares/validateBody.js'
import { postSchema, putSchema } from '../schemas/habitSchemas.js'

const habitRouter=Router()

habitRouter.post('/habit',validateBody(postSchema),habitController.post)
habitRouter.get('/habit',habitController.get)
habitRouter.put('/habit/:id',checkHabitOwnership,validateBody(putSchema),habitController.put)
habitRouter.delete('/habit/:id',checkHabitOwnership,habitController.erase)

export default habitRouter