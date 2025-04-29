import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = ''; // Replace with actual userId from auth or props
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:3000/order/orders', {
          params: { userId }, // use params for GET request
        });
        setOrders(res.data.data);
      } catch (err) {
        console.error('Error fetching orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-lg font-semibold">Loading orders...</div>;
  }

  return (
    <div className="min-h-screen bg-[#1C1814] p-6 text-white relative">
      {/* Back Button */}
      <span className="absolute top-5 right-5 cursor-pointer">
        <svg onClick={() => navigate('/')} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" fill="#C99E71" />
          <path d="M35 25H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 32L15 25L22 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <h1 className="text-3xl font-bold text-center mb-10 mt-8">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-400">No orders found.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-[#22201e] flex flex-col justify-between p-6 rounded-2xl shadow-lg w-72 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <h2 className="text-xl font-bold mb-2">{order.coffee?.name || 'Unknown Coffee'}</h2>
                <p className="text-[#C99E71] text-lg font-semibold mb-1">Price: ${order.coffee?.price}</p>
                <p className="text-sm text-gray-400">Shop: {order.coffeeShop?.name || 'Unknown Shop'}</p>
              </div>

              <div className="mt-6 flex flex-col items-center">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    order.status === 'Delivered'
                      ? 'bg-[#C99E71] text-black'
                      : 'bg-[#C99E71] text-black'
                  }`}
                >
                  {order.status}
                </span>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
