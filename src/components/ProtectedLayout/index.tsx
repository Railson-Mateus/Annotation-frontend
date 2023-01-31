import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Navigate, Outlet, Route } from "react-router-dom";

export const ProtectedLayout = () => {
  const loggedInUser = sessionStorage.getItem("u");
  const auth = JSON.parse(loggedInUser);

  return auth?.token ? <Outlet /> : <Navigate to="/login" />;
};
