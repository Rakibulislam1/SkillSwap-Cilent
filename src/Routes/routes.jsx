import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import ErrorPage from "../Pages/ErrorPage";
import Services from "../Pages/Services";
import SingleService from "../Components/SingleService";
import MyBooking from "../Components/MyBooking";
import AddService from "../Components/AddService";

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
        path: '/bookService',
        element: <MyBooking></MyBooking>,
      },
      {
        path: '/addService',
        element: <AddService></AddService>,
        loader: () => fetch("http://localhost:5000/api/v1/services")
      }
    ]
  },
]);


export default router;