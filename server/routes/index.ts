import express from 'express'
import user from './userRoutes'
import login from './loginRoutes'

const router = express.Router()

router.get('/healthcheck', (_, res) => res.sendStatus(200))

router.use(user);
router.use(login)

export default router