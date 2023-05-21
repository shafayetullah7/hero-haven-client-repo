import { Outlet, useLocation } from "react-router-dom";
import './App.css';
import { useEffect } from "react";



const App = () => {
  useEffect(()=>{
    console.log(document.title)
  },[])
  return (
    <div className="max-w-[1400px] mx-auto p-1 md:px-5">
      <Outlet></Outlet>
    </div>
  );
};

export default App;