const login=require('../controller/AuthController')
const router=require('express').Router();


router.post('/login',login)



module.exports=router;