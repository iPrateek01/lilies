// import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase'; // Import your Firebase auth instance
import { Navigate, Outlet } from 'react-router-dom';
import AnimateRoutes from './AnimateRoutes';

const ProtectedRoute = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div> <AnimateRoutes /> </div>;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
