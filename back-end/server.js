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
const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173', // Your local Vite dev server
  'http://localhost:3000', // In case you use CRA
  'https://mern-ecommerce-front-end-delta.vercel.app' // Your live frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

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
