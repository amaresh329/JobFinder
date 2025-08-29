import React, { useState } from "react";
import JobCard from "./components/JobCard";
import NoJobs from "./components/NoJobs"; 
import "./App.css";

function App() {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch jobs from Adzuna API
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${process.env.REACT_APP_ADZUNA_APP_ID}&app_key=${process.env.REACT_APP_ADZUNA_APP_KEY}&results_per_page=10&what=${role}&where=${location}`
      );
      const data = await response.json();
      setJobs(data.results || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1 className="title">Job Finder</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter job role..."
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={fetchJobs}>Search</button>
      </div>

      {/* Loading state */}
      {loading && <p className="loading">Loading jobs...</p>}

      {/* No Jobs Found */}
      {!loading && jobs.length === 0 && <NoJobs />}

      {/*Jobs List */}
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default App;
