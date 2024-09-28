const { addProject, getAllProject, editProject, deleteProject } = require('../controller/projectController')
 const {restrictOperation}=require('../middleware/VerifyToken')
const router=require('express').Router()


router.post('/addproject',restrictOperation,addProject)
router.get('/getallprojects',getAllProject)
router.post('/editproject',restrictOperation,editProject)
router.post('/deleteproject',restrictOperation,deleteProject)

module.exports=router