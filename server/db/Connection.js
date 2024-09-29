const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

const db_url=process.env.DATABASE_URL
mongoose.connect(db_url).then(()=>{
    console.log("Connection done")
}).catch(err=>{
    console.log(err)
})
