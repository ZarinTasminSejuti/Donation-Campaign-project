import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card}) => {

    const { title, image, category_name, category_bg, text_color, card_bg } = card || {}
    
    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div style={{ backgroundColor: card_bg }}  className="shadow-md rounded-lg h-full">
                    <img src={image} alt="" />
                    <div className="p-4 text-left">
                        <div style={{ backgroundColor: category_bg }} className="rounded-md w-fit px-3 py-2">
                            <p style={{ color: text_color}} className='font-medium text-sm'>{category_name}</p>
                        </div>
                        <h2  style={{ color: text_color}} className="font-semibold my-3 text-xl">{title}</h2>  
                    </div>
                </div>
            </Link>
            
        </div>
    );
};


Card.propTypes = {
    card: PropTypes.object.isRequired,
}
export default Card;