import React from "react";

export default function FilterComponent({ setSortedMaterials, learningMaterials }) {
  // prevent the page from reload
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSortChange = (e) => {
      // const sortZtoA = learningMaterials.sort((a,b) => b.title.localeCompare(a.title))
      const order = e.target.value;
      let sorted = [...learningMaterials];
      if (order === "A-Z") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
      } else if (order === "Z-A") {
        sorted.sort((a, b) => b.title.localeCompare(a.title));
      }

      setSortedMaterials(sorted);
  };


  return (
    <form className="mt-4 mx-4 flex justify-between" onSubmit={handleSubmit}>
      <div className="relative w-full ">
        <select
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
          onChange={handleSortChange}
        >
          <option hidden value="">
            Sort By
          </option>
          <optgroup label="Sort By">
            <option value="A-Z">A-Z</option>
            <option value="Z-A"
            >Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}
