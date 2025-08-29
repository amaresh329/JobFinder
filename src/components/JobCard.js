import React from "react";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2 className="job-title">{job.title}</h2>
      <p className="job-company">{job.company.display_name}</p>
      <p className="job-location">{job.location.display_name}</p>
      <a href={job.redirect_url} target="_blank" rel="noreferrer">
        View Job
      </a>
    </div>
  );
}

export default JobCard;
