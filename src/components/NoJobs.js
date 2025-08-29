// src/components/NoJobs.js
import React from "react";
import "./NoJobs.css";

const NoJobs = ({ query, location }) => {
  return (
    <div className="no-jobs-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076507.png"
        alt="No jobs"
        className="no-jobs-img"
      />
      <h2>No jobs found</h2>
      <p>
        We couldn’t find any jobs for <strong>{query || "your search"}</strong>{" "}
        in <strong>{location || "this location"}</strong>.
      </p>
      <p>💡 Try searching with a different role or city.</p>
    </div>
  );
};

export default NoJobs;
