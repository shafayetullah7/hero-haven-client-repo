import AOS from 'aos';
import 'aos/dist/aos.css';
import StatItem from './StatItem';
import { GiRobotGolem } from "react-icons/gi";
import { FaUsers,FaGlobeAsia,FaShoppingBag,FaStar } from "react-icons/fa";
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';



const Stats = () => {
    AOS.init();
    const [counterOn,setCounterOn] = useState(false);
    return (
        <div>
            <ScrollTrigger onEnter={()=>setCounterOn(true)}>
                {
                counterOn && <div className="flex flex-wrap justify-center gap-2 items-center md:flex-row flex-col"
                data-aos="fade-up"
                data-aos-offset="-150"
                data-aos-delay="5"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                >
                <StatItem number={300000} description="Total Action Figures" ><GiRobotGolem className='text-4xl text-charcoal'></GiRobotGolem></StatItem>
                <StatItem number={5000} description="Happy Customers" ><FaUsers className='text-4xl text-charcoal'></FaUsers></StatItem>
                <StatItem number={15} description="Superhero Universes" ><FaGlobeAsia className='text-4xl text-charcoal'></FaGlobeAsia></StatItem>
                <StatItem number={50000} description="Action Figures Sold" ><FaShoppingBag className='text-4xl text-charcoal'></FaShoppingBag></StatItem>
                <StatItem number={100} description="Heroic Collections" ><FaStar className='text-4xl text-charcoal'></FaStar></StatItem>
                </div>
                }
            </ScrollTrigger>
            
        </div>
    );
};


export default Stats;
