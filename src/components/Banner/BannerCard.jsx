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
                <div className="text-center flex flex-col mt-10 lg:mt-24">
                    <h1 className="font-bold text-black text-2xl md:text-4xl lg:text-5xl">I Grow By Helping People In Need</h1>
                            
                    <div className="flex my-10 lg:w-1/3 mx-auto items-center">
                        <input type="text" value={userInput} onChange={handleOnChange} className="flex-1 p-2 h-12 lg:w-10 rounded-r-none rounded-lg border-2" placeholder="Search Here..." />
                        
                        <button onClick={handleSearch} className="bg-red-600  rounded-l-none border border-red-600 px-7 h-12 rounded-lg text-white">Search</button>
                    </div>
                </div>

    );
};

BannerCard.propTypes = {
    setSearch: PropTypes.func.isRequired,
}


export default BannerCard;