const express=require('express')
const app=express()
const loginRouter=require('./route/AuthRoute.js')
const projectRouter=require('./route/ProjectRoutes.js')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const {verifyToken,} = require('./middleware/VerifyToken.js')
require('./db/Connection.js')
const cloudinary = require('cloudinary')


const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

const db_url=process.env.DATABASE_URL
mongoose.connect(db_url).then(()=>{
    console.log("Connection done")
}).catch(err=>{
    console.log(err)
})

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


app.use(cors({
    origin: ['https://deepak-aryan.vercel.app','http://localhost:8080'],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    credentials: true,
    // allowedHeaders: ['Content-Type', 'Authorization']
}))
// app.options('*', cors({
//     origin: 'https://deepak-aryan.vercel.app',
//     methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
//     credentials: true
// }));
app.use(express.json({limit:'50mb'}))
app.use(cookieParser())     


app.use('/api/auth',loginRouter)
app.use('/api/projects',projectRouter)
app.get('/api/auth/verify',verifyToken)
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(8080,()=>{
    console.log(`listing port on http://localhost:8080`)
})