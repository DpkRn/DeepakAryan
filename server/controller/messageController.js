const { sendOtpVerification } = require("../lib/mail");

const sendMessage=async (req,res)=>{
const {firstName,lastName,email,phoneNumber,subject,message}=req.body;
try{
    console.log("start sending")
    await sendOtpVerification(firstName,lastName,email,phoneNumber,subject,message, "itdude7050@gmail.com", "Deepak Aryan", "Portfolio");
    console.log("message sent !")
    return res.status(200).json({success:true,msg:"message sent successfully!"})
   }catch(err){
    console.log("got error")
    return res.status(500).send(err)
   }
}

module.exports={
    sendMessage,
}