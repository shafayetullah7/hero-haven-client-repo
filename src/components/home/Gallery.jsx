import { useState } from "react";
import Marquee from "react-fast-marquee";

const Gallery = () => {
    const [currentImage,setCurrentImage] = useState('');
    const images = [
        "https://i.postimg.cc/8k00WffY/dc1.jpg",
        "https://i.postimg.cc/76MDFByf/jedi2.jpg",
        "https://i.postimg.cc/DwVppVgd/marvel1.jpg",
        "https://i.postimg.cc/4yWGdmyG/dark1.jpg",
        "https://i.postimg.cc/pTNLbhh1/d0a0c399-afa2-409f-a12a-0c800d70fe52.jpg",
        "https://i.postimg.cc/6pdjDHbs/dc2.jpg",
        "https://i.postimg.cc/d06W0hK4/star1.jpg",
        "https://i.postimg.cc/0NPWxphz/marvel2.jpg",
        "https://i.postimg.cc/Gh3hC1tr/troop1.jpg",
        "https://i.postimg.cc/4dFBzjyc/trans1.jpg",
        "https://i.postimg.cc/y8k1DX0b/mando1.jpg",
        "https://i.postimg.cc/8Pfnbkhz/star2.jpg",
        "https://i.postimg.cc/pTds5PWx/trans2.jpg",
        "https://i.postimg.cc/fTHWWgSd/all5.jpg",
        "https://i.postimg.cc/nr2FD3d6/jedi1.jpg",
        "https://i.postimg.cc/1XrtKmz7/38cd3405-32fe-4aaa-a6ed-39e2d3472816.jpg",
        "https://i.postimg.cc/XJ041RmR/d613543d-c383-4a3d-b7fb-fa4427980835.jpg"
    ]

    return (
         <div>
            <div className="relative rounded-lg overflow-hidden py-16 bg-base-200">
                <h1 className="text-center text-5xl font-bold">Our Collection of <span className="text-ruby-500 text-6xl">Heros</span></h1>
                <div className=" rounded-xl mt-16 py-5">
                    <Marquee pauseOnHover={true} className="py-5">
                        {images.map((image,index)=><div className="mx-5 overflow-hidden rounded-lg relative" key={index}>
                            <img src={image} className="w-[250px] h-[200px] object-cover object-center" alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="absolute inset-0 opacity-0 hover:opacity-100 duration-150">
                                <label htmlFor="my-modal" className="bg-ruby-500 px-5 py-2 rounded-md font-bold text-white absolute bottom-5 right-6 hover:scale-105 duration-150 cursor-pointer" onClick={()=>setCurrentImage(image)}>View</label>
                            </div>
                        </div>)}
                    </Marquee>
                </div>
            </div>
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <img src={currentImage} alt="" />
                <div className="modal-action">
                <label htmlFor="my-modal" className="btn">Close</label>
                </div>
            </div>
            </div>
         </div>
    );
};

export default Gallery;