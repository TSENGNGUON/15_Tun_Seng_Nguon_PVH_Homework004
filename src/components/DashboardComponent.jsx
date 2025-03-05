
export default function DashboardComponent(prop) {
  return (
    <div>
      

      {/* display summary on each card */}
      <div className="flex gap-5">
        <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto">
          <div  className={prop.className}>
            <img src="/fi-sr-file.svg" alt="file icon" />
          </div>
          <div>
            <p className="text-xl font-semibold">{prop.title_number}</p>
            <p className="text-gray-400">Total Assignments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
