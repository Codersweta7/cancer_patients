
'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store'; // ✅ Adjusted to use alias, cleaner import

const PatientDashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Patient Dashboard</h1>
      <p>Hello, {user?.name || 'Guest'}!</p>

      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-6">Menu</h2>
        <ul className="space-y-4">
          <li className="hover:text-blue-600 cursor-pointer">📅 Appointments</li>
          <li className="hover:text-blue-600 cursor-pointer">💬 Chatbot</li>
          <li className="hover:text-blue-600 cursor-pointer">📝 Feedback</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
       

        {/* You can conditionally show components here based on user clicks */}
        {/* For example: show appointments or chatbot or feedback form */}
      </main>
    </div>
  );
};

export default PatientDashboard;




