import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const { student } = useAuth();

  if (!student) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;