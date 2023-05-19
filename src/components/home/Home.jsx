
import Banner from "./Banner";
import Gallery from "./Gallery";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-64">
                <Gallery></Gallery>
            </div>
        </div>
        
    );
};

export default Home;