import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/Home/Home"
import Products from "../components/pages/Products/Products"
import Blogs from "../components/pages/Blogs/Blogs"
import Contact from "../components/pages/Contact/Contact"
import About from "../components/pages/About/About"
import Login from "../components/auth/Login/Login"
import Register from "../components/auth/Register/Register"





const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'Products',
        Component: Products

      },
      {

        path: 'Blogs',
        Component:"Blogs" 

      },
      {

        path: 'Contact',
        Component: Contact

      }
      ,
      {

        path: 'About',
        Component: About

      }
      ,
      {

        path: 'Login',
        Component: Login

      }
      ,
      {

        path: 'Register',
        Component: Register

      }

    ]
  }
]);

export default router;