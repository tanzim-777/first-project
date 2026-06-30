import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('')
    const location = useLocation()


    useEffect(() => {
        setActiveLink(location.pathname || '/')
    },[location.pathname])

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = (path) => {
          setActiveLink(path)

    }

    return (
        <nav className="bg-gradient-to-r from-emerald-500 to-emerald-900 p-2 md:py-6 relative sticky top-0">
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
                    <li> <Link to={'/'}
                    onClick={() => handleClick('/')}
                    
                    className={`${activeLink === '/' ? 'text-red-600' : 'relative inline-block transition-all duration-300 hover:scale-110 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full'}`} 
                    > Home </Link>     </li>


                    <li>
                        <Link to={'/Products'}
                          onClick={() => handleClick('/Products')}

                        className={`${activeLink === '/Products' ? 'text-red-600' : 'relative inline-block transition-all duration-300 hover:scale-110 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full'}`}> Products </Link>
                    </li>


                    <li>
                        <Link to={'/Blogs'} 
                          onClick={() => handleClick('/Blogs')}
                        
                        className={`${activeLink === '/Blogs' ? 'text-red-600' : 'relative inline-block transition-all duration-300 hover:scale-110 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full'}`}> Blogs </Link>
                    </li>


                    <li>
                        <Link to={'/Contact'}
                          onClick={() => handleClick('/Contact')}
                        
                        className={`${activeLink === '/Contact' ? 'text-red-600' : 'relative inline-block transition-all duration-300 hover:scale-110 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full'}`}> Contact
                        </Link>
                    </li>


                    <li>
                        <Link to={'/About'}
                          onClick={() => handleClick('/About')}

                        className={`${activeLink === '/About' ? 'text-red-600' : 'relative inline-block transition-all duration-300 hover:scale-110 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-500 after:transition-all after:duration-200 hover:after:w-full'}`}> About </Link>

                    </li>
                </ul>


                <button className="hidden md:block bg-orange-600 text-black h-7 w-17 rounded-full transition-all duration-200 hover:scale-110 font-semibold">Login</button>

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
