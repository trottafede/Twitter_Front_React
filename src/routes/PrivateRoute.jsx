import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute() {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
