import React, { useState } from "react";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import FilterComponent from "./FilterComponent";
import '../index.css'
import { learningMaterials } from "../data/learningMaterials";




export default function LearningMaterialsComponent() {
  const [sortedMaterials, setSortedMaterials] = React.useState(learningMaterials);
  

  const handleFavorite = (id) => {
    return () => {
      const updatedMaterials = sortedMaterials.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isFavorite: !item.isFavorite,
          };
        }
        return item;
      });

      setSortedMaterials(updatedMaterials);
    };
  };




  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] w-[20%] fixed right-2 top-30 no-scrollbar ">
      {/* calling filter component */}
      <FilterComponent 
      setSortedMaterials={setSortedMaterials}
      learningMaterials={learningMaterials}
      />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      {
        sortedMaterials.map((item, index) => {
          return(
            <div key={index} className="space-y-3">
            <div className="bg-light-gray px-4 py-2 flex gap-5 items-center">
              <img
                src={item.image}
                alt="HTML5"
                width={50}
                height={50}
                className="rounded-xl"
              />
    
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-base font-medium">{item.title}</p>
                   {

                   item.isFavorite ? <SolidStarIcon onClick={handleFavorite(item.id)} className="w-5 h-5 text-custom-carrot"/> : <OutlineStarIcon onClick={handleFavorite(item.id)} className="w-5 h-5" />
                   }
                </div>
                <p className="text-gray-400 text-sm">Posted at: {item.postedAt}</p>
              </div>
            </div>
          </div>
          )
        })
      }
    </div>
  );
}
