import React from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import LoginPage from '../auth/LoginPage';
import AdminLoginPage from '../auth/AdminLoginPage';
import OnboardingPage from '../onboarding/OnboardingPage';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isAdminAuthenticated, currentUser } = useApp();
  const location = useLocation();

  // Check if this is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Admin routes require admin authentication
  if (isAdminRoute && !isAdminAuthenticated) {
    return <AdminLoginPage />;
  }

  // Regular routes require user authentication
  if (!isAdminRoute && !isAuthenticated) {
    return <LoginPage />;
  }

  // Check if user needs to complete onboarding
  if (!isAdminRoute && currentUser && currentUser.profileStatus === 'loading') {
    return <OnboardingPage />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;