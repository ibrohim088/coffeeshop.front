import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api, { setAuthToken } from '../shared/axios-connection.js';
import { useNavigate , Link } from 'react-router-dom';

const Register = () => {
   const { register, handleSubmit, formState: { errors }, reset } = useForm();
   const navigate = useNavigate();
   const [message, setMessage] = useState("");

   const onSubmit = async (data) => {
      try {
         const res = await api.post("/users/register", data);
         localStorage.setItem("coffee_shop-user", JSON.stringify(res.data?.data));
         localStorage.setItem("coffee_shop-token", JSON.stringify(res.data?.token));
         setAuthToken(res.data?.token);
         setMessage("Registration successful!");
         reset();
         setTimeout(() => navigate("/"), 1500);
      } catch (err) {
         setMessage(err?.response?.data?.message || "Registration failed. Please try again.");
      }
   };

   return (
      <>
         <span className='absolute top-5 right-5'>
            <svg onClick={() => navigate('/')} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="25" cy="25" r="20" fill="#C99E71" />
               <path d="M35 25H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M22 32L15 25L22 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </span>

         <div className="flex items-center justify-center min-h-screen bg-[#1C1814] px-4">
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="bg-[#1e1b19] rounded-2xl shadow-lg p-8 w-full max-w-md space-y-4"
            >
               <h1 className="text-2xl font-bold text-center text-[#C99E71]">Register</h1>

               {message && <div className="text-red-600 text-center">{message}</div>}

               <div>
                  <label htmlFor="name" className="block text-[#C99E71] mb-1 font-medium">Name</label>
                  <input
                     id="name"
                     type="text"
                     {...register("name", { required: "Name is required" })}
                     placeholder="Enter Name"
                     className="w-full bg-[#1C1814] border border-[#1C1814] mt-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C99E71]"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
               </div>

               <div>
                  <label htmlFor="email" className="block text-[#C99E71] mb-1 font-medium">Email</label>
                  <input
                     id="email"
                     type="email"
                     {...register("email", { required: "Email is required" })}
                     placeholder="Email Address"
                     className="w-full bg-[#1C1814] border border-[#1C1814] mt-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C99E71]"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
               </div>

               <div>
                  <label htmlFor="password" className="block text-[#C99E71] mb-1 font-medium">Password</label>
                  <input
                     id="password"
                     type="password"
                     {...register("password", { required: "Password is required" })}
                     placeholder="Password"
                     className="w-full bg-[#1C1814] border border-[#1C1814] mt-1 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C99E71]"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
               </div>{/* Register link */}
               <Link
                  className="hover:underline righteous-regular underline-offset-3 text-[12px] text-[#C99E71] mt-1"
                  to="/singup"
               >
                  Already have an account
               </Link>
               <button
                  type="submit"
                  className="w-full mt-3 bg-[#C99E71] text-white font-semibold py-2 rounded-md hover:bg-[#b98d60] transition"
               >
                  Register
               </button>
            </form>
         </div>
      </>
   );
};

export default Register;
