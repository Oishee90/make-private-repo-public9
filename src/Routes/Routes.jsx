import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Navbar/Login";
import Register from "../Pages/Navbar/Register";
import Estate from "../Pages/Home/Estate";
import EstateDetails from "../Pages/Home/EstateDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateProfilePage from "../Pages/Navbar/UpdateProfuile";
import ErrorPages from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPages></ErrorPages>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/estate/:id",
          element:<PrivateRoute>
            <EstateDetails></EstateDetails>
            </PrivateRoute>,
          loader:() => fetch ('/fakeData.json')
        },
        {
        path: "/updateProfile",
        element:<PrivateRoute>
    <UpdateProfilePage></UpdateProfilePage>
          </PrivateRoute>,
       
      },
      {
        path: "/about",
        element:<About></About>
      },
        {
            path: "/login",
            element:<Login></Login>
          },
          {
            path: "/estate",
            element:<Estate></Estate>
          },
          {
            path: "/register",
            element:<Register></Register>
          },
      ],
    },
  ]);
  export default router;