const mongoose=require('mongoose')
const schema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamp:true})

const  user=mongoose.model('admin',schema)
module.exports=user

