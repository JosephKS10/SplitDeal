import axios from "axios";
import React, { FormEvent, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiUrls from "../Api/ApiUrls";
import { motion } from "framer-motion";
import { AlertCircle, Loader2 } from "lucide-react";

interface LoginData {
  email: string;
  password: string;
}

const LogIn = () => {
  const [formData, setFormData] = useState<LoginData>({ email: "", password: "" });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error">("success");
  const [isLoading, setIsLoading] = useState<boolean>(false); // New state for loader
  const navigate = useNavigate();

  // Function to check token expiration
  const checkTokenExpiration = () => {
    const expiration = localStorage.getItem("tokenExpiration");
    if (expiration && Date.now() > parseInt(expiration)) {
      console.log("Token expired, redirecting to login...");
      localStorage.removeItem("userToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("tokenExpiration");
      navigate("/signup/login"); // Redirect user to login page
    }
  };

  useEffect(() => {
    // Check token expiration every minute
    const interval = setInterval(checkTokenExpiration, 60000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    axios
      .post(ApiUrls.login, {
        user_email: formData.email,
        user_password: formData.password,
      })
      .then((res) => {
        setAlertMessage(res.data.msg);
        setAlertType("success");

        const token = res.data.token;
        const userId = res.data.user_id;
        const expirationTime = Date.now() + 10 * 1000; // 1 minute from now

        // Debugging logs
        console.log("Current Time:", Date.now());
        console.log("Expiration Time:", expirationTime);
        console.log("Time Difference:", expirationTime - Date.now()); // Should be around 60000 ms (1 minute)

        localStorage.setItem("userToken", JSON.stringify(token));
        localStorage.setItem("userId", JSON.stringify(userId));
        localStorage.setItem("tokenExpiration", expirationTime.toString());

        // Navigate after 2 seconds
        setTimeout(() => navigate("/"), 1);
      })
      .catch((err) => {
        setAlertMessage(err.response?.data?.msg || "Login failed!");
        setAlertType("error");
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false after API call completes
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mt-7 w-full max-w-lg bg-white border border-gray-200 rounded-xl shadow-lg">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Login</h1>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account yet?{" "}
              <NavLink
                to="/signup"
                className="text-orange-600 hover:underline font-medium transition-all"
              >
                Sign up here
              </NavLink>
            </p>
          </div>

          {/* Alert Messages */}
          <div className="mt-5">
            {alertMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`mb-4 flex items-center gap-2 p-3 rounded-lg border ${alertType === "success" ? "bg-green-100 text-green-700 border-green-300" : "bg-red-100 text-red-700 border-red-300"}`}
              >
                {alertType === "error" && <AlertCircle size={18} className="text-red-600" />}
                {alertMessage}
              </motion.div>
            )}
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="py-2.5 px-4 w-full border-gray-300 rounded-lg border-2 sm:text-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-200"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="py-2.5 px-4 w-full border-gray-300 rounded-lg border-2 sm:text-sm focus:border-orange-500 focus:ring-orange-500 transition-all duration-200"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 px-4 text-sm font-medium rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-all duration-200 flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                "Sign in"
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;