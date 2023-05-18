import { useState } from 'react';
import Select from 'react-select';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AddToy = () => {
    AOS.init();

    const options = [
        { value: 'marvel', label: 'Marvel' },
        { value: 'dc', label: 'DC' },
        { value: 'star-wars', label: 'Star-Wars' },
        { value: 'transformer', label: 'Transformer' },
      ];
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSubmit = (e) => {

    e.preventDefault();

    const form = e.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    // Use the form field values as needed (e.g., submit to backend, update state, etc.)
    console.log('Form Values:', {
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description
    });

    // Reset the form fields
    form.reset();
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
                    <input type="text" name="sellerName" id="sellerName" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 border-opacity-50 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter seller name" required/>
                </div>

                <div>
                    <label htmlFor="sellerEmail" className="block text-sm font-medium text-gray-700 mb-2">Seller Email:</label>
                    <input type="email" name="sellerEmail" id="sellerEmail" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 border-opacity-50 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter seller email" required/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                    <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700 mb-2">Sub-Category:</label>
                    {/* <input type="text" name="subCategory" id="subCategory" className="w-full border-2 border-gray-300 rounded px-3 py-2 outline-none focus:border-ruby-500 border-opacity-50 focus:border-opacity-50 focus:shadow-xl" placeholder="Enter sub-category" required/> */}
                    <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options}/>
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

            <div className="w-fit mx-auto mt-8">
            <button type="submit" className="border-2 border-ruby-500 text-ruby-500 font-bold px-4 py-2 rounded-md hover:bg-ruby-500 hover:text-white transition duration-200">Add Now</button>
            </div>
        </form>
    </div>
  );
};

export default AddToy;
