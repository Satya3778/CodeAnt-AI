import React, { useState } from "react";
import "./Newpage.css";

const Newpage = () => {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Hardcoded 33 repositories data
  const repositories = [
    { name: "Design System", type: "Public", language: "JavaScript", size: "7320 KB", updated: "1 day ago" },
    { name: "Public", type: "Private", language: "HTML", size: "1240 KB", updated: "2 days ago" },
    { name: "React", type: "Public", language: "ReactJS", size: "4320 KB", updated: "3 days ago" },
    { name: "UI Kit", type: "Private", language: "CSS", size: "3100 KB", updated: "4 days ago" },
    { name: "Node Modules", type: "Public", language: "JavaScript", size: "5200 KB", updated: "5 days ago" },
    { name: "CSS Framework", type: "Private", language: "CSS", size: "4100 KB", updated: "6 days ago" },
    { name: "Mobile App", type: "Public", language: "React Native", size: "6200 KB", updated: "7 days ago" },
    { name: "Landing Page", type: "Private", language: "HTML", size: "2500 KB", updated: "8 days ago" },
    { name: "E-commerce Site", type: "Public", language: "JavaScript", size: "8000 KB", updated: "9 days ago" },
    { name: "API Server", type: "Private", language: "Node.js", size: "3900 KB", updated: "10 days ago" },
    { name: "Blog Platform", type: "Public", language: "ReactJS", size: "6700 KB", updated: "11 days ago" },
    { name: "Portfolio", type: "Private", language: "HTML", size: "1800 KB", updated: "12 days ago" },
    { name: "Admin Panel", type: "Public", language: "ReactJS", size: "5500 KB", updated: "13 days ago" },
    { name: "Task Manager", type: "Private", language: "JavaScript", size: "4800 KB", updated: "14 days ago" },
    { name: "Weather App", type: "Public", language: "ReactJS", size: "2100 KB", updated: "15 days ago" },
    { name: "Social Media", type: "Private", language: "JavaScript", size: "9100 KB", updated: "16 days ago" },
    { name: "Messaging App", type: "Public", language: "ReactJS", size: "7500 KB", updated: "17 days ago" },
    { name: "CRM System", type: "Private", language: "JavaScript", size: "6700 KB", updated: "18 days ago" },
    { name: "Dashboard", type: "Public", language: "ReactJS", size: "5300 KB", updated: "19 days ago" },
    { name: "Search Engine", type: "Private", language: "Node.js", size: "4900 KB", updated: "20 days ago" },
    { name: "File Manager", type: "Public", language: "JavaScript", size: "4600 KB", updated: "21 days ago" },
    { name: "Photo Gallery", type: "Private", language: "HTML", size: "3700 KB", updated: "22 days ago" },
    { name: "Video Streaming", type: "Public", language: "ReactJS", size: "9200 KB", updated: "23 days ago" },
    { name: "News Portal", type: "Private", language: "JavaScript", size: "6000 KB", updated: "24 days ago" },
    { name: "Job Portal", type: "Public", language: "ReactJS", size: "7300 KB", updated: "25 days ago" },
    { name: "Event Booking", type: "Private", language: "JavaScript", size: "8100 KB", updated: "26 days ago" },
    { name: "Online Store", type: "Public", language: "ReactJS", size: "9400 KB", updated: "27 days ago" },
    { name: "Fitness Tracker", type: "Private", language: "JavaScript", size: "6900 KB", updated: "28 days ago" },
    { name: "Real Estate", type: "Public", language: "ReactJS", size: "8000 KB", updated: "29 days ago" },
    { name: "Learning Platform", type: "Private", language: "JavaScript", size: "8500 KB", updated: "30 days ago" },
    { name: "Music App", type: "Public", language: "ReactJS", size: "6600 KB", updated: "31 days ago" },
    { name: "Video Editor", type: "Private", language: "JavaScript", size: "9200 KB", updated: "32 days ago" },
    { name: "AI Assistant", type: "Public", language: "ReactJS", size: "7400 KB", updated: "33 days ago" },
    { name: "Cloud Storage", type: "Private", language: "Node.js", size: "5300 KB", updated: "34 days ago" },
  ];


  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      {/* Hamburger Menu */}
      <button className="hamburger-menu" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h1 className="logo">
          <img src="logo.png" alt="Codent AI" />
          Codent AI
        </h1>
        <div className="search-bar">
          <select style={{ width: "200px", padding: "11px", marginTop: 20, borderRadius: 10 }}>
            <option value="UtkarshDairyapa">UtkarshDairyapa</option>
            <option value="Kundan">Kundan</option>
            <option value="Ajay">Ajay</option>
            <option value="Ravi">Ravi</option>
            <option value="Priya">Priya</option>
          </select>
        </div>
        <button>
          <img src="home.png" alt="Repositories" />
          Repositories
        </button>
        <button>
          <img src="less.png" alt="AI Code Review" />
          AI Code Review
        </button>
        <button>
          <img src="cloud.png" alt="Cloud Security" />
          Cloud Security
        </button>
        <button>
          <img src="how.png" alt="How to Use" />
          How to Use
        </button>
        <button>
          <img src="settings.png" alt="Settings" />
          Settings
        </button>
        <div className="sidebar-bottom">
          <button>
            <img src="support.png" alt="Support" />
            Support
          </button>
          <button>
            <img src="logout.png" alt="Logout" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="repositories-container">
          <div className="repositories-header">
            <h2>Repositories</h2>
            <div className="action-buttons">
              <button style={{ border: "1px solid gray" }}>
                <img src="refresh.png" alt="Refresh" style={{ width: "15px", marginRight: "8px" }} />
                Refresh All
              </button>
              <button style={{ border: "1px solid gray" }}>
                <img src="plus.png" alt="Add Repository" style={{ width: "15px", marginRight: "8px" }} />
                Add Repository
              </button>
            </div>
          </div>
          <p className="total" style={{ padding: "20px", paddingRight: "20px" }}>
            33 total repositories
          </p>
          <div className="search-bar-container">
            <input
              style={{
                padding: 10,
                marginLeft: 20,
                borderRadius: 10,
                marginBottom: -5,
                border: "1px solid #808080",
                width: "85%",
              }}
              type="text"
              placeholder="Search Repository"
              className="search-bar"
            />
          </div>
          <hr className="divider" />
          <div className="repositories-list">
            {repositories.map((repo, index) => (
              <div className="repository-item" key={index}>
                <div className="repo-details">
                  <h3>
                    {repo.name} <span className={`repo-type ${repo.type.toLowerCase()}`}>{repo.type}</span>
                  </h3>
                </div>
                <div className="repo-meta">
                  <div className="language">
                    <p>{repo.language}</p>
                    <img src="dot.png" alt="Language Icon" className="icon" />
                  </div>
                  <div className="size">
                    <img src="database.png" alt="Size Icon" className="icon" />
                    <p>{repo.size}</p>
                  </div>
                  <p>Updated: {repo.updated}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpage;
