const jwt=require('jsonwebtoken')
const verifyToken=async (req,res,next)=>{
    console.log('verifying')
    const token=req.cookies.jwtToken
    if(!token){
        return res.status(404).send("not authenticated")
    }
    
    const auth=jwt.verify(token,process.env.JWT_KEY)

    if(auth)
        return res.status(200).json({success:true,msg:"authenticated"})
    return res.status(404).json({success:false,msg:"not authenticated"})
    
}

const restrictOperation=async(req,res,next)=>{
    const token=req.cookies.jwtToken
    console.log('verifying restriction')
    if(!token){
        return res.status(404).send("not authenticated")
    }
    
    const auth=jwt.verify(token,process.env.JWT_KEY)

    if(auth){
        return next()
    }
       
    return res.status(404).json({success:false,msg:"not authenticated"})
}


module.exports={verifyToken,
                restrictOperation
}