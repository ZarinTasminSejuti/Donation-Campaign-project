
import { useLoaderData, useParams } from "react-router-dom";
// import Card from "../../components/Cards/Card";

const DonationDetails = () => {

    const { id } = useParams();    
    const cards = useLoaderData();


    let findCard = cards.find((card) => card.id === parseInt(id));

    const backgroundImageUrl = "url(" + (findCard.image) + ")";

  
   

    return (
        <div className="">
            <div className="bg-cover bg-no-repeat w-full h-[600px] rounded-lg mx-auto" style={{backgroundImage: backgroundImageUrl}}><button className="btn btn-primary">Donate</button>
                <div className="hero-overlay h-20 bg-black bg-opacity-60"></div>
            </div>
            <div>
                <h1 className="font-bold text-5xl mt-14 mb-7">{findCard.title}</h1>
                <p className="leading-8 text-justify mb-14 text-slate-500 font-normal text-base">{findCard.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;