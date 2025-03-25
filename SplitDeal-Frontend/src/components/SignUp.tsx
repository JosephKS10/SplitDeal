import axios from 'axios';
import React, { useState, FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ApiUrls from '../Api/ApiUrls';
import { motion } from "framer-motion";
import { AlertCircle, Loader2 } from "lucide-react";

// Define types for the form inputs and error message
interface SignUpData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpData>({ email: '', password: '', name: '', phone: '' });
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false); // New state for loader
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsLoading(true); // Set loading state to true

    axios
      .post(ApiUrls.register, {
        user_email: formData.email,
        user_password: formData.password,
        name: formData.name,
        phone_number: formData.phone,
      })
      .then((res) => {
        console.log(res.data.msg);
        
        setSuccessMessage(res.data.msg);
        
        setTimeout(() => navigate('/signup/login'), 1); // Redirect after 2 seconds
      })
      .catch((err) => {
        console.log(err);
        setError(err.response?.data?.msg || 'Registration failed!');
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false after API call completes
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 ">
      <div className="mt-7 w-full max-w-lg bg-white border border-gray-200 rounded-xl shadow-lg">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Sign up</h1>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <NavLink
                to="/signup/login"
                className="text-orange-600 hover:underline font-medium transition-all"
              >
                Log in here
              </NavLink>
            </p>
          </div>

          {/* Alert Messages */}
          <div className="mt-5">
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mb-4 flex items-center gap-2 bg-green-100 text-green-700 border border-green-300 p-3 rounded-lg"
              >
                ✅ {successMessage}
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mb-4 flex items-center gap-2 bg-red-100 text-red-700 border border-red-300 p-3 rounded-lg"
              >
                <AlertCircle size={18} className="text-red-600" /> {error}
              </motion.div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input Fields */}
            {[
              { id: "name", type: "text", label: "Name", value: formData.name },
              { id: "phone", type: "tel", label: "Phone number", value: formData.phone },
              { id: "email", type: "email", label: "Email address", value: formData.email },
              { id: "password", type: "password", label: "Password", value: formData.password },
            ].map(({ id, type, label, value }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  className="py-2.5 border-1 px-4 w-full border-gray-300 rounded-lg  sm:text-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-200"
                  value={value}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 px-4 flex justify-center items-center gap-2 text-white bg-orange-600 hover:bg-orange-700 transition-all duration-200 font-medium rounded-lg shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Sign up"}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;