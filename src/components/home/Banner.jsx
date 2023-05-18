import deadpool from '../../assets/banner/deadpool.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
    AOS.init();
    return (
        <div className="flex md:flex-row flex-col-reverse gap-32 overflow-hidden">
            <div className='w-full flex flex-col justify-center items-center gap-10' 
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            >
                <h1 className="text-6xl text-charcoal font-bold font-kanit">Ignite Your Imagination with <span className='text-ruby-500 text-7xl'>Action Figures</span> That Inspire!</h1>
                <div>
                    <p className='text-sm text-gray-600 tracking-wider'>Step into a world of limitless possibilities and let your imagination soar with our incredible collection of action figures. Each meticulously designed figure is a work of art, capturing the essence and spirit of your favorite characters. From mighty superheroes to fearsome villains, from fantasy warriors to intergalactic adventurers, our action figures bring your beloved heroes and legends to life. </p>
                </div>
                <div>

                </div>
            </div>
            <div className='w-full'
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            >
                <img src={deadpool} className='w-full h-full object-cover object-center rounded-xl' alt="" />
            </div>
        </div>
    );
};

export default Banner;