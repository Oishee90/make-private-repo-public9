import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Navbar/Login";
import Register from "../Pages/Navbar/Register";


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
            path: "/login",
            element:<Login></Login>
          },
          {
            path: "/register",
            element:<Register></Register>
          },
      ],
    },
  ]);
  export default router;