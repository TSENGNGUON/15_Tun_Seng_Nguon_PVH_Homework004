import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";

function App() {
  return (
   <div className="flex items-start p-7">
    <SidebarComponent />
    <div className="flex justify-between items-center w-[80%] pt-7">
    <TopNavbarComponent />
    
    </div>
   </div>
  );
}

export default App;
