"use client";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login/page';
import Register from './Register/page';
import PatientDashboard from './Patient/page';
import DoctorDashboard from './Doctor/page';
import ProtectedRoute from '@/features/auth/Protected';
import Chat from './Chat/page';
import Map from './Map/page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="p-6 text-center">Welcome to Cancer Care</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboards */}
        <Route
          path="/doctor"
          element={
            <ProtectedRoute allowedRoles={['doctor']}>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient"
          element={
            <ProtectedRoute allowedRoles={['patient']}>
              <PatientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
                <Chat />
            </ProtectedRoute>
         }
         />
        <Route
        path="/map"
        element={
          <ProtectedRoute>
            <Map/>
          </ProtectedRoute>
        }/>
      </Routes>

 


    </Router>
  )
}

export default App;

    

