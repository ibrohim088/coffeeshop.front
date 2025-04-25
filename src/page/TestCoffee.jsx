import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TestCoffee = () => {
  const [coffee, setCoffee] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImages] = useState([]);
  const [coffeeShopId, setCoffeeShopId] = useState('');
  const navigate = useNavigate();

  // Fetch coffee data
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3000/coffee', {
      method: 'GET',
      cache: 'no-store',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        let coffeeArray = [];
        if (Array.isArray(data)) {
          coffeeArray = data;
        } else if (Array.isArray(data.coffee)) {
          coffeeArray = data.coffee;
        } else if (Array.isArray(data.data)) {
          coffeeArray = data.data;
        } else {
          throw new Error("Invalid coffee data format");
        }

        setCoffee(coffeeArray);
      })
      .catch((err) => {
        console.error('Error fetching coffees:', err);
        setError('Failed to load coffee data. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setName('');
    setPrice('');
    setImages([]);
    setCoffeeShopId('');
    setError(null);
  };

  const validateForm = () => {
    if (!name.trim()) {
      setError('Coffee name is required');
      return false;
    }

    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber) || priceNumber <= 0) {
      setError('Price must be a valid positive number');
      return false;
    }

    if (image.length === 0) {
      setError('At least one image file is required');
      return false;
    }

    if (!coffeeShopId.trim() || !/^[0-9a-fA-F]{24}$/.test(coffeeShopId)) {
      setError('Valid Coffee Shop ID is required (24 characters)');
      return false;
    }

    return true;
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImages(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("price", parseFloat(price));
    formData.append("coffeeShopId", coffeeShopId);
    formData.append("image", image);

    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/coffee", {
        method: "POST",
        body: formData,
      });

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("text/html")) {
        throw new Error("Server returned an error page instead of JSON");
      }

      const data = await res.json();

      if (res.ok) {
        const newCoffee = data.data || data;
        setCoffee((prev) => [...prev, newCoffee]);
        closeModal();
      } else {
        setError(data.message || "Failed to add coffee");
      }
    } catch (err) {
      console.error("Error adding coffee:", err);
      setError("An error occurred while adding coffee. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this coffee?");
    if (!confirmed) return;

    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:3000/coffee/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to delete coffee");
      }

      setCoffee((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting coffee:", err);
      setError("An error occurred while deleting coffee. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1814] p-6 text-white">
      <span className='absolute top-5 right-5'>
        <svg onClick={() => navigate('/')} width="50" height="50" viewBox="0 0 50 50" fill="none">
          <circle cx="25" cy="25" r="20" fill="#C99E71" />
          <path d="M35 25H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 32L15 25L22 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <h1 className="text-3xl font-bold mb-6 text-center text-[#C99E71]">☕ Coffee List</h1>

      {isLoading && !isModalOpen && (
        <div className="text-center py-4">Loading coffees...</div>
      )}

      {error && !isModalOpen && (
        <div className="text-center py-4 text-red-400">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(coffee) && coffee.map((coffeeItem) => (
          <div key={coffeeItem._id} className="bg-[#2b251e] shadow-md rounded-2xl p-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-[#C99E71]">{coffeeItem.name}</h2>
                <p className="text-gray-300">Price: ${parseFloat(coffeeItem.price).toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleDelete(coffeeItem._id)}
                className="text-red-400 hover:text-red-600"
                title="Delete Coffee"
              >
                🗑
              </button>
            </div>


            {coffeeItem.image && (
              <img
                src={
                  typeof coffeeItem.image === 'string'
                    ? `http://localhost:3000/${coffeeItem.image}`
                    : URL.createObjectURL(coffeeItem.image)
                }
                alt={coffeeItem.name}
                className="mt-2 w-full h-40 object-cover rounded"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/600x400?text=No+Image';
                }}
              />
            )}

          </div>
        ))}
      </div>

      <button
        onClick={openModal}
        className="w-[150px] h-[50px] ml-173 bg-[#C99E71] text-white text-[16px] rounded-lg shadow-md hover:bg-[#b4895d] transition"
        disabled={isLoading}
      >
        Add Coffee
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#2b251e] rounded-xl p-6 w-full max-w-md relative">
            <h2 className="text-xl font-bold mb-4 text-[#C99E71]">Add New Coffee</h2>

            {error && (
              <div className="mb-4 p-2 bg-red-900 bg-opacity-20 border border-red-400 rounded text-red-400">
                {error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Coffee Name *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Espresso"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-[#C99E71] rounded bg-[#1C1814] text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-1">Price *</label>
                <input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="e.g. 4.99"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full p-2 border border-[#C99E71] rounded bg-[#1C1814] text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-1">Images *</label>
                <input
                  id="image"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-2 border border-[#C99E71] rounded bg-[#1C1814] text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="coffeeShopId" className="block text-sm font-medium text-gray-300 mb-1">Coffee Shop ID *</label>
                <input
                  id="coffeeShopId"
                  type="text"
                  placeholder="e.g. 507f1f77bcf86cd799439011"
                  value={coffeeShopId}
                  onChange={(e) => setCoffeeShopId(e.target.value)}
                  className="w-full p-2 border border-[#C99E71] rounded bg-[#1C1814] text-white"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#C99E71] text-white rounded hover:bg-[#b4895d] transition"
                  disabled={isLoading}
                >
                  {isLoading ? 'Adding...' : 'Add Coffee'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestCoffee;
