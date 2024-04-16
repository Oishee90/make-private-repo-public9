import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Navbar/Login";
import Register from "../Pages/Navbar/Register";
import Estate from "../Pages/Home/Estate";
import EstateDetails from "../Pages/Home/EstateDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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