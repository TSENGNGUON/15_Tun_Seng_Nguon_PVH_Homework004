
import React, { useState } from "react";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import { dashboard } from "./data/dashboard";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";



function App() {
  const [inputed, setInputed] = useState('');
  return (
   <div className="flex items-start bg-[#f5f7f8]">
    <SidebarComponent />
    <div className="flex flex-col justify-between items-start w-[80%] p-8">
    <TopNavbarComponent searchValue={(data)=>setInputed(data)} />
    <h2 className="text-xl fixed font-semibold w-[55%] left-85 top-15 mt-11">Dashboard</h2>
    <div className="flex justify-between w-[55%] left-85 top-35 fixed ">
    
    {dashboard.map((item, index)=>{
      return(
          <DashboardComponent 
          key={index} 
          icon={item.icon} 
          label={item.label} 
          totalTasks={item.totalTasks} 
          color={item.color}/>
      )
    })}
    <LearningMaterialsComponent />
    </div>
    
    <div className="flex justify-between w-[74%] mt-36 bg-[#f5f7f8]">

    <AssignmentsComponent />
    <h2 className="text-xl font-semibold fixed left-85 top-64">Assignments</h2>
    <AddNewProjectComponent inputed={inputed}
    />
    </div>
    
    </div>
   </div>
  );
}

export default App;
