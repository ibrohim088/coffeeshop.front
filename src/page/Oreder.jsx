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
          data: { userId },
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
    <div className="">
      <span className='absolute top-5 right-5'>
        <svg onClick={() => navigate('/')} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" fill="#C99E71" />
          <path d="M35 25H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 32L15 25L22 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <h1 className="text-3xl font-bold mt-10 text-center">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-4 w-[300px]">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-200 rounded-2xl shadow-md p-4 flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{order.coffee?.name}</h2>
                <p className="text-[#C99E71]">Price: ${order.coffee?.price}</p>
                <p className="text-sm ">Shop: {order.coffeeShop?.name}</p>
              </div>

              <div className="text-right">
                <span
                  className={`inline-block w-[70px] text-center rounded-full  ${order.status === 'Delivered'
                      ? 'bg-[#C99E71] '
                      : order.status === 'Processing'
                        ? 'bg-[#C99E71]'
                        : 'bg-[#C99E71]'
                    }`}
                >
                  {order.status}
                </span>
                <p className="text-xs pr-1.5 pt-3">
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
