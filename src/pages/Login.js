import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoginRolePopup from "../components/LoginRolePopup";
import FullPageLoader from "../components/FullPageLoader";
import { loginPatient } from "../services/patientAuthService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [rolePopup, setRolePopup] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [loading, setLoading] = useState(true);
  const [apiLoading, setApiLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateLoginForm = () => {
    if (!form.email || !form.password) {
      return "Please fill all the required fields";
    }
    if (!emailRegex.test(form.email)) {
      return "Please enter a valid email address";
    }
    if (form.password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return null;
  };

  const handleRoleSelect = async (role) => {
    setSelectedRole(role);
    setRolePopup(false);
    
    // Validate before login
    const validationError = validateLoginForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setError("");
    setApiLoading(true);
    
    try {
      const loginData = { 
        email: form.email, 
        password: form.password,
        role: role
      };
      
      console.log('Attempting login with:', loginData); // Debug log
      
      const res = await loginPatient(loginData);
      
      console.log('Login response received:', res); // Debug log
      
      if (res.token || res.success) {
        // Login success
        setError("");
        localStorage.setItem('authToken', res.token || res.data?.token);
        localStorage.setItem('userRole', role);
        navigate("/dashboard");
      } else {
        setError(res.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "An error occurred during login. Please try again.");
    } finally {
      setApiLoading(false);
    }
  };

  const handlePreSubmit = (e) => {
    e.preventDefault();
    
    const validationError = validateLoginForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setError("");
    setRolePopup(true);
  };

  if (loading) return <FullPageLoader />;

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#ede7f6] to-[#fff3e0] px-4 py-12">
      <LoginRolePopup 
        open={rolePopup} 
        onClose={() => setRolePopup(false)} 
        onSelect={handleRoleSelect} 
      />
      
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#6548ee] mb-4 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome Back!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-[#6548ee] mb-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Sign in to book appointments with top dental clinics in India.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#ff9800] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-[#6548ee] hover:text-white transition"
          onClick={() => document.getElementById('login-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Login Now
        </motion.button>
      </div>
      
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          id="login-form"
          onSubmit={handlePreSubmit}
          className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border-t-8 border-[#6548ee] flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-[#6548ee] mb-2 text-center">Login</h2>
          
          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded text-center text-sm">
              {error}
            </div>
          )}
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]"
            required
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-[#6548ee] rounded focus:outline-none focus:border-[#ff9800]"
            required
          />
          
          <button
            type="submit"
            disabled={apiLoading}
            className={`w-full bg-gradient-to-r from-[#6548ee] to-[#ff9800] text-white py-2 rounded font-semibold shadow hover:from-[#ff9800] hover:to-[#6548ee] transition ${
              apiLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {apiLoading ? "Logging in..." : "Login"}
          </button>
          
          <div className="flex flex-col items-center gap-2 mt-2">
            <button
              type="button"
              className="text-[#ff9800] font-semibold hover:underline text-sm"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </button>
            
            <div className="text-center">
              <span className="text-gray-600">Don't have an account?</span>
              <button
                type="button"
                className="ml-2 text-[#6548ee] font-semibold hover:underline"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;