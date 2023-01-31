import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Navigate, Outlet, Route } from "react-router-dom";

export const ProtectedLayout = () => {
  const auth = useAuth();
  //const auth = true;

  return auth ? <Outlet /> : <Navigate to="/login" />;
};
