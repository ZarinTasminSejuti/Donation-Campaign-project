import { useEffect, useState } from 'react';

const Donation = () => {
    const [datas, setDatas] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isSeeAll, setSeeButton] = useState(false);

    useEffect(() => {
        const donateStorage = localStorage.getItem('donateData');

        //checking if any item is exist or not in the page
        if (donateStorage) {
          setDatas(JSON.parse(donateStorage));
        } else {
            setNoFound("You have not donate anything");
        }

    }, []);
    
    
    return (
        <div>
            {noFound ? <p className="text-2xl md:text-3xl lg:text-4xl font-bold  text-gray-400 text-center mt-48">{noFound}</p> :
                
            //Donated data display section
       
                <div>
                        
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-24 mx-auto'>                 
                        {
                        isSeeAll ? datas.map((data) => (
                            <div key={data.id}>

                                <div style={{ backgroundColor: data.card_bg }} className="flex shadow-md items-center rounded-lg h-full">
                                                    
                                    <img className='h-[200px] w-2/5' src={data.image} alt="" />
                            
                                    <div className='flex flex-col ml-6'>

                                        <div style={{ backgroundColor: data.category_bg }} className="rounded-md w-fit px-3 py-2">
                                            <p style={{ color: data.text_color}} className='font-medium text-sm'>{data.category_name}</p>
                                        </div>

                                        <h2 className='font-semibold text-2xl my-2 text-black'>{data.title}</h2>
                                        <p className='mb-3' style={{ color: data.text_color }}>${data.price}</p>
                                        
                                        <button className='text-white w-fit rounded-md px-4 py-2' style={{ backgroundColor: data.button_background }}>View Details</button>
                                    </div>                            
                                </div>
                            </div>
                        ))
                                    
                            : datas.slice(0,4).map((data) => (
                                <div key={data.id}>
        
                                    <div style={{ backgroundColor: data.card_bg }} className="flex shadow-md items-center rounded-lg h-full">
                                                        
                                        <img className='h-[200px] w-2/5' src={data.image} alt="" />
                                
                                        <div className='flex flex-col ml-6'>
        
                                            <div style={{ backgroundColor: data.category_bg }} className="rounded-md w-fit px-3 py-2">
                                                <p style={{ color: data.text_color}} className='font-medium text-sm'>{data.category_name}</p>
                                            </div>
        
                                            <h2 className='font-semibold text-2xl my-2 text-black'>{data.title}</h2>
                                            <p className='mb-3' style={{ color: data.text_color }}>${data.price}</p>
                                            
                                            <button className='text-white w-fit rounded-md px-4 py-2' style={{ backgroundColor: data.button_background }}>View Details</button>
                                        </div>                            
                                    </div>
                                </div>
                            ))   
                        }   
                    </div>

                    
                    {/* See All Button Section */}
                    {
                        datas.length >4 && !isSeeAll && (
                            <button onClick={()=> setSeeButton(true)} className='px-7 py-3 my-16 text-lg rounded-lg block shadow-md font-semibold text-white mx-auto bg-green-700'>See All</button>
                    )}  
                </div> 
            }
        </div>   
    );
};

export default Donation;