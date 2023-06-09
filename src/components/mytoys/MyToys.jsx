import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../access/AuthProvider";
import CommonBanner from "../shared/CommonBanner";
import { useNavigate } from "react-router-dom";
import spinner from '../../assets/spinner.gif';
import Swal from 'sweetalert2';


const MyToys = () => {
    const [toys,setToys] = useState([]);
    const navigate = useNavigate();
    const [localLoading,setLocalLoading] = useState(true);
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch(`https://hero-haven-server.vercel.app/all-toys?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setToys(data);
            setLocalLoading(false);
        })
        .catch(err=>console.log(err.message))
    },[]);

    const handleDelete = (id)=>{
        console.log('inside delete ',id);
        Swal.fire({
            title: 'Are you sure to delete?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://hero-haven-server.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                  })
                .then((res)=>res.json())
                .then(data=>{
                    console.log(data);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Toy Deleted successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    setToys(toys=>toys.filter(toy=>toy._id!==id));
                })
                .catch(err=>console.log(err.message))
            }
          })
        
    }

    const sortAscending = () =>{
        setLocalLoading(true);
        const url = `https://hero-haven-server.vercel.app/all-toys?email=${user.email}&sort=1`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setToys(data);
            setLocalLoading(false);
        })
        .catch(err=>{
            console.log(err.message);
            setLocalLoading(false);
        })
    }  
    const sortDescending = () =>{
        setLocalLoading(true);
        const url = `https://hero-haven-server.vercel.app/all-toys?email=${user.email}&sort=-1`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setToys(data);
            setLocalLoading(false);
        })
        .catch(err=>{
            console.log(err.message);
            setLocalLoading(false);
        })
    } 
    return (
        <div>
        <div>
            <CommonBanner>My Toys</CommonBanner>
        </div>
        <div className="mt-32">
            {localLoading && <div className="w-fit mx-auto mb-5"><img src={spinner} alt="" /></div>}
            <div className="flex flex-row justify-end gap-2 mb-2 flex-wrap">
                <button onClick={()=>sortAscending()} className="px-5 py-2 bg-base-200 border border-gray-300 rounded-lg">Sort by Price (Low to High)</button>
                <button onClick={()=>sortDescending()} className="px-5 py-2 bg-base-200 border border-gray-300 rounded-lg">Sort by Price (High to Low)</button>
            </div>
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
                        <p className="w-32 mx-auto truncate">{toy.toyName}</p>
                        </td>
                        {/** Conditionally display the "Category" column on medium screens and larger */}
                        <td className="hidden md:table-cell">{toy.category.label}</td>
                        <td>{toy.price}</td>
                        <td className="hidden md:table-cell">{toy.quantity}</td>
                        <td className="flex md:flex-row flex-col items-center justify-center gap-2">
                        <button className="text-sm text-white bg-ruby-500 font-bold px-3 py-2 rounded-md" onClick={()=>handleDelete(toy._id)}>Delete</button>
                        <button className="text-sm text-white bg-emerald-500 font-bold px-3 py-2 rounded-md" onClick={()=>navigate(`/update-toys/${toy._id}`)}>Update</button>
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
    

export default MyToys;