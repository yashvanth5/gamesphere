import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";

import { Navigate, useLocation } from "react-router";

export const RequiresAuth = ({ children }) => {
  const { userToken } = useContext(AuthContext);
  let location = useLocation();
  const token = userToken || localStorage.getItem("token");
  return (
    <>
      {token ? (
        children
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </>
  );
};
