import React, { useState } from 'react';

const Register: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'host' | 'participant'>('host');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isEmailValid = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordWeak = (pwd: string): boolean =>
    pwd.length < 6 || !/[A-Z]/.test(pwd) || !/[0-9]/.test(pwd);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirm = () => setShowConfirm((prev) => !prev);

  const isConfirmMismatch = confirmPassword && password !== confirmPassword;

  const handleRegister = () => {
    console.log({ fullName, email, password, confirmPassword, role });
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>📝 Register for Poll Automation</h2>

        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          style={inputStyle}
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{
            ...inputStyle,
            borderColor: email && !isEmailValid(email) ? 'orange' : '#ccc'
          }}
        />
        {email && !isEmailValid(email) && (
          <p style={errorStyle}>Please enter a valid email address.</p>
        )}

        <div style={passwordWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              ...inputStyle,
              paddingRight: '60px',
              borderColor: password && isPasswordWeak(password) ? 'orange' : '#ccc'
            }}
          />
          <span onClick={togglePassword} style={eyeStyle}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        {password && isPasswordWeak(password) && (
          <p style={errorStyle}>
            Password should be at least 6 characters, include a capital letter and a number.
          </p>
        )}

        <div style={passwordWrapper}>
          <input
            type={showConfirm ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            style={{
              ...inputStyle,
              paddingRight: '60px',
              borderColor: isConfirmMismatch ? 'red' : '#ccc'
            }}
          />
          <span onClick={toggleConfirm} style={eyeStyle}>
            {showConfirm ? 'Hide' : 'Show'}
          </span>
        </div>
        {isConfirmMismatch && (
          <p style={errorStyle}>Passwords do not match.</p>
        )}

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

        <button style={primaryButtonStyle} onClick={handleRegister}>
          Sign Up →
        </button>

        <p style={footerText}>
          Already have an account?{' '}
          <a href="/login" style={linkStyle}>Sign in</a>
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

export default Register;
