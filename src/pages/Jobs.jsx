import { useState } from "react";
import JobCard from "../components/JobCard";
import jobs from "../data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [jobType, setJobType] = useState("All Types");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "All Locations" || job.location === location;

    const matchesType =
      jobType === "All Types" || job.type === jobType;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="jobs-page">

      {/* Page Header */}
      <div className="page-header">

        <div>
          <p className="dashboard-label">PLACEMENT OPPORTUNITIES</p>

          <h1>Job Openings</h1>

          <p>
            Explore verified placement opportunities from leading companies.
          </p>
        </div>

        <div className="jobs-count">
          <strong>{filteredJobs.length}</strong>
          <span>Open Positions</span>
        </div>

      </div>

      {/* Search and Filters */}
      <div className="job-filters">

        <div className="search-box">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search company or job role..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

        </div>

        <select
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        >
          <option>All Locations</option>
          <option>Chennai</option>
          <option>Bangalore</option>
          <option>Hyderabad</option>
          <option>Pune</option>
        </select>

        <select
          value={jobType}
          onChange={(event) => setJobType(event.target.value)}
        >
          <option>All Types</option>
          <option>Full Time</option>
          <option>Internship</option>
        </select>

      </div>

      {/* Job Results */}
      <div className="jobs-result-header">

        <div>
          <h2>Available Opportunities</h2>
          <p>
            Showing {filteredJobs.length} opportunities matching your criteria.
          </p>
        </div>

      </div>

      <div className="jobs-grid">

        {filteredJobs.length > 0 ? (

          filteredJobs.map((job) => (

            <JobCard
              key={job.id}
              company={job.company}
              role={job.role}
              location={job.location}
              packageAmount={job.packageAmount}
              type={job.type}
            />

          ))

        ) : (

          <div className="no-jobs">

            <div className="no-jobs-icon">🔎</div>

            <h3>No opportunities found</h3>

            <p>
              Try changing your search or filter options.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Jobs;