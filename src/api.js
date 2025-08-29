export const fetchJobs = async (keyword, location) => {
  const appId = process.env.REACT_APP_ADZUNA_APP_ID;
  const appKey = process.env.REACT_APP_ADZUNA_APP_KEY;

  const response = await fetch(
  `/v1/api/jobs/in/search/1?app_id=${appId}&app_key=${appKey}&results_per_page=20&what=${keyword}&where=${location}`
);

  const data = await response.json();
  return data.results;
};
