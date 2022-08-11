import Router from 'express'
import { allowController } from '../controllers/allowController.js'

const allowRouter=Router()

allowRouter.post('/allow/:groupId',allowController.post)
allowRouter.post('/allow/:groupId/crossboard',allowController.getHabits)
allowRouter.get('/allow/:groupId',allowController.getAllows)

export default allowRouter