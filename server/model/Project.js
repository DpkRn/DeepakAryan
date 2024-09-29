const mongoose=require('mongoose')
const projectSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    },
    projectType:{
        type:String,
        required:true
    },
    githubLink:{
        type:String,
        required:false
    },
    websiteLink:{
        type:String,
        required:false
    },
    status:{
        type:String,
        enum:['completed','working on']
    }

},{timestamp:true})

const Project=mongoose.model("project",projectSchema)
module.exports=Project;