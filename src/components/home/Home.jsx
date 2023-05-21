
import Banner from "./Banner";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";
import Universe from "./Universe";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-52">
                <Gallery></Gallery>
            </div>
            <div className="mt-52">
                <ShopByCategory></ShopByCategory>
            </div>
            <div className="mt-52">
                <Universe></Universe>
            </div>
        </div>
        
    );
};

export default Home;