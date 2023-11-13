import { Navigate } from "react-router-dom";
import { useAuth } from "./auth.context";

export const ProtectRoute = ({children,roles,}) => {
  const authContext = useAuth();

  // ตรวจสอบว่า authContext มีค่า (เพื่อป้องกันการใช้งานนอก AuthProvider)
  if (!authContext) {
    throw new Error("ProtectRoute must be used within an AuthProvider");
  }

  const { isLogged, roles: currentUserRoles } = authContext;
  const token = localStorage.getItem("token");

  if (!isLogged && !token) {
    return <Navigate to="/login" />;
  }


  console.log(currentUserRoles);

  if (roles && (!currentUserRoles || !currentUserRoles.includes('ADMIN'))) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
