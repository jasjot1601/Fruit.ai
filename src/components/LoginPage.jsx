import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';  // Add styling similar to your first image

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form from submitting by default
    // Add any validation or login logic here (e.g., API call)
    
    // Redirect to home page after successful login (dummy logic here)
    navigate('/home');
  };

  return (
    <div className="login-page-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>By signing in you are agreeing to our <a href="#">Term and privacy policy</a></p>
        <div className="tab-container">
          <span className="active">Login</span> 
          <span>Register</span>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" required />
            <span className="show-password-icon">👁</span> {/* Use appropriate eye icon */}
          </div>
          <div className="options-container">
            <label>
              <input type="checkbox" /> Remember password
            </label>
            <a href="#">Forget password</a>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;