import React from "react";
import projectImg from "../../assets/blog-2.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { Loader2 } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { useProject } from "../../context/project-context";


function ProjectDetails() {
 const {projects}=useProject()
  const { addProject, editProject } = useProject(projects);
  const location = useLocation();
  const navigate = useNavigate();
  const { projectId, initialProject } = location.state || {};

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: initialProject?.title || "",
      projectType: initialProject?.projectType || "Website",
      description: initialProject?.description || "",
    },
    validationSchema: Yup.object({ // Add validation schema
      title: Yup.string().required("Title is required"),
      projectType: Yup.string().required("Project type is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values) => {
      try {
        if (projectId) {
          await editProject(projectId, values);
          toast.success("Project updated successfully!");
        } else {
          await addProject(values);
          toast.success("Project added successfully!");
        }
        navigate("/"); // Redirect after successful submission
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    },
  });

  return (
    <div className="hero h-[100vh] from-amber-100 via-rose-300 to-red-500 bg-gradient-to-br">
      <div className="heading mx-auto text-center pt-20">
        <h1 className="text-center sm:text-4xl text-3xl font-bold">
          {projectId ? "Edit Project" : "Add New Project"}
        </h1>
      </div>
      <div className="form-portion bg-sky-100 sm:w-[80%] w-[90%] mx-auto rounded-3xl">
        <form className="p-5 mt-5" onSubmit={formik.handleSubmit}>
          <div className="flex md:flex-row flex-col md:justify-center md:items-center md:p-5 gap-5">
            <div className="md:mt-1 mt-2 md:flex-1 grid place-content-center">
              <label htmlFor="image" className="text-xl font-bold">Image:</label>
              <img
                className="w-[300px] h-[300px] rounded-xl border-2 border-solid border-black object-cover shadow-xl shadow-black"
                src={projectImg}
                alt="Project"
              />
              {/* Consider adding an image upload input here */}
            </div>
            <div className="initials flex md:flex-col flex-col md:flex-1 gap-5">
              <label htmlFor="title" className="text-xl font-bold md:mb-0 mb-1">Title:</label>
              <input
                type="text"
                placeholder="Enter title here"
                className="w-full px-4 py-4 md:mb-0 mb-3 rounded-xl"
                {...formik.getFieldProps("title")}
              />
              {formik.touched.title && formik.errors.title && (
                <div className="text-red-600">{formik.errors.title}</div>
              )}
              <label htmlFor="projectType" className="text-xl font-bold md:mb-0 mb-1">Project type:</label>
              <select
                className="w-full px-4 py-4 rounded-xl"
                {...formik.getFieldProps("projectType")}
              >
                <option value="Website">Website</option>
                <option value="WebApps">WebApps</option>
                <option value="MobileApps">MobileApps</option>
                <option value="ComputerSoftware">Computer Software</option>
              </select>
              {formik.touched.projectType && formik.errors.projectType && (
                <div className="text-red-600">{formik.errors.projectType}</div>
              )}
            </div>
          </div>
          <div className="md:p-5 p-1 sm:mt-1 mt-1">
            <div className="mt-5">
              <label htmlFor="description" className="text-xl font-bold">Description:</label>
              <textarea
                rows="5"
                placeholder="Write project description here"
                className="w-full px-4 py-2 rounded-xl"
                autoComplete="off"
                spellCheck="false"
                {...formik.getFieldProps("description")}
              ></textarea>
              {formik.touched.description && formik.errors.description && (
                <div className="text-red-600">{formik.errors.description}</div>
              )}
            </div>
          </div>
          <div className="btn mt-2 w-full flex items-center">
            <button
              type="submit"
              className="px-4 py-2 mx-auto rounded-xl text-center text-xl bg-black text-white hover:text-black hover:bg-white hover:font-bold hover:shadow-xl"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? <Loader2 className="animate-spin" /> : (projectId ? "Save Project" : "Add Project")}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ProjectDetails;
