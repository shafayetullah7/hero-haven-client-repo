import { Outlet } from "react-router-dom";
import './App.css';


const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-5">
      <Outlet></Outlet>
    </div>
  );
};

export default App;