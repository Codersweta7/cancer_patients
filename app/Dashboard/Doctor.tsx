import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/store';

const DoctorDashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Doctor Dashboard</h1>
      <p>Welcome, Dr. {user?.name}!</p>

      {/* Add: upcoming appointments, patient list, etc */}
    </div>
  );
};

export default DoctorDashboard;
