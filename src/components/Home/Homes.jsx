
//  import { useEffect } from "react";
//  import { useState } from "react";

// import Home from "../../pages/Home/Home";
// const Homes = () => {

//     const [cards, setCards] = useState([]);

//     useEffect(() => {
//         fetch('data.json')
//             .then(res => res.json())
//             .then(data => setCards(data));
//     },[])

//     return (
//         <div>  


//             <div className="drop-shadow-md">
//                 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
//                     {
//                         cards.map(card => <Home
//                             key={card.id}
//                             card={card}>
//                         </Home>)
//                     }
                    
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Homes;