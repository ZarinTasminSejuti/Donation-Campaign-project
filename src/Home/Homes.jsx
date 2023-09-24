
const Homes = () => {
    return (
        <div>  
            <div className="text-center bg-hero-pattern h-96">
                <h1 className="font-bold text-5xl">I Grow By Helping People In Need</h1>
                <div className="flex">
                    <input type="text" className="flex-1 p-2 rounded border-2" placeholder="Search Here..."/>
                    <button>Search</button>
                </div>
            </div>
           

            
            {/* card section */}
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
 
        </div>
    );
};

export default Homes;