import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { student, logout } = useAuth();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/" ||
    location.pathname === "/register";

  if (isAuthPage) {
    return null;
  }

  const studentName = student?.name || "Student";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="professional-navbar">
      <div className="navbar-brand">
        <div className="brand-icon">P</div>

        <div>
          <h2>PlacementHub</h2>
          <span>Student Career Portal</span>
        </div>
      </div>

      <div className="navbar-links">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/jobs">Job Openings</NavLink>
        <NavLink to="/applications">Applications</NavLink>
        <NavLink to="/interviews">Interviews</NavLink>
        <NavLink to="/notifications">Notifications</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>

      <div className="navbar-user">
        <div className="user-avatar">
          {studentName.charAt(0).toUpperCase()}
        </div>

        <div className="navbar-user-info">
          <strong>{studentName}</strong>
          <span>Student</span>
        </div>

        <button
          type="button"
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;