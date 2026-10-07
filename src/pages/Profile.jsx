import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Profile() {
  const { student, login } = useAuth();

  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: student?.name || "Nandini",
    email: student?.email || "nandini@example.com",
    department:
      student?.department ||
      "Artificial Intelligence and Data Science",
    year: "3rd Year",
    cgpa: "8.1",
    phone: "+91 98765 43210",
  });

  const skills = [
    "Python",
    "Java",
    "React",
    "Machine Learning",
    "SQL",
    "Data Structures",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    login({
      ...student,
      name: formData.name,
      email: formData.email,
      department: formData.department,
      role: "Student",
    });

    setEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: student?.name || "Nandini",
      email: student?.email || "nandini@example.com",
      department:
        student?.department ||
        "Artificial Intelligence and Data Science",
      year: "3rd Year",
      cgpa: "8.1",
      phone: "+91 98765 43210",
    });

    setEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="page-header">
        <div>
          <p className="dashboard-label">
            STUDENT PROFILE
          </p>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and academic
            details for placement opportunities.
          </p>
        </div>

        <div className="profile-header-badge">
          <span>Profile Completion</span>
          <strong>85%</strong>
        </div>
      </div>

      <div className="profile-layout">
        <div className="profile-overview-card">
          <div className="profile-avatar-large">
            {formData.name.charAt(0).toUpperCase()}
          </div>

          <h2>{formData.name}</h2>

          <p>{formData.department}</p>

          <span className="profile-student-badge">
            STUDENT
          </span>

          <div className="profile-overview-divider"></div>

          <div className="profile-overview-item">
            <span>Academic Year</span>
            <strong>{formData.year}</strong>
          </div>

          <div className="profile-overview-item">
            <span>CGPA</span>
            <strong>{formData.cgpa}</strong>
          </div>

          <div className="profile-overview-item">
            <span>Placement Status</span>
            <strong className="profile-active">
              Active
            </strong>
          </div>
        </div>

        <div className="profile-details-card">
          <div className="section-heading">
            <div>
              <h2>
                Personal & Academic Information
              </h2>

              <p>
                Keep your information updated for recruiters.
              </p>
            </div>

            {!editing && (
              <button
                type="button"
                className="profile-edit-button"
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>

          <div className="profile-form-grid">
            <div className="profile-field">
              <label>Full Name</label>

              {editing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-field-value">
                  {formData.name}
                </div>
              )}
            </div>

            <div className="profile-field">
              <label>Email Address</label>

              {editing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-field-value">
                  {formData.email}
                </div>
              )}
            </div>

            <div className="profile-field profile-field-full">
              <label>Department</label>

              {editing ? (
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option>
                    Artificial Intelligence and Data Science
                  </option>

                  <option>
                    Computer Science and Engineering
                  </option>

                  <option>
                    Information Technology
                  </option>

                  <option>
                    Electronics and Communication Engineering
                  </option>
                </select>
              ) : (
                <div className="profile-field-value">
                  {formData.department}
                </div>
              )}
            </div>

            <div className="profile-field">
              <label>Academic Year</label>

              {editing ? (
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                >
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              ) : (
                <div className="profile-field-value">
                  {formData.year}
                </div>
              )}
            </div>

            <div className="profile-field">
              <label>Current CGPA</label>

              {editing ? (
                <input
                  type="text"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-field-value">
                  {formData.cgpa}
                </div>
              )}
            </div>

            <div className="profile-field">
              <label>Phone Number</label>

              {editing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-field-value">
                  {formData.phone}
                </div>
              )}
            </div>
          </div>

          <div className="profile-skills-section">
            <label>Skills</label>

            <div className="skills-container">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          {editing && (
            <div className="profile-actions">
              <button
                type="button"
                className="profile-cancel-button"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="button"
                className="profile-save-button"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;