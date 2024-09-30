const Project = require("../model/Project");
const cloudinary = require('cloudinary').v2;

//get all projects
const getAllProject = async (req, res) => {
  console.log("getting project")
  try {
    const projects = await Project.find();
    if (!projects||projects.length===0) {
      return res.status(404).send("not found");
    }

    return res.status(200).json({ projects });
  } catch (err) {
    return res.status(500).send("server error");
  }
};




//edit project
const editProject = async (req, res) => {
  try {
    const { id, title, description, projectType,image } = req.body;
    console.log(req.body)
    console.log("adding img")
    const result=await cloudinary.uploader.upload(image,{folder:'project-image'})
    console.log("img added")
    console.log(result)
    const imgUrl=result.secure_url;
    console.log(imgUrl)
    const projects = await Project.findByIdAndUpdate(
      id,
      {
        title,
        description,
        projectType,
        image:imgUrl
      },
      { new: true }
    );

    if (!projects) {
      return res.status(404).send("not found");
    }

    return res.status(201).json({ projects });
  } catch (err) {
    return res.status(500).send("server error");
  }
};




//add project
const addProject = async (req, res) => {
  const { title, description, projectType,image } = req.body;

  try {
    const result=await cloudinary.uploader.upload(image,{folder:'project-image'})
    const imgUrl=result.secure_url;
    const project = await Project.create({ title, description, projectType,image:imgUrl });
    return res.status(201).json({ success: true, msg: "project added !" ,project});
  } catch(err) {
    return res.status(500).send("something went wrong");
  }
};

const deleteProject=async(req,res)=>{
  try {
    const { id} = req.body;
    console.log("project deleting")
    const projects = await Project.findByIdAndDelete(id);
    console.log("project deleted")
    if (!projects) {
      return res.status(404).send("not found");
    }

    return res.status(200).json({success:true,msg:"deleted !" });
  } catch (err) {
    return res.status(500).send("server error");
  }
}

module.exports = {
  addProject,
  getAllProject,
  editProject,
  deleteProject,
};
