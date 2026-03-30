import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'mongoose';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import ProductRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';


// App Config
const app = express()
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())



// Api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',ProductRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send('API working');
})

app.listen(port , ()=> console.log('Server started on PORT : '+ port));