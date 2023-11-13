import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserData = JSON.parse(localStorage.getItem("user") || "{}");
    const storedUsername = storedUserData.username;
    const storedRoles = storedUserData.roles;

    if (token && storedUsername) {
      setIsLogged(true);
      setUsername(storedUsername);
      setRoles(storedRoles);
    } else {
      setIsLogged(false);
      setUsername("");
      setRoles(null);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLogged, setIsLogged, username, setUsername, roles, setRoles }}
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
