
import { useLoaderData } from 'react-router-dom';
import BannerCard from '../../components/Banner/BannerCard';
import Cards from '../../components/Cards/Cards';
const Home = () => {

    const cards = useLoaderData()

    return (
        <div>
            <BannerCard></BannerCard>
            <Cards cards={cards}></Cards>
        </div>
    );
};


export default Home;