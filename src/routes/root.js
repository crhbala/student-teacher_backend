import { Router } from 'express'
import UserRouter from './user.js'
const router = Router()
router.get('/',(req, res)=>res.status(200).send(`<h1>Home Routes</h1>`))
router.use('/data', UserRouter)

export default router