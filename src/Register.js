import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to your Node.js backend to handle registration.
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Create New Account</h2>
        <form onSubmit={handleSubmit}>
          {/* Form input fields for name, email, and password */}
        </form>
      </div>
    </div>
  );
};

export default Register;
