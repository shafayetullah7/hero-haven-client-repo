import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default App;