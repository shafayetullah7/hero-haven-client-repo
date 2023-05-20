import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useNavigate } from 'react-router-dom';



const CategoryToys = ({category}) => {
    const [toys,setToys] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetch(`https://hero-haven-server.vercel.app/all-toys?categoryLabel=${category}`)
        .then(res=>res.json())
        .then(data =>setToys(data));
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 h-[800px] overflow-auto p-5 text-charcoal'>
            {toys.map(toy=><div key={toy._id} className='flex sm:flex-row flex-col gap-5 p-5 w-full rounded-xl shadow-xl'>
                <div className='sm:w-[500px] w-full h-[250px]'>
                    <img src={toy.pictureUrl} className='w-full h-full object-cover object-top rounded-xl' alt="toy" />
                </div>
                <div className='w-full relative'>
                <div className='flex justify-between items-center p-3'>
                    <h2 className='text-2xl font-bold text-ruby-500 w-full'>{toy.toyName}</h2>
                    <p className='w-20'><Rating style={{ maxWidth: 250 }} value={toy.rating} readOnly /></p>
                </div>
                    <p className='text-sm h-20 overflow-auto p-3 rounded-md'>{toy.description}</p>
                    <div className='flex justify-between items-center px-2 w-full mt-16'>
                        <p className='font-bold text-gray-600'>Price: $<span>{toy.price}</span></p>
                        <button className="text-sm text-white bg-ruby-500 font-bold px-5 py-3 rounded-md block" onClick={()=>navigate(`/details/${toy._id}`)}>View</button>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default CategoryToys;