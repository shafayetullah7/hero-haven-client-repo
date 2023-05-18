
const AddToy = () => {
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
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add Toy</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="pictureUrl" className="block text-sm font-medium text-gray-700">Picture URL:</label>
          <input type="text" name="pictureUrl" id="pictureUrl" className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required/>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" name="name" id="name" className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required/>
        </div>

        <div className="mb-4">
          <label htmlFor="sellerName" className="block text-sm font-medium text-gray-700">Seller Name:</label>
          <input type="text" name="sellerName" id="sellerName" className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required/>
        </div>

        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block text-sm font-medium text-gray-700">Seller Email:</label>
          <input type="email" name="sellerEmail" id="sellerEmail" className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required/>
        </div>

        <div className="mb-4">
          <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700">Sub-Category:</label>
          <input type="text" name="subCategory" id="subCategory" className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required/>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
          <input type="number" name="price" id="price" className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required/>
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating:</label>
          <input type="number" name="rating" id="rating" className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required/>
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
          <input type="number" name="quantity" id="quantity" className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required/>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea name="description" id="description" rows="4" className="w-full border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" required></textarea>
        </div>

        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Add Toy</button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;







