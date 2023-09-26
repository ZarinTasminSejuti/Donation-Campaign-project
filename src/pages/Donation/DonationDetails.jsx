import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';
import MainLayout from '../../layouts/MainLayout';


const DonationDetails = () => {
// localStorage.setItem('donateData', JSON.stringify([]));

    const { id } = useParams();
    const cards = useLoaderData();


    let findCard = cards.find((card) => card.id === parseInt(id));

    const backgroundImageUrl = "url(" + (findCard.image) + ")";

    const handleDonate = () => {
        
        const addedDonatesArray = [];
        // console.log(addedDonatesArray);
        const myDonateData = JSON.parse(localStorage.getItem('donateData'));

        //adding data in localStorage

        if (!myDonateData) {
            addedDonatesArray.push(findCard);
            localStorage.setItem('donateData', JSON.stringify(addedDonatesArray));
            toast("Thank You for Donating us!");

        } else {

            const isExist = myDonateData.find((card) => card.id === parseInt(id));

            if (!isExist) {
                addedDonatesArray.push(...myDonateData, findCard)
                localStorage.setItem('donateData', JSON.stringify(addedDonatesArray));
                toast("Thank You for Donating us!");
            } else {
                swal("Already Donated!", "You Can't Donate More!", "error");
            }
        }
    }

    return (
        <div className="max-w-[1300px] mx-auto">
            <MainLayout></MainLayout>
            {/* Donate Details of particular data section */}
            <div className="bg-cover mt-10 relative bg-no-repeat w-full h-[600px] rounded-lg mx-auto" style={{ backgroundImage: backgroundImageUrl }}>

                <button style={{ backgroundColor: findCard.card_bg, color: findCard.text_color }} className=" px-7 py-4 rounded absolute bottom-9 left-9 z-10 text-white border-none normal-case" onClick={handleDonate} >Donate ${findCard.price}</button>

                <div className="absolute bottom-0 rounded-lg hero-overlay h-32 bg-black bg-opacity-60"></div>
            </div>

            <ToastContainer />
            <div>
                <h1 className="font-bold text-5xl mt-14 mb-7">{findCard.title}</h1>
                <p className="leading-8 text-justify mb-14 text-slate-500 font-normal text-base">{findCard.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;