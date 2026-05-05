import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === form.email &&
        storedUser.password === form.password
      ) {
        localStorage.setItem("isAuth", "true");

        // ✅ DO NOT overwrite user incorrectly
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } else {
      // SIGNUP
      localStorage.setItem("user", JSON.stringify(form));
      alert("Signup successful! Now login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-6 border w-80 rounded">

        <h2 className="text-xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        {!isLogin && (
          <input
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 mb-3 border"
            required
          />
        )}

        <input
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border"
          required
        />

        <button type="submit" className="w-full bg-blue-500 text-white py-2">
          {isLogin ? "Login" : "Signup"}
        </button>

        <p className="text-sm mt-4 text-center">
          {isLogin ? "New user?" : "Already have account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 cursor-pointer ml-1"
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>

      </form>
    </div>
  );
}

export default Auth;