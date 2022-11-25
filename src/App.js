import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./Login";
import JobBoard from "./JobBoard";
import JobDetail from "./JobDetail";
import JOBS from "./jobs";
import "../public/hk-grotesk.bold.ttf";

export default function App() {
  const navigate = useNavigate();

  const [collectedJobs, setCollectedJobs] = useState([]);

  useEffect(() => {
    // fetch jobs from API
    fetch("https://remoteok.com/api?tag=dev")
      .then((res) => res.json())
      .then((data) => {
        let remoteJobs = data.slice(1);
        setCollectedJobs(remoteJobs);
      });
  }, []);

  const [allJobs, setAllJobs] = useState(JOBS);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      navigate("/jobs");
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/jobs"
          element={<JobBoard collectedJobs={collectedJobs} />}
        />
        <Route path="/job/:id" element={<JobDetail JOBS={JOBS} />} />
      </Routes>
    </div>
  );
}
