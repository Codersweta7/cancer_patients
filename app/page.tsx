"use client";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import PatientDashboard from './Dashboard/Patient';
import DoctorDashboard from './Dashboard/Doctor';
import ProtectedRoute from '@/features/auth/Protected';
import Chat from './Dashboard/Chat';
import Map from './Map/Map';

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

    

