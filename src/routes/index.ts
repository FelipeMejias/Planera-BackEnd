import {Router} from 'express'

import userRouter from './userRouter.js'
import habitRouter from './habitRouter.js'
import { validateToken } from '../middlewares/validateToken.js'
import groupRouter from './groupRouter.js'
import userGroupRouter from './userGroupRouter.js'
import allowRouter from './allowRouter.js'
import eventRouter from './eventRouter.js'
const router =Router()

router.use(userRouter)
router.use(validateToken)
router.use(habitRouter)
router.use(groupRouter)
router.use(userGroupRouter)
router.use(allowRouter)
router.use(eventRouter)

export default router