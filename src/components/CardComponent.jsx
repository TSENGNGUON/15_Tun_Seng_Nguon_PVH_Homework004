import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ dueDate, projectName, description, progress }) {
  return (
    <div className="w-[270px]">
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p className={`${progress === '100'? 'text-custom-sky-blue' : (progress === '75'? 'text-custom-carrot':(progress === '50'? 'text-custom-yellow':(progress === '25'? 'text-custom-pink':'')))} font-medium`}>{dueDate}</p>
          <EllipsisVertical size={20} color="#374957" />
        </div>


        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {projectName}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {description}
        </p>

        {/* progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{
            progress
          }%</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          {
            progress == '100' ? <div className="bg-custom-sky-blue h-2.5 rounded-full"></div> : ""
          }

          {
            progress == '75' ? <div className="bg-custom-carrot h-2.5 rounded-full w-[75%]"></div> : ""
          }


          {
            progress == '50' ? <div className="bg-custom-yellow h-2.5 rounded-full w-[50%]"></div> : ""
          }
          
          {
            progress == '25' ?  <div className="bg-custom-pink h-2.5 rounded-full w-[25%]"></div>
  : ""
          }
         


        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
            1 day left
          </p>
        </div>
      </div>
    </div>
  );
}
