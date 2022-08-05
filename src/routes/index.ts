import {Router} from 'express'

import userRouter from './userRouter.js'
import habitRouter from './habitRouter.js'
import { validateToken } from '../middlewares/validateToken.js'
const router =Router()

router.use(userRouter)
router.use(validateToken)
router.use(habitRouter)

export default router