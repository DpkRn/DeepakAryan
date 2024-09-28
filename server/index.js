const express=require('express')
const app=express()
const loginRouter=require('./route/AuthRoute.js')
const projectRouter=require('./route/ProjectRoutes.js')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const {verifyToken,} = require('./middleware/VerifyToken.js')
require('./db/Connection.js')
app.use(cors({
     origin:'http://localhost:5173',
     credentials:true
}))
// app.options(['http://localhost:5173'],cors())
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