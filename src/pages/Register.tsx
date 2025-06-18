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

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ color: '#4f03ff', margin: 0 }}>Registration to Poll Automation</h2>
        </div>

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
            borderColor: email && !isEmailValid(email) ? 'red' : '#ccc'
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
            backgroundColor: '#fff',
            color: '#333',
            cursor: 'pointer'
          }}
        >
          <option value="host">Host</option>
          <option value="participant">Participant</option>
        </select>

        <button style={primaryButtonStyle}>
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
  color: 'red',
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

export default Register;
