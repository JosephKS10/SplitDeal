import axios from 'axios';
import React, { useState, FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ApiUrls from '../Api/ApiUrls';
import { Alert } from './ui/alert';

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
    <div className="flex justify-center items-center pt-20">
      <div className="mt-7 max-w-3xl bg-white border border-gray-200 rounded-xl shadow-2xs">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?
              <NavLink
                to="login"
                className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
              >
                Log in here
              </NavLink>
            </p>
          </div>

          <div className="mt-5">
            {/* Alert Messages */}
            {successMessage && (
              <Alert className="mb-4 bg-green-100 text-green-700 border border-green-300 p-3 rounded-lg">
                {successMessage}
              </Alert>
            )}
            {error && (
              <Alert className="mb-4 bg-red-100 text-red-700 border border-red-300 p-3 rounded-lg">
                {error}
              </Alert>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 border-2 disabled:pointer-events-none"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 border-2 disabled:pointer-events-none"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 border-2 disabled:pointer-events-none"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 border-2 disabled:pointer-events-none"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 border-2 disabled:pointer-events-none"
                  disabled={isLoading} // Disable button when loading
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> // Loader animation
                  ) : (
                    'Sign up'
                  )}
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;