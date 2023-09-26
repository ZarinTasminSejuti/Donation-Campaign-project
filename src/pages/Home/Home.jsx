

import {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerCard from '../../components/Banner/BannerCard';
import Cards from '../../components/Cards/Cards';
import MainLayout from '../../layouts/MainLayout';
import bgImage from "../../../public/images/banner.jpeg";
//import Navbar from '../../components/Header/Navbar';


const Home = () => {

    const [search, setSearch] = useState("");
 
    const cards = useLoaderData();


    return (
        <div>
            <div className="h-[500px] w-full bg-center bg-cover" style={{backgroundImage: 
                `url(${bgImage})`
            }}>
                
                <MainLayout></MainLayout>
                <BannerCard setSearch={setSearch}></BannerCard> 
            </div>
          
           
                <Cards cards={cards} search={search}></Cards>
     
        </div>
    );
};


export default Home;