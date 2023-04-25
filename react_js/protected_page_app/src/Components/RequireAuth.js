import React from "react";
import { useAuth } from "./Authentication";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();
  console.log(location);

  if (!auth.user) {
    return (
      <Navigate to="/login" state={{ path: location.pathname }}></Navigate>
    );
  }
  return children;
}

export default RequireAuth;
