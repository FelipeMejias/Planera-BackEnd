import Router from 'express'
import { allowController } from '../controllers/allowController.js'

const allowRouter=Router()

allowRouter.post('/allow/:groupId',allowController.post)
allowRouter.post('/allow/:groupId/crossboard',allowController.get)

export default allowRouter