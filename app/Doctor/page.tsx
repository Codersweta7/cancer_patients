'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const DoctorDashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  // Dummy data for now
  const appointments = [
    { time: '10:00 AM', patient: 'John Doe' },
    { time: '11:30 AM', patient: 'Jane Smith' },
    { time: '2:00 PM', patient: 'Robert Johnson' },
  ];

  const patients = ['John Doe', 'Jane Smith', 'Robert Johnson', 'Emily Clark'];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Doctor Dashboard</h1>
      <p className="mb-6">Welcome, Dr. {user?.name}!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3">Upcoming Appointments</h2>
          <ul className="space-y-2">
            {appointments.map((appt, index) => (
              <li key={index} className="border p-2 rounded-md hover:bg-gray-100">
                ⏰ {appt.time} - 👤 {appt.patient}
              </li>
            ))}
          </ul>
        </div>

        {/* Patient List */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3">Patient List</h2>
          <ul className="space-y-2">
            {patients.map((patient, index) => (
              <li key={index} className="border p-2 rounded-md hover:bg-gray-100">
                👤 {patient}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;

