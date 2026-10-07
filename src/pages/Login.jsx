import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    const studentData = {
      name: "Nandini",
      email: email,
      department: "Artificial Intelligence and Data Science",
      role: "Student",
    };

    login(studentData);

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        <div className="auth-intro">

          <div className="auth-brand">

            <div className="auth-brand-icon">
              P
            </div>

            <div>
              <h2>PlacementHub</h2>
              <span>Student Career Portal</span>
            </div>

          </div>

          <div className="auth-intro-content">

            <p className="auth-label">
              STUDENT PLACEMENT PORTAL
            </p>

            <h1>
              Your career.
              <br />
              Your opportunities.
            </h1>

            <p>
              Manage your placement applications, discover
              new opportunities and stay updated with your
              interview schedule.
            </p>

          </div>

          <div className="auth-features">

            <div>
              <span>✓</span>
              <p>Explore verified job opportunities</p>
            </div>

            <div>
              <span>✓</span>
              <p>Track your applications</p>
            </div>

            <div>
              <span>✓</span>
              <p>Manage interviews and notifications</p>
            </div>

          </div>

        </div>

        <div className="auth-form-section">

          <div className="auth-form-card">

            <div className="auth-form-header">

              <h1>Welcome Back</h1>

              <p>
                Sign in to access your student placement
                dashboard.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                />

              </div>

              <div className="form-group">

                <label htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError("");
                  }}
                />

              </div>

              {error && (
                <div className="form-error">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="auth-submit-button"
              >
                Sign In
              </button>

            </form>

            <div className="auth-divider">
              <span>New to PlacementHub?</span>
            </div>

            <Link
              to="/register"
              className="auth-register-link"
            >
              Create Student Account
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;