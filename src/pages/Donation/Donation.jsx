import { useEffect, useState } from 'react';

const Donation = () => {
    const [data, setData] = useState([]);
    useEffect(() => {


        const donateStorage = localStorage.getItem('donateData');

        if (donateStorage) {
          setData(JSON.parse(donateStorage));
        }
    }, []);
    console.log(data);
    return (
        <div>
            <div className="rounded-lg h-full">
                
                <img src={data.image} alt="" />
                
                    <div className="p-4 text-left">
                        <div style={{ backgroundColor: data.category_bg }} className="rounded-md w-fit px-3 py-2">
                            <p style={{ color: data.text_color}} className='font-medium text-sm'>{data.category_name}</p>
                        </div>
                        <h2  style={{ color: data.text_color}} className="font-semibold my-3 text-xl">{data.title}</h2>  
                    </div>
                </div>
        
        </div>
    );
};

export default Donation;