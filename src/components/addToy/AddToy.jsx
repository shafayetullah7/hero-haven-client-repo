import { useContext, useState } from 'react';
import Select from 'react-select';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../access/AuthProvider';
// import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2'

const AddToy = () => {
    AOS.init();

    const options = [
        { value: 'marvel', label: 'Marvel' },
        { value: 'dc', label: 'DC' },
        { value: 'star-wars', label: 'Star-Wars' },
        { value: 'transformer', label: 'Transformer' },
      ];
    const [category, setCategory] = useState(null);
    const [error,setError] = useState('');

    const {user} = useContext(AuthContext);
    // console.log(user);


    const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const form = e.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;


    const data = {
        toyName:name,sellerEmail,sellerName,category,price,rating,quantity,description,pictureUrl,userEmail:user.email
    }
    console.log(data);

    if(!pictureUrl || !name || !sellerEmail || !sellerName || !category || !price || !rating || !quantity || !description){
        setError('All fields must be filled!');
        return;
    }
    if(rating<0){
        setError('Rating cannot be negative');
        return;
    }
    if(price<0){
        setError('Price cannot be negative');
        return;
    }
    if(quantity<0){
        setError('Quantity cannot be negative');
        return;
    }

    fetch('https://hero-haven-server.vercel.app/add-toy',{
        method:'POST',
        headers:{
            'content-type':'Application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        form.reset();
    })
    .catch(err=>{
        console.log(err.message);
        setError('Failed to add toy');
    })
    // Reset the form fields
    
  };

  return (
    <div className="max-w-xl mx-auto p-10 rounded-xl shadow-2xl bg-gray-100 mt-16"
    data-aos="fade-down"
    data-aos-offset="0"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
    >
      <h1 className="text-2xl font-bold mb-4 text-center text-charcoal">Add Toy</h1>

        <form onSubmit={handleSubmit} className="grid gap-4">
        
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Toy Name:</label>
                <input type="text" name="name" id="name" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 border-opacity-50 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter toy name" required/>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    <label htmlFor="sellerName" className="block text-sm font-medium text-gray-700 mb-2">Seller Name:</label>
                    <input type="text" name="sellerName" id="sellerName" defaultValue={user?.displayName||''} className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 border-opacity-50 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter seller name" required/>
                </div>

                <div>
                    <label htmlFor="sellerEmail" className="block text-sm font-medium text-gray-700 mb-2">Seller Email:</label>
                    <input type="email" name="sellerEmail" id="sellerEmail" defaultValue={user?.email||''} className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 border-opacity-50 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter seller email" required/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700 mb-2">Sub-Category:</label>
                    {/* <input type="text" name="subCategory" id="subCategory" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 border-opacity-50 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter sub-category" required/> */}
                    <Select defaultValue={category} onChange={setCategory} options={options}/>
                </div>
                <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Available Quantity:</label>
                    <input type="number" name="quantity" id="quantity" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 border-opacity-50 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter available quantity" required/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Price:</label>
                    <input type="number" name="price" id="price" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 border-opacity-50 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter price" required/>
                </div>

                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">Rating:</label>
                    <input type="number" name="rating" id="rating" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 border-opacity-50 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter rating" required/>
                </div>
            </div>

            

            <div>
                <label htmlFor="pictureUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Picture URL:
                </label>
                <input type="text" name="pictureUrl" id="pictureUrl" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-opacity-50 focus:shadow-xl focus:border-ruby-500 border-opacity-50" placeholder="Enter picture URL" required/>
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description:</label>
                <textarea name="description" id="description" rows="4" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 border-opacity-50 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter description" required></textarea>
            </div>

            {error && <p className="text-red-500 mt-4">{error}</p>}
            <div className="w-fit mx-auto mt-8">
            <button type="submit" className="border-2 border-ruby-500 text-ruby-500 font-bold px-4 py-2 rounded-md hover:bg-ruby-500 hover:text-white transition duration-200">Add Now</button>
            </div>
        </form>
    </div>
  );
};

export default AddToy;
