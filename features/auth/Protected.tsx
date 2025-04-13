

import React, { JSX } from 'react';  // yha pe react import kiya gya h
import { Navigate } from 'react-router-dom';  // website mein move karte h n routes pe uske liye h
import { useSelector } from 'react-redux';    // yeh kaam krega redux se data uthane ka
import { RootState } from '../../lib/store';  //yeh typescript ke liye h , kyuki humein redux store ka sahi type mile


//ab yha components ke props (properties) ko define kia gya h 

interface Props {
  children:JSX.Element;  //children(jin components ko protect krna h)
  allowedRoles?: string[];  // yeh role based access ke liye h ki patient h ya doctor.
}

//yha pe we are fetching user from Redux auth slice .
const ProtectedRoute: React.FC<Props> = ({ children, allowedRoles }) => {
  const { user } = useSelector((state: RootState) => state.auth);


  //if user is not found then we are directing the person to login page
  if (!user) return <Navigate to="/login" />;

  //if user.role is not allowed then redirecting to home page.
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }
//if user is found and role is present so user enters and content is visble to user
  return children;
};

export default ProtectedRoute;
//exporting component for use
