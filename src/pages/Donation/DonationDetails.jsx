import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {

    const { id } = useParams();    
    const cards = useLoaderData();


    let findCard = cards.find((card) => card.id === parseInt(id));

    const backgroundImageUrl = "url(" + (findCard.image) + ")";


    return (
        <div className="">
            <div className="bg-cover relative bg-no-repeat w-full h-[600px] rounded-lg mx-auto" style={{ backgroundImage: backgroundImageUrl }}>
                
                <button style={{ backgroundColor: findCard.card_bg, color: findCard.text_color }} className=" px-7 py-4 rounded absolute bottom-9 left-9 z-10 text-white border-none normal-case">Donate ${findCard.price}</button>
                
                <div className="absolute bottom-0 hero-overlay h-32 bg-black bg-opacity-60"></div>
            </div>


            <div>
                <h1 className="font-bold text-5xl mt-14 mb-7">{findCard.title}</h1>
                <p className="leading-8 text-justify mb-14 text-slate-500 font-normal text-base">{findCard.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;