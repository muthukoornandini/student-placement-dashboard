import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [student, setStudent] = useLocalStorage(
    "placementStudent",
    null
  );

  useEffect(() => {
    if (!student) {
      localStorage.removeItem("placementStudent");
    }
  }, [student]);

  const login = (studentData) => {
    setStudent(studentData);
  };

  const logout = () => {
    setStudent(null);
  };

  return (
    <AuthContext.Provider
      value={{
        student,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;