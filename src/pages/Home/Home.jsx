

import {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerCard from '../../components/Banner/BannerCard';
import Cards from '../../components/Cards/Cards';
import MainLayout from '../../layouts/MainLayout';
import bgImage from "/src/images/banner.jpeg";


const Home = () => {

    const [search, setSearch] = useState("");
    const cards = useLoaderData();

    return (
        <div>
            <div className="md:h-[500px] lg:h-[550px] relative w-full bg-center bg-cover" style={{backgroundImage: 
                    `url(${bgImage})`
                }}>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-90"></div>
                        
                <div className="relative z-10">
                    <MainLayout></MainLayout>
                    <BannerCard setSearch={setSearch}></BannerCard>
                </div>
            </div>
                    
            <Cards cards={cards} search={search}></Cards>
        </div>
    );
};


export default Home;