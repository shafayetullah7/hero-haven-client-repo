
import common from '../../assets/common.jpg';

const CommonBanner = ({children}) => {
    
    return (
        <div className="h-[300px] relative rounded-lg overflow-hidden">
            {/* <Marquee>
                {images.map((image,index)=><div className="w-[300px] h-[300px] p-7" key={index}>
                    <img src={image} className="w-full h-full object-cover object-center rounded-lg" alt="" />
                </div>)}
            </Marquee> */}
            <img src={common} className="w-full h-full object-cover object-center" alt="" />
            <div className="absolute inset-0 bg-black bg-opacity-60">
                <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 tracking-wider z-10 text-gray-100 font-kanit text-7xl font-bold">{children}</p>
            </div>
        </div>
    );
};

export default CommonBanner;