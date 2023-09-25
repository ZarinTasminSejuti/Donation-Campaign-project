import PropTypes from 'prop-types';
 import Card from './Card';

const Cards = ({ cards }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-24'>
            {
                cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};
 Cards.propTypes = {
     cards: PropTypes.array.isRequired,
 }
export default Cards;
