import axios from "axios";
import React, { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiUrls from "../Api/ApiUrls";
import { Alert } from "./ui/alert";

interface LoginData {
  email: string;
  password: string;
}

const LogIn = () => {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error">("success");
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

    axios
      .post(ApiUrls.login, {
        user_email: formData.email,
        user_password: formData.password,
      })
      .then((res) => {
        setAlertMessage(res.data.msg);
        setAlertType("success");

        // Navigate after 2 seconds
        setTimeout(() => {
          navigate("/dashboard"); // Change route to your intended page
        }, 2000);
      })
      .catch((err) => {
        setAlertMessage(err.response?.data?.msg || "Login failed!");
        setAlertType("error");
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="mt-7 max-w-max bg-white border border-gray-200 rounded-xl shadow-2xs">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account yet?
              <NavLink
                to="/signup"
                className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
              >
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

                <div>
                  <label htmlFor="password" className="block text-sm mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 border-2 disabled:pointer-events-none"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 border-2 disabled:pointer-events-none"
                >
                  Sign in
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
