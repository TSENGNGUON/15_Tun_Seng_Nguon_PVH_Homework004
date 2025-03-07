import { Plus } from "lucide-react";
import React, { useState } from "react";
import CardComponent from "./CardComponent";

export default function AddNewProjectComponent({inputed}) {
  const [projectName, setProjectName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [progress, setProgress] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState([]);
  const searchData = projects.filter((e)=>
    e.projectName.toLowerCase().includes(inputed.toLowerCase()))

const handleAddProject = (e) =>{
    e.preventDefault();
    // Element
    const projectNameO = document.getElementById('projectName');
    const dueDateO = document.getElementById('dueDate'); 
    const progressO = document.getElementById('progress');
    
    if (projectName === '' && dueDate === '' && progress === progress && description === '') { 
      let projectNameValidate = document.getElementById('projectNameValidate');
      projectNameValidate.innerHTML = "* Project Name is required.";
      projectNameO.classList.add("border-2","border-red-500");
      projectNameValidate.classList.add("text-red-500","text-sm");

      let dueDateValidate = document.getElementById('DueDateValidate');
      dueDateValidate.innerHTML = "* Due Date is required.";
      dueDateO.classList.add("border-2", "border-red-500")
      dueDateValidate.classList.add("text-red-500", "text-sm");

      let progressValidate = document.getElementById('ProgressValidate')
      progressValidate.innerHTML = "* Progress is required.";
      progressO.classList.add("border-2", "border-red-500");
      progressValidate.classList.add("text-red-500", "text-sm");
    
  }
  if(projectName !== '' && dueDate !== '' && progress !== '' && description !== ''){
    const addProject = {
      "projectName": projectName,
      "dueDate": dueDate,
      "progress": progress,
      "description": description
    }
    setProjects([...projects, addProject]);
    setProjectName('');
    setDueDate('');
    setProgress('');
    setDescription('');
    projectNameO.classList.remove("border-2","border-red-500")
    projectNameValidate.classList.remove("text-red-500","text-sm");
    dueDateO.classList.remove("border-2", "border-red-500");
    let dueDateValidate = document.getElementById('DueDateValidate');
    dueDateValidate.innerHTML = "";
    let progressValidate = document.getElementById('ProgressValidate')
    progressValidate.innerHTML = "";
    progressO.classList.remove("border-2", "border-red-500");
    projectNameValidate.innerHTML = "";
    
  }

}
  return (
    <div >
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="fixed top-[250px] right-[340px] text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500  font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500  dark:focus:ring-custom-sky-blue-500  flex items-center gap-2"
        type="button"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>
      <div className="mt-40 flex  fixed left-[330px] w-[870px]  flex-wrap gap-5 overflow-auto h-[50vh] bg-[#f5f7f8]">
      {searchData.map((project, index) => {
        return (
          <CardComponent 
          key={index}
          dueDate = {project.dueDate}
          projectName = {project.projectName}
          description = {project.description}
          progress = {project.progress}
      />
        )
      })}
      </div>

      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-2xl shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Project
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="projectName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Project Name"
                   
                  />
                  <label id="projectNameValidate"></label>
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="dueDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={dueDate}
                    id="dueDate"
                    onChange={(e) => setDueDate(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                   <label id="DueDateValidate"></label>
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="progress"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Progress
                  </label>
                  <select
                    id="progress"
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option defaultValue="">Select Progress</option>
                    <option value="100">100</option>
                    <option value="75">75</option>
                    <option value="50">50</option>
                    <option value="25">25</option>
                  </select>
                  <label id="ProgressValidate"></label>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <div className="text-right">
                <button
                  onClick={handleAddProject}
                  type="submit"
                  className="text-white inline-flex items-center bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-4 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-custom-sky-blue-500 dark:hover:bg-custom-sky-blue-500 dark:focus:ring-custom-sky-blue-500"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
