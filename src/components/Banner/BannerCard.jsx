

const BannerCard = () => {
    return (
        <div>
            {/* banner section */}
            <div className="hero h-[500px]" style={{backgroundImage: 'url(./src/images/banner.jpeg)'}}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="text-center flex flex-col">
                    <h1 className="font-bold text-black text-5xl">I Grow By Helping People In Need</h1>
                            
                    <div className="flex my-10">
                        <input type="text" className="flex-1 p-2 rounded border-2" placeholder="Search Here..."/>
                        <button className="btn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;