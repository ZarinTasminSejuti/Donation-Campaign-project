

import {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerCard from '../../components/Banner/BannerCard';
import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Header/Navbar';


const Home = () => {

    const [search, setSearch] = useState("");
 
    const cards = useLoaderData();


    return (
        <div>
            <div style={{backgroundImage: 'url(https://i.ibb.co/xDMZQqk/banner.jpg)'}}>
      <BannerCard setSearch={setSearch}></BannerCard>   
            </div> 
            <div className="max-w-[1300px] mx-auto">
                <Cards cards={cards} search={search}></Cards>
            </div>
           
        </div>
       
    );
};


export default Home;