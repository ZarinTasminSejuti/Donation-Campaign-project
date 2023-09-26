import { useState } from "react";
import PropTypes from 'prop-types';



const BannerCard = ({setSearch}) => {
    
    const [userInput, setUserInput] = useState("");

    const handleOnChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSearch = () => {
        setSearch(userInput); 
        setUserInput("");
       
    }



    return (
        <div className="hahah">
           
            {/* banner section */}
            <div className="hero h-[500px]" >
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="text-center flex flex-col">
                    <h1 className="font-bold text-black text-5xl">I Grow By Helping People In Need</h1>
                            
                    <div className="flex my-10 w-2/3 mx-auto items-center">
                        <input type="text" value={userInput} onChange={handleOnChange} className="flex-1 p-2 h-12 rounded-r-none rounded-lg border-2" placeholder="Search Here..." />
                        
                        <button onClick={handleSearch} className="bg-red-600  rounded-l-none px-7 h-12 rounded-lg text-white">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

BannerCard.propTypes = {
    setSearch: PropTypes.func.isRequired,
}


export default BannerCard;