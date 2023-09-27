import PropTypes from 'prop-types';
import {  useEffect, useState } from 'react';
import Card from './Card';
import swal from 'sweetalert';

const Cards = ({ cards, search }) => {
    const [searchedValue, setSearchedValue] = useState([]);
      

    useEffect(() => {
        const filterCards = () => {
            if (search) {
                const searchedValueFiltered = cards.filter((element) =>
                    element.category_name.toLowerCase() === search.toLowerCase()
                    
                );
                console.log(typeof searchedValueFiltered);
                if (searchedValueFiltered.length === 0) {
                    swal("Error!", "Category did not match", "error");
                } else {
                    setSearchedValue(searchedValueFiltered);
                }
           
            } else {
            setSearchedValue(cards);
            }
        };
        filterCards();
        }, [search, cards]);
     



    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-16 lg:my-24 max-w-[1300px] mx-auto p-3 lg:p-0'>
            {
                searchedValue?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};
 Cards.propTypes = {
     cards: PropTypes.array.isRequired,
     search: PropTypes.string.isRequired,
 }
export default Cards;
