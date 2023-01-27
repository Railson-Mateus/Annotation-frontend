import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  const auth = useAuth();

  return auth.email ? <Outlet /> : <Navigate to="/login" />;
};
