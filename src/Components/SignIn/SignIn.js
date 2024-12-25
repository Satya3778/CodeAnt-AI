import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './SignIn.css';

const SignIn = () => {
  const [activeButton, setActiveButton] = useState(null); // Tracks which main button is active
  const [selectedSignIn, setSelectedSignIn] = useState(null); // Tracks which sign-in button is selected
  const navigate = useNavigate();  // Initialize navigate function

  const handleSelfHostedClick = () => {
    setActiveButton('selfHosted');
    setSelectedSignIn(null); // Reset selected sign-in button
  };

  const handleSaaSClick = () => {
    setActiveButton('saas');
    setSelectedSignIn(null); // Reset selected sign-in button
  };

  const handleSignInClick = (button) => {
    setSelectedSignIn(button); // Set the selected sign-in button
    navigate('/github-sign-in');  // Navigate to the Newpage route when any sign-in button is clicked
  };

  return (
    <div className="sign-in-page-container">
      <div className="left-section">
        <div className="container-one">
          <div className="text-container">
            <div className="text-image-wrapper">
              <img 
                src="logo.png" 
                alt="Illustration of AI fixing code" 
                className="text-image"
              />
              <h2>AI to Detect & Autofix Bad Code</h2>
            </div>
          </div>
          <div className="divider"></div>
          <div className="stats-container">
            <div className="stat-item">
              <p><h2><span style={{ fontWeight: 'bold' }}>30+</span></h2> Language Support</p>
            </div>
            <div className="stat-item">
              <p><h2><span style={{ fontWeight: 'bold' }}>10K+</span></h2> Developers</p>
            </div>
            <div className="stat-item">
              <p><h2><span style={{ fontWeight: 'bold' }}>100K+</span></h2> Hours Saved</p>
            </div>
          </div>
        </div>
        <div className="stats-container1">
          <div className="stat-column">
            <div className="image-wrapper">
              <img src="Ellipse1.png" className="stat-image1" alt="Ellipse" />
              <img src="vector-image.png" className="inner-image" alt="Vector" />
            </div>
            <p className="stat-metric">Issues Fixed</p>
            <p className="stat-total">500K+</p>
          </div>
          <div className="stat-column">
            <img src="image2.png" className="stat-image" />
            <p className="stat-description">This Week</p>
          </div>
        </div>
        <div className="image-container-left-bottom">
          <img src="Subtract (1).png" alt="Bottom Left Image" />
        </div>
      </div>

      <div className="right-section">
        <div className="right-container">
          {/* Welcome Section */}
          <div className="welcome-container1">
            <div className="image-container1">
              <img  className="logo1"src="logo.png" style={{width:30}}alt="CodeAnt AI Logo" />
              <p className="code" style={{ fontFamily: 'Satoshi, sans-serif',fontWeight:400 }}>CodeAnt AI</p>
            </div>
            <h1 style={{ fontFamily: 'Satoshi, sans-serif' }} className='welcome'>Welcome to CodeAnt AI</h1>
          </div>

          {/* Buttons Section */}
          <div className="button-container1">
            <button
              className={`btn-primary1 ${activeButton === 'saas' ? 'active' : ''}`}
              onClick={handleSaaSClick}
            >
              SaaS
            </button>
            <button
              className={`btn-primary1 ${activeButton === 'selfHosted' ? 'active' : ''}`}
              onClick={handleSelfHostedClick}
            >
              Self Hosted
            </button>
          </div>
          <div className="divider-line"></div>

          {/* Conditionally render sign-in buttons */}
          {activeButton === 'selfHosted' && (
            <div className="signin-container1">
              <button
                className={`signin-button1 ${selectedSignIn === 'gitlab' ? 'selected' : ''}`}
                onClick={() => handleSignInClick('gitlab')}
              >
                <img src="gitlab.png" alt="GitLab Icon" className="signin-icon" />
                Self Hosted with GitLab
              </button>
              <button
                className={`signin-button1 ${selectedSignIn === 'sso' ? 'selected' : ''}`}
                onClick={() => handleSignInClick('sso')}
              >
                <img src="sso.png" alt="SSO Icon" className="signin-icon" />
                Sign In with SSO
              </button>
            </div>
          )}

          {activeButton === 'saas' && (
            <div className="signin-container1">
              <button
                className={`signin-button1 ${selectedSignIn === 'google' ? 'selected' : ''}`}
                onClick={() => handleSignInClick('google')}
              >
                <img src="Icon.png" alt="GitHub Icon" className="signin-icon" />
                Sign in with GitHub
              </button>
              <button
                className={`signin-button1 ${selectedSignIn === 'facebook' ? 'selected' : ''}`}
                onClick={() => handleSignInClick('facebook')}
              >
                <img src="bit.png" alt="Bitbucket Icon" className="signin-icon" />
                Sign in with Bitbucket
              </button>
              <button
                className={`signin-button1 ${selectedSignIn === 'twitter' ? 'selected' : ''}`}
                onClick={() => handleSignInClick('twitter')}
              >
                <img src="azure.png" alt="Azure DevOps Icon" className="signin-icon" />
                Sign in with Azure Devops
              </button>
              <button
                className={`signin-button1 ${selectedSignIn === 'linkedin' ? 'selected' : ''}`}
                onClick={() => handleSignInClick('linkedin')}
              >
                <img src="gitlab.png" alt="GitLab Icon" className="signin-icon" />
                Sign in with GitLab
              </button>
            </div>
          )}
        </div>
        <div className="sign-in-footer">
      <p>by signing up you agree to the <span style={{fontWeight:"bold"}}>Privacy Policy </span></p>
    </div>
      </div>
      
    </div>
  );
};

export default SignIn;
