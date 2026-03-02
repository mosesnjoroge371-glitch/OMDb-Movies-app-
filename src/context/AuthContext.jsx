import { createContext, useContext, useState, useEffect } from "react";
import "../login.css";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const AuthPage = () => {
    return (
      <div className="login-container">
        {/* Your login form and other content go here */}
        <h1>Login Page</h1>
        <form>{/* Form fields */}</form>
      </div>
    );
  };

  const [user, setUser] = useState(() => {
    return localStorage.getItem("user") || null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", user);
    else localStorage.removeItem("user");
  }, [user]);

  const login = (email) => setUser(email);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
