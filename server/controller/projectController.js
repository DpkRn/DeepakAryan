const Project = require("../model/Project");

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
    const { id, title, description, projectType } = req.body;

    const projects = await Project.findByIdAndUpdate(
      id,
      {
        title,
        description,
        projectType,
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
  const { title, description, projectType } = req.body;
  try {
    const project = await Project.create({ title, description, projectType });
  
    return res.status(201).json({ success: true, msg: "project added !" ,project});
  } catch(err) {
    return res.status(500).send("something went wrong");
  }
};

const deleteProject=async(req,res)=>{
  try {
    const { id} = req.body;

    const projects = await Project.findByIdAndDelete(id);

    if (!projects) {
      return res.status(404).send("not found");
    }

    return res.status(201).json({success:true,msg:"deleted !" });
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
