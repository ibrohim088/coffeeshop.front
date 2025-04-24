import React, { useState } from "react";
import api, { setAuthToken } from "../shared/axios-connection.js";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Data:", formData);
      const res = await api.post("/users/login", formData);
      localStorage.setItem("avto-user", JSON.stringify(res.data?.data));
      localStorage.setItem("avto-token", JSON.stringify(res.data?.token));
      setAuthToken(res.data?.token);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      {/* Back button */}
      <span className="absolute top-5 right-5">
        <svg onClick={() => navigate('/')} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" fill="#C99E71" />
          <path d="M35 25H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 32L15 25L22 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <div className="flex items-center justify-center min-h-screen bg-[#1C1814] px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-[#1e1b19] rounded-2xl shadow-lg p-8 w-full max-w-md space-y-4"
        >
          <h1 className="text-[24px] text-center righteous-regular text-[#C99E71]">Login</h1>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-[#C99E71] font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-[#1C1814] border border-[#1C1814] mt-2 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C99E71]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-[#C99E71] font-medium pt-5">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-[#1C1814] border border-[#1C1814] mt-2 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C99E71]"
              required
            />
          </div>

          {/* Register link */}
          <Link
            className="hover:underline righteous-regular underline-offset-3 text-[12px] text-[#C99E71]"
            to="/register"
          >
            I am not registered
          </Link>

          {/* Login button */}
          <button
            type="submit"
            className="w-full mt-5 bg-[#C99E71] righteous-regular py-2 rounded-md hover:bg-[#b98d60] transition"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
