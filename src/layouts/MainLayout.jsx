import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <header className="flex justify-between items-center px-24 shadow-md py-12">
                <div className="">
                    <img src="./src/images/Logo.png" alt="" />
                </div>
                
                <nav>
                    <ul className="flex gap-12 text-lg font-normal">
                        <li>
                            <a href="/Homes">Home</a>
                        </li>
                        <li>
                            <a href="/Donation">Donation</a>
                        </li>
                        <li>
                            <a href="/Statistics">Statistics</a>
                        </li>
                    </ul>
                </nav>              
            </header>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;