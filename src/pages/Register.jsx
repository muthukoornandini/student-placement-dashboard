import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    department: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.department
    ) {
      setError("Please fill in all the required fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const studentData = {
      name: formData.name,
      email: formData.email,
      department: formData.department,
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
              START YOUR CAREER JOURNEY
            </p>

            <h1>
              Create your profile.
              <br />
              Discover opportunities.
            </h1>

            <p>
              Build your student profile, explore placement
              opportunities and keep track of every step in
              your career journey.
            </p>

          </div>

          <div className="auth-features">

            <div>
              <span>✓</span>
              <p>Create your student profile</p>
            </div>

            <div>
              <span>✓</span>
              <p>Discover placement opportunities</p>
            </div>

            <div>
              <span>✓</span>
              <p>Track applications and interviews</p>
            </div>

          </div>

        </div>

        <div className="auth-form-section">

          <div className="auth-form-card register-card">

            <div className="auth-form-header">

              <h1>Create Account</h1>

              <p>
                Register as a student to access the placement
                dashboard.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label htmlFor="register-email">
                  Email Address
                </label>

                <input
                  id="register-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label htmlFor="department">
                  Department
                </label>

                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="">
                    Select your department
                  </option>

                  <option value="Artificial Intelligence and Data Science">
                    Artificial Intelligence and Data Science
                  </option>

                  <option value="Computer Science and Engineering">
                    Computer Science and Engineering
                  </option>

                  <option value="Information Technology">
                    Information Technology
                  </option>

                  <option value="Electronics and Communication Engineering">
                    Electronics and Communication Engineering
                  </option>

                  <option value="Electrical and Electronics Engineering">
                    Electrical and Electronics Engineering
                  </option>
                </select>

              </div>

              <div className="form-group">

                <label htmlFor="register-password">
                  Password
                </label>

                <input
                  id="register-password"
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
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
                Create Student Account
              </button>

            </form>

            <div className="auth-divider">
              <span>Already have an account?</span>
            </div>

            <Link
              to="/login"
              className="auth-register-link"
            >
              Sign In Instead
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;