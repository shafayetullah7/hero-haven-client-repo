
import Banner from "./Banner";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";


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
        </div>
        
    );
};

export default Home;