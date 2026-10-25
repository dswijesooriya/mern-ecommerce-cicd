import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRouter.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRouter.js'

const app = express()
const port = process.env.PORT || 4000
connectDB()

app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter) // Fixed missing leading slash
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

// Keep local listen for development, but don't block serverless execution
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => console.log('Server started on PORT : ' + port))
}

export default app