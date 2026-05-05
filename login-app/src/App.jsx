import React, { useState } from "react";

function App () {
 
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Login Data:", formData);

    alert("Login Successful ");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>)}

        <input type="email" name="email" placeholder="Enter email"  value={formData.email} onChange={handleChange}  className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange}className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Login</button>

   
        <p className="text-sm text-center mt-4">
          Don't have an account? <span className="text-blue-600 cursor-pointer">Sign up</span>
        </p>
      </form>

    </div>
  
  );
}

export default App;