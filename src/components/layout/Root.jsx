import { Outlet } from "react-router-dom"
import Footer from "../shared/Footer/Footer/Footer"
import Navbar from "../shared/Footer/Navbar/Navbar"
Navbar
const Root = () => {
  return (
    <div>
     <Navbar></Navbar>
      <Outlet></Outlet>
    <Footer></Footer>

    </div>
  )
}

export default Root
