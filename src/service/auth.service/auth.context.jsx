import {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userToken = JSON.parse(localStorage.getItem("token"));


  const [username, setUsername] = useState(userData ? userData.username : "");
  const [roles, setRoles] = useState(userData ? userData.roles : "");
  const [token, setToken] = useState(userToken ? userToken : "");


  return (
    <AuthContext.Provider
      value={{ username, setUsername, roles, setRoles , token, setToken , userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
