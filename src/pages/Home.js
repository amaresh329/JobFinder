import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import { fetchJobs } from "../api";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const handleSearch = async (keyword, location) => {
    const data = await fetchJobs(keyword, location);
    setJobs(data);
  };

  return (
    <div>
      <h1>Job Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
