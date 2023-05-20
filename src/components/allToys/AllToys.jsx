import { useEffect, useState } from "react";
import CommonBanner from "../shared/CommonBanner";
import { useNavigate } from "react-router-dom";
import spinner from '../../assets/spinner.gif';

const AllToys = () => {
    const [toys,setToys] = useState([]);
    const navigate = useNavigate();
    const [localLoading,setLocalLoading] = useState(true);

    useEffect(()=>{
        fetch('https://hero-haven-server.vercel.app/all-toys')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setToys(data);
            setLocalLoading(false);
        })
    },[])
    return (
        <div>
            <div>
                <CommonBanner>All Toys</CommonBanner>
            </div>
            <div className="mt-32">
                {localLoading && <div className="w-fit mx-auto mb-5"><img src={spinner} alt="" /></div>}
                <div>
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            {/** Conditionally display the "Seller" column on medium screens and larger */}
                            <th className="hidden md:table-cell">Seller</th>
                            <th>Toy Name</th>
                            {/** Conditionally display the "Category" column on medium screens and larger */}
                            <th className="hidden md:table-cell">Category</th>
                            <th>Price</th>
                            <th className="hidden md:table-cell">Available Quantity</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy, index) => (
                        <tr key={toy._id}>
                            <th>{index + 1}</th>
                            {/** Conditionally display the "Seller" column on medium screens and larger */}
                            <td className="hidden md:table-cell">{toy.sellerName}</td>
                            <td>
                            <p className="w-32 truncate">{toy.toyName}</p>
                            </td>
                            {/** Conditionally display the "Category" column on medium screens and larger */}
                            <td className="hidden md:table-cell">{toy.category.label}</td>
                            <td>{toy.price}</td>
                            <td className="hidden md:table-cell">{toy.quantity}</td>
                            <td className="flex justify-start items-center gap-5">
                            <button className="text-sm text-white bg-ruby-500 font-bold px-3 py-2 rounded-md" onClick={()=>navigate(`/details/${toy._id}`)}>View</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    };

export default AllToys;