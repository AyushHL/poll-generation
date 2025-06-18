import React, { useState } from 'react';

const Login: React.FC = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'host' | 'participant'>('host');
  const [showPassword, setShowPassword] = useState(false);

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrUsername);
  const isPasswordWeak = password.length < 6 || !/[A-Z]/.test(password) || !/[0-9]/.test(password);

  const togglePassword = () => setShowPassword((prev) => !prev);


  const handleLogin = () => {
    // handle actual login logic here
    console.log('Logging in with:', { emailOrUsername, password, role });
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: '#4f03ff', textAlign: 'center' }}>Sign In to Poll Automation</h2>

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
          <p style={errorStyle}>Ensure you entered a valid email or username.</p>
        )}

        <div style={passwordWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              ...inputStyle,
              borderColor: password && isPasswordWeak ? 'orange' : '#ccc'
            }}
          />
          <span onClick={togglePassword} style={eyeStyle}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        {password && isPasswordWeak && (
          <p style={errorStyle}>
            Weak password. Use 6+ characters, an uppercase letter, and a number.
          </p>
        )}

        <select
          value={role}
          onChange={(e) => setRole(e.target.value as 'host' | 'participant')}
          style={{ ...inputStyle, backgroundColor: '#fff', color: '#333', cursor: 'pointer' }}
        >
          <option value="host">Host</option>
          <option value="participant">Participant</option>
        </select>

        <button style={primaryButtonStyle} onClick={handleLogin}>
          Login →
        </button>

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href="/forgot-password" style={linkStyle}>Forgot Password?</a>
        </div>

        <p style={footerText}>
          Don't have an account? <a href="/signup" style={linkStyle}>Register</a>
        </p>
      </div>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: '#f2f0ff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  fontFamily: 'Segoe UI, sans-serif'
};

const cardStyle: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: '16px',
  padding: '40px 30px',
  maxWidth: '400px',
  width: '100%',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  border: '1px solid #eee'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  margin: '10px 0',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  color: '#333',
  fontSize: '15px',
  outline: 'none'
};

const passwordWrapper: React.CSSProperties = {
  position: 'relative'
};

const eyeStyle: React.CSSProperties = {
  position: 'absolute',
  right: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#4f03ff'
};

const errorStyle: React.CSSProperties = {
  color: 'orange',
  fontSize: '12px',
  marginTop: '-6px',
  marginBottom: '10px'
};

const primaryButtonStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px',
  marginTop: '20px',
  background: '#4f03ff',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer'
};

const footerText: React.CSSProperties = {
  color: '#555',
  textAlign: 'center',
  marginTop: '16px',
  fontSize: '14px'
};

const linkStyle: React.CSSProperties = {
  color: '#4f03ff',
  fontWeight: 'bold',
  textDecoration: 'underline',
  cursor: 'pointer'
};

export default Login;
