import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)


const toggle = () => {
        setIsOpen(!isOpen)
}



    return (



        <nav className=" bg-amber-800 py-2 md:py-6">
            <div className=" container mx-auto flex justify-between items-center p-3">
                <h1>Tanzims Home</h1>


                {/* mobile menu button  */}

                <div>
                    <button onClick={toggle}>
                        {
                            isOpen ?  <FaBars /> :     <IoMdClose />
                        }
                      
                    </button>
                </div>

                <ul className="flex space-x-4 md:space-x-17">
                    <li> Home </li>
                    <li> Products </li>
                    <li> Blogs </li>
                    <li> Contact </li>
                    <li> About </li>
                </ul>
                <button> Login</button>

            </div>
        </nav>
    )
}

export default Navbar
