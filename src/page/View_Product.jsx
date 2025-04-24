import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CoffeeShopPage = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoffeeShops = async () => {
      try {
        const response = await axios.get('http://localhost:3000/coffee-shop');
        console.log("API response:", response.data); // Log API response

        if (response.data && !Array.isArray(response.data)) {
          console.log("Wrapping data in array"); // Debug log
          setCoffeeShops([response.data]); // Wrap it in an array
        } else if (Array.isArray(response.data)) {
          console.log("Data is already an array"); // Debug log
          setCoffeeShops(response.data); // Handle array data directly
        } else {
          setError('Data format is incorrect');
        }
      } catch (error) {
        setError('Failed to load coffee shops');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCoffeeShops();
  }, []);

  if (loading) return <div className="p-4 text-white">Loading coffee shops...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-[#1C1814] p-6">
      <span className='absolute top-5 right-5'>
        <svg onClick={() => navigate('/')} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" fill="#C99E71" />
          <path d="M35 25H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 32L15 25L22 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffeeShops.map((shop) => (
          <div key={shop._id || shop.name || Math.random()} className="rounded-2xl shadow-md p-4 bg-[#22201e]">
            <img
              src={shop.logo || '/placeholder-logo.png'}
              alt={`${shop.name} logo`}
              className="w-full h-40 object-contain mb-4  rounded"
            />
            <h2 className="text-xl font-semibold">{shop.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeShopPage;
