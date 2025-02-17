import { createContext, useContext, useState, useEffect } from 'react';

// Create Authentication Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  // Register a new user (either patient or doctor)
  const register = (newUser) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if user already exists
    if (users.some(u => u.email === newUser.email)) {
      return { success: false, message: "User already exists!" };
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
  };

  // Login Function
  const login = (email, password) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser)); // Persist session
      return { success: true, role: foundUser.role };
    }

    return { success: false, message: "Invalid credentials" };
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove from local storage
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to Use Auth
export const useAuth = () => useContext(AuthContext);
