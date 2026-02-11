import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = "http://13.48.42.234:5001"; 
// Later replace with domain / env variable

function App() {
  const [message, setMessage] = useState("");
  const [health, setHealth] = useState({});
  const [pipeline, setPipeline] = useState({});
  const [security, setSecurity] = useState({});

  useEffect(() => {
    axios.get(`${API}/api/message`).then(res => setMessage(res.data.message));
    axios.get(`${API}/api/health`).then(res => setHealth(res.data));
    axios.get(`${API}/api/pipeline`).then(res => setPipeline(res.data));
    axios.get(`${API}/api/security`).then(res => setSecurity(res.data));
  }, []);

  return (
    <div className="container">
      <h1>🚀 DevSecOps Dashboard</h1>

      {/* MESSAGE */}
      <div className="card">
        <h2>Backend Message</h2>
        <p>{message}</p>
      </div>

      {/* HEALTH */}
      <div className="card">
        <h2>Service Health</h2>
        <p>Status: {health.status}</p>
        <p>Service: {health.service}</p>
      </div>

      {/* PIPELINE */}
      <div className="card">
        <h2>Pipeline Status</h2>
        <ul>
          <li>Build: {pipeline.build}</li>
          <li>Sonar: {pipeline.sonar}</li>
          <li>Trivy: {pipeline.trivy}</li>
          <li>Deploy: {pipeline.deploy}</li>
        </ul>
      </div>

      {/* SECURITY */}
      <div className="card">
        <h2>Security Scan</h2>
        <p>Critical: {security.critical}</p>
        <p>High: {security.high}</p>
        <p>Medium: {security.medium}</p>
        <p>Status: {security.status}</p>
      </div>
    </div>
  );
}

export default App;