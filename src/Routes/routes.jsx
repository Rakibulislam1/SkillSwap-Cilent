import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import ErrorPage from "../Pages/ErrorPage";
import Services from "../Pages/Services";
import SingleService from "../Components/SingleService";
import AddService from "../Components/AddService";
import MySchedules from "../Components/MySchedules";
import MyServices from "../Components/MyServices";
import Update from "../Pages/Update";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Registration></Registration>,
      },
      {
        path: '/services',
        element: <Services/>,
        loader: () => fetch("http://localhost:5000/api/v1/services")
      },
      {
        path: '/singleService/:id',
        element: <SingleService/>,
        loader: () => fetch("http://localhost:5000/api/v1/services")
      },
      {
        path: '/myServices',
        element: <PrivateRoute><MyServices/></PrivateRoute>,
      },
      {
        path: '/addService',
        element: <PrivateRoute><AddService/></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/api/v1/services")
      },
      {
        path:'/update/:id',
        element:<Update/>,
        loader:()=> fetch('http://localhost:5000/api/v1/services')
      },
      {
        path:'/mySchedules',
        element: <PrivateRoute><MySchedules/></PrivateRoute>,
      }
    ]
  },
]);


export default router;