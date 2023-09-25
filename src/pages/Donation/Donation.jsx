import { useEffect, useState } from 'react';

const Donation = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const donateStorage = localStorage.getItem('donateData');

        if (donateStorage) {
          setDatas(JSON.parse(donateStorage));
        }

    }, []);
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto'>
            
            {datas.map((data) => (
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
                  ))}
        </div>
    );
};

export default Donation;