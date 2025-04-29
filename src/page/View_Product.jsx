// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CoffeeShopPage = () => {
//   const [coffeeShops, setCoffeeShops] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCoffeeShops = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/coffee-shop');
//         console.log("API response:", response.data); // Log API response

//         if (response.data && !Array.isArray(response.data)) {
//           console.log("Wrapping data in array"); // Debug log
//           setCoffeeShops([response.data]); // Wrap it in an array
//         } else if (Array.isArray(response.data)) {
//           console.log("Data is already an array"); // Debug log
//           setCoffeeShops(response.data); // Handle array data directly
//         } else {
//           setError('Data format is incorrect');
//         }
//       } catch (error) {
//         setError('Failed to load coffee shops');
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCoffeeShops();
//   }, []);

//   if (loading) return <div className="p-4 text-white">Loading coffee shops...</div>;
//   if (error) return <div className="p-4 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-[#1C1814] p-6">
//       <span className='absolute top-5 right-5'>
//         <svg onClick={() => navigate('/')} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <circle cx="25" cy="25" r="20" fill="#C99E71" />
//           <path d="M35 25H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           <path d="M22 32L15 25L22 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </span>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {coffeeShops.map((shop) => (
//           <div key={shop._id || shop.name || Math.random()} className="rounded-2xl shadow-md p-4 bg-[#22201e]">
//             <img
//               src={shop.logo || '/placeholder-logo.png'}
//               alt={`${shop.name} logo`}
//               className="w-full h-40 object-contain mb-4  rounded"
//             />
//             <h2 className="text-xl font-semibold">{shop.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CoffeeShopPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CoffeeShopPage = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [logo, setLogo] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCoffeeShops();
  }, []);

  const fetchCoffeeShops = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("http://localhost:3000/coffee-shop");
      setCoffeeShops(res.data.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load coffee shops.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !logo) {
      setError("Name and Logo are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("logo", logo);

    try {
      await axios.post("http://localhost:3000/coffee-shop", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setName("");
      setLogo(null);
      fetchCoffeeShops();
    } catch (err) {
      console.error(err);
      setError("Failed to create coffee shop.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this coffee shop?")) return;

    try {
      await axios.delete(`http://localhost:3000/coffee-shop/${id}`);
      fetchCoffeeShops();
    } catch (err) {
      console.error(err);
      setError("Failed to delete coffee shop.");
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1814] p-6 text-white">
      {/* Go Back Button */}
      <span className="absolute top-5 right-5 cursor-pointer">
        <svg onClick={() => navigate('/')} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" fill="#C99E71" />
          <path d="M35 25H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 32L15 25L22 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      {/* Create Form */}
      <div className="bg-[#22201e] p-6 rounded-xl mb-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Create New Coffee Shop</h2>
        <form onSubmit={handleCreate} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Coffee Shop Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded bg-[#1C1814] text-white border border-gray-600"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
            className="p-2 rounded bg-[#1C1814] text-white border border-gray-600"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white p-2 rounded font-bold"
          >
            Create Coffee Shop
          </button>
        </form>
        {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
      </div>

      {/* Coffee Shops List */}
      <div className="flex flex-wrap gap-6 justify-center">
        {coffeeShops.map((shop) => (
          <div
            key={shop._id}
            className="bg-[#22201e] p-4 rounded-2xl shadow-md relative flex flex-col items-center w-72"
          >
            <button
              onClick={() => handleDelete(shop._id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-2xl"
            >
              &times;
            </button>
            <img
              src={shop.logo ? `http://localhost:3000/uploads/${shop.logo}` : "/placeholder-logo.png"}
              alt={shop.name || "Coffee Shop"}
              className="w-full h-40 object-contain mb-4 rounded"
            />
            <h2 className="text-xl font-semibold text-center">{shop.name || "Unnamed Shop"}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeShopPage;