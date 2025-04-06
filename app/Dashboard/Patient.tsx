import React from 'react';
import { useSelector } from 'react-redux';
// import { RootState } from '../store/store';
import { RootState } from '../../lib/store';

const PatientDashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Patient Dashboard</h1>
      <p>Hello, {user?.name}!</p>

      {/* Add: appointments, feedback form, chatbot button */}
    </div>
  );
};

export default PatientDashboard;


