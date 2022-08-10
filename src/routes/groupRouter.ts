import Router from 'express'
import { groupController } from '../controllers/groupController.js'

const groupRouter=Router()

groupRouter.post('/group',groupController.post)
groupRouter.get('/group',groupController.getAll)
groupRouter.get('/group/:id',groupController.get)

export default groupRouter