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
module.exports=login