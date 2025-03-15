import axios from "axios";
import React, { FormEvent, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiUrls from "../Api/ApiUrls";
import { Alert } from "./ui/alert";

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
      localStorage.removeItem("userName");
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
        const userName = res.data.user_name;

        const expirationTime = Date.now() + 10 * 1000; // 1 minute from now

        // Debugging logs
        console.log("Current Time:", Date.now());
        console.log("Expiration Time:", expirationTime);
        console.log("Time Difference:", expirationTime - Date.now()); // Should be around 60000 ms (1 minute)

        localStorage.setItem("userToken", JSON.stringify(token));
        localStorage.setItem("userId", JSON.stringify(userId));
        localStorage.setItem("userName", JSON.stringify(userName));
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
    <div className="flex justify-center items-center">
      <div className="mt-7 max-w-max bg-white border border-gray-200 rounded-xl shadow-2xs">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account yet?{" "}
              <NavLink to="/signup" className="text-blue-600 font-medium hover:underline">
                Sign up here
              </NavLink>
            </p>
          </div>

          <div className="mt-5">
            {alertMessage && (
              <Alert className={`mb-4 ${alertType === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {alertMessage}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="py-2.5 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="py-2.5 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 flex justify-center items-center"
                  disabled={isLoading} // Disable button when loading
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> // Loader animation
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;