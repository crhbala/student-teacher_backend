import AppRoutes from './src/routes/root.js'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())


app.use('/', AppRoutes)

app.listen(PORT, () => console.log(`server listening ${PORT}`))