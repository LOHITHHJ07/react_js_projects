import React, {
  useContext,
  useState,
  createContext,
  useMemo,
  useCallback,
} from "react";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = useCallback((value) => {
    setUser(value);
  }, []);
  const logout = useCallback(() => {
    setUser(null);
  }, []);
  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
