const express=require('express')
const app=express()
const path=require('path')
const loginRouter=require('./route/AuthRoute.js')
const projectRouter=require('./route/ProjectRoutes.js')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const {verifyToken,} = require('./middleware/VerifyToken.js')
require('./db/Connection.js')
require('dotenv').config();
const PORT = process.env.PORT || 8080;
app.use(cors({
     origin:'http://localhost:5173',
     methods:['GET','DELETE','POST','PUT'],
     credentials:true
}))
// app.options(['http://localhost:5173'],cors())

app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});
app.get('/api/ping',(req,res)=>{
    res.send("pong")
})
app.use('/api/auth',loginRouter)
app.use('/api/projects',projectRouter)
app.get('/api/auth/verify',verifyToken)


app.listen(PORT,()=>{
    console.log(`listing port on http://localhost:8080`)
})