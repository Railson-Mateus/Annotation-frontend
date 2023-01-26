import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  const auth = useAuth();

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth.email ? <Outlet /> : <Navigate to="/login" />;
};
