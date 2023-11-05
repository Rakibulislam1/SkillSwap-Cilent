import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footers from "./Footers";


const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet/>
      <Footers></Footers>
    </div>
  );
};

export default MainLayout;