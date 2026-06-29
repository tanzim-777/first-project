import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Contact from "../Contact/Contact";
import Blogs from "../Blogs/Blogs";
import About from "../About/About";

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
        Component: Blogs

      },
      {

        path: 'Contact',
        Component: Contact

      },
      {

        path: 'About',
        Component: About

      }

    ]
  }
]);

export default router;