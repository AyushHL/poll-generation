import React, { useState } from 'react';

const Login: React.FC = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'host' | 'participant'>('host');
  const [showPassword, setShowPassword] = useState(false);

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrUsername);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = () => {
    console.log('Logging in with:', { emailOrUsername, password, role });
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>🔐 Sign In to Poll Automation</h2>

        <input
          type="text"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          placeholder="Email or Username"
          style={{
            ...inputStyle,
            borderColor: emailOrUsername && !isEmail ? 'orange' : '#ccc'
          }}
        />
        {emailOrUsername && !isEmail && (
          <p style={errorStyle}>Please enter a valid email or username.</p>
        )}

        <div style={passwordWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              ...inputStyle,
              marginBottom: 0,
              paddingRight: '60px'
            }}
          />
          <span onClick={togglePassword} style={eyeStyle}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value as 'host' | 'participant')}
          style={{
            ...inputStyle,
            backgroundColor: '#f9f9ff',
            color: '#333',
            cursor: 'pointer'
          }}
        >
          <option value="host">Host</option>
          <option value="participant">Participant</option>
        </select>

        <button style={primaryButtonStyle} onClick={handleLogin}>
          Login →
        </button>

        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          <a href="/forgot-password" style={linkStyle}>
            Forgot Password?
          </a>
        </div>

        <p style={footerText}>
          Don’t have an account?{' '}
          <a href="/signup" style={linkStyle}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: 'linear-gradient(to bottom right, #f0f4ff, #e3e8ff)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  fontFamily: 'Segoe UI, sans-serif'
};

const cardStyle: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: '18px',
  padding: '36px 28px',
  maxWidth: '420px',
  width: '100%',
  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08)',
  border: '1px solid #e0e0ff',
  transition: 'box-shadow 0.3s ease'
};

const titleStyle: React.CSSProperties = {
  color: '#4f03ff',
  textAlign: 'center',
  marginBottom: '24px'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  marginBottom: '14px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  fontSize: '15px',
  outline: 'none',
  transition: 'border 0.2s'
};

const passwordWrapper: React.CSSProperties = {
  position: 'relative',
  marginBottom: '14px'
};

const eyeStyle: React.CSSProperties = {
  position: 'absolute',
  right: '14px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  fontSize: '13px',
  fontWeight: 'bold',
  color: '#4f03ff',
  userSelect: 'none'
};

const errorStyle: React.CSSProperties = {
  color: 'orange',
  fontSize: '12px',
  marginTop: '-8px',
  marginBottom: '12px'
};

const primaryButtonStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px',
  background: '#4f03ff',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '8px',
  transition: 'background 0.2s'
};

const footerText: React.CSSProperties = {
  color: '#555',
  textAlign: 'center',
  marginTop: '20px',
  fontSize: '14px'
};

const linkStyle: React.CSSProperties = {
  color: '#4f03ff',
  fontWeight: 'bold',
  textDecoration: 'underline',
  cursor: 'pointer'
};

export default Login;
