import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <header className="flex justify-between items-center px-24 py-12"> 
                <div className="">
                    <img src="./src/images/Logo.png" alt="" />
                </div>
                
                <nav>
                    <ul className="flex gap-12 text-lg font-normal">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 font-bold underline" : ""
                                }
                            >Home
                            </NavLink>
                        </li>
                        <li>
                        <NavLink
                                to="/Donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 font-bold underline" : ""
                                }
                            >Donation
                        </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 font-bold underline" : ""
                                }
                            >Statistics
                            </NavLink>
                        </li>
                    </ul>
                </nav>              
            </header>
        </div>
    );
};

export default Navbar;