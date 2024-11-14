const User = require("../model/User")
const jwt=require('jsonwebtoken')

const maxAge = 3 * 24 * 60 * 60 * 1000;
const createCookie=(email,userId)=>{
    return jwt.sign({email,userId},process.env.JWT_KEY,{
        expiresIn:maxAge
    })
}

const login=async (req,res)=>{
    const {email,password}=req.body
    console.log(req.body)
   try{
    const user=await User.findOne({email:email,password:password});
    if(!user){
        return res.status(200).json({success:false,msg:"user does not exists"})
    }
    res.cookie('jwtToken',createCookie(email,user._id),{maxAge,secure:true,sameSite:"None"})
    return res.status(200).json({success:true,msg:"user authenticated !"})
   }catch(err){
    return res.status(500).send(err)
   }
}
const logout=async (req,res)=>{
    console.log('logout is in process')
   try{
   
    res.cookie('jwtToken','',{maxAge:1,secure:true,sameSite:"None"})
    console.log("successfully logged out !")
    return res.status(200).json({success:true,msg:"user logged out !"})
   }catch(err){
    return res.status(500).send(err)
   }
}
module.exports={
    login,
    logout
}