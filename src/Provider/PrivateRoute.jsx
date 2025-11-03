import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();

  if (user && user?.email) {
    return children;
  }
  // console.log(location);
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
