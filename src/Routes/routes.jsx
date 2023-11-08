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
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/api/v1/services")
      },
      {
        path: '/singleService/:id',
        element: <SingleService></SingleService>,
        loader: () => fetch("http://localhost:5000/api/v1/services")
      },
      {
        path: '/myServices',
        element: <MyServices></MyServices>,
      },
      {
        path: '/addService',
        element: <AddService></AddService>,
        loader: () => fetch("http://localhost:5000/api/v1/services")
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:()=> fetch('http://localhost:5000/api/v1/services')
      },
      {
        path:'/mySchedules',
        element: <MySchedules></MySchedules>,
      }
    ]
  },
]);


export default router;