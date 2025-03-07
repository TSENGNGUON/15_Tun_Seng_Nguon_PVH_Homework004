
export default function DashboardComponent({label, totalTasks, icon, color}) {
  return (
    <div>
      {/* display summary on each card */}
      <div className="flex gap-5">
        <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto">
          <div  className={`p-3 rounded-xl ${color}`}>
            <img src={icon} alt="file icon" />
          </div>
          <div>
            <p className="text-xl font-semibold">{totalTasks}</p>
            <p className="text-gray-400">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
