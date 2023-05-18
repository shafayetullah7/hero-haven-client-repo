import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';
// import Footer from './shared/Footer';
import FooterComp from './shared/FooterComp';
// import Footer from './shared/Footer';

const Main = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className='mt-64'>
                <FooterComp></FooterComp>
            </div>
        </div>
    );
};

export default Main;