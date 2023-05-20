import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const DetailsPage = () => {
    const toy= useLoaderData();
    // console.log(toy);
    return (
        <div className="mt-16 flex md:flex-row flex-col justify-center items-center gap-10 bg-ruby-500 bg-opacity-10 p-3 md:p-16 rounded-xl text-charcoal">
            <div className="w-full">
                <img className="w-full h-full sm:w-[400px] sm:h-[400px] object-cover object-center shadow-xl rounded-lg mx-auto block" src={toy.pictureUrl} alt="" />
            </div>
            <div className="w-full">
                <div className="flex justify-between items-center p-2">
                    <p className="text-3xl font-bold w-fit">{toy.toyName}</p>
                    <div className="w-32 flex gap-2 text-gray-400 items-center flex-row-reverse"><span>{toy.rating}</span><Rating style={{ maxWidth: 250 }} value={toy.rating} readOnly/></div>
                </div>
                <p className="mt-5 h-[100px] bg-base-200 overflow-auto shadow-xl p-3 rounded-lg">{toy.description}</p>
                <div className="flex sm:flex-row flex-col justify-between">
                    <div className="mt-7">
                        <p className="text-lg font-bold">Category: <span className="text-gray-500">{toy?.category?.label}</span></p>
                        <p className="text-lg font-bold">Price: <span className="text-gray-500">${toy.price}</span></p>
                        <p className="text-lg font-bold">Quntity: <span className="text-gray-500">${toy.quantity}</span></p>
                    </div>
                    <div className="mt-7">
                        <p className="text-lg font-bold">Seller: <span className="text-gray-500">{toy.sellerName}</span></p>
                        <p className="text-lg font-bold">Seller email: <span className="text-gray-500">{toy.sellerEmail}</span></p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;