'use client'

import React, { useState } from 'react';
import axios from 'axios';

type Role = 'patient' | 'doctor';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  role:Role;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterForm>({
    name: '',
    email: '',
    password: '',
    role: 'patient',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', formData);
      alert('Registered Successfully');
    } catch (err: any) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2" />
        <select name="role" onChange={handleChange} className="border p-2 r">
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
