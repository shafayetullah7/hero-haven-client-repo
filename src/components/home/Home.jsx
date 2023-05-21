
import Banner from "./Banner";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";
import Stats from "./Stats";
import Universe from "./Universe";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-52" id="gallery">
                <Gallery></Gallery>
            </div>
            <div className="mt-52" id="shopBycategory">
                <ShopByCategory></ShopByCategory>
            </div>
            <div className="mt-52">
                <Stats></Stats>
            </div>
            <div className="mt-52">
                <Universe></Universe>
            </div>
        </div>
        
    );
};

export default Home;