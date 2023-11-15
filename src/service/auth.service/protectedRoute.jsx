import { Navigate } from "react-router-dom";
import { useAuth } from "./auth.context";

const ProtectRoute = ({ children, rolesType }) => {
  const { roles, username } = useAuth();
  const token = localStorage.getItem("token");

  if (!token && !username ) {
    return <Navigate to="/login" />;
  }

  if (rolesType && JSON.stringify(roles) !== JSON.stringify(rolesType)) {
    return <Navigate to="/" />;
  }
  
  return <>{children}</>;
  
};

export default ProtectRoute;