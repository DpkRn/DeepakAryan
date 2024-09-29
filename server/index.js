const express=require('express')
const app=express()
const loginRouter=require('./route/AuthRoute.js')
const projectRouter=require('./route/ProjectRoutes.js')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const {verifyToken,} = require('./middleware/VerifyToken.js')
require('./db/Connection.js')


const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

const db_url=process.env.DATABASE_URL
mongoose.connect(db_url).then(()=>{
    console.log("Connection done")
}).catch(err=>{
    console.log(err)
})


app.use(cors({
     origin:'https://deepak-aryan.vercel.app',
     methods:['GET','POST','DELETE','PUT'],
     credentials:true
}))
// app.options('https://portfolio-woad-three-81.vercel.app/',cors())
app.use(express.json())
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