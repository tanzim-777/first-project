import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)


    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (



        <nav className=" bg-amber-800 p-2 md:py-6 relative">
            <div className="container mx-auto flex justify-between items-center ">

                {/* mobile menu button - left side */}
                <div className="md:hidden">
                    <button onClick={toggle}>
                        {isOpen ? <IoMdClose /> : <FaBars />}
                    </button>
                </div>

                <h1 className="font-bold text-xl font-serif">Tanzims Home</h1>

                {/* desktop menu */}
                <ul className="hidden md:flex space-x-17">
                    <li> <Link> Home </Link></li>
                    <li><Link> Products </Link></li>
                    <li><Link> Blogs </Link></li>
                    <li><Link> Contact </Link></li>
                    <li><Link> About </Link></li>
                </ul>

                <button className="hidden md:block">Login</button>

        {/* mobile menu collapsed */}

        <div className={`md:hidden w-full absolute bg-green-500 top-full left-0 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col items-center py-3 space-y-3">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>
                         <button className="">Login</button>
                    </li>
                </ul>
        </div>

            </div>
        </nav>
    )
}

export default Navbar
