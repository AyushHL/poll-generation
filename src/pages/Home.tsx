import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Inline CSS */}
      <style>{`
        .home-container {
          font-family: 'Segoe UI', sans-serif;
          background-color: #f4f6fa;
          color: #222;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .navbar {
          background-color: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .logo {
          font-weight: bold;
          color: #5b2cff;
        }

        .nav-links a {
          margin-left: 1rem;
          color: #5b2cff;
          text-decoration: none;
          font-weight: 500;
        }

        .hero {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(to right, #e8e4ff, #ffffff);
        }

        .hero h2 {
          font-size: 2rem;
          color: #333;
        }

        .hero p {
          margin-top: 1rem;
          color: #555;
          font-size: 1.1rem;
        }

        .buttons {
          margin-top: 2rem;
        }

        .btn {
          padding: 0.6rem 1.2rem;
          margin: 0 0.5rem;
          border-radius: 6px;
          font-weight: bold;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .btn-primary {
          background-color: #5b2cff;
          color: white;
          border: none;
        }

        .btn-primary:hover {
          background-color: #4622cc;
        }

        .btn-outline {
          border: 2px solid #5b2cff;
          color: #5b2cff;
          background: transparent;
        }

        .btn-outline:hover {
          background-color: #ede9ff;
        }

        .about {
          padding: 3rem 2rem;
          text-align: center;
          background-color: white;
        }

        .about h3 {
          color: #5b2cff;
          margin-bottom: 1rem;
        }

        .features {
          padding: 3rem 2rem;
          background-color: #fafbff;
        }

        .features h3 {
          text-align: center;
          margin-bottom: 2rem;
          color: #5b2cff;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .card {
          background-color: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .card h4 {
          margin-bottom: 0.5rem;
          color: #333;
        }

        .card p {
          color: #555;
          font-size: 0.95rem;
        }

        .footer {
          text-align: center;
          padding: 1rem;
          font-size: 0.9rem;
          background-color: #f0f0f5;
          color: #666;
          margin-top: auto;
        }
      `}</style>

      <header className="navbar">
        <h1 className="logo">Poll Automation</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to Poll Automation</h2>
        <p>
          Experience the best features tailored for you. Join us today and revolutionize real-time audience engagement!
        </p>
        <div className="buttons">
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          <Link to="/login" className="btn btn-outline">Login</Link>
        </div>
      </section>

      <section className="about">
        <h3>About Us!</h3>
        <p>
          Poll Automation Application is a standalone, open-source web application designed to intelligently generate
          and manage live polls in real-time during lectures, webinars, or meetings — without being tied to any specific video conferencing platform.
        </p>
      </section>

      <section className="features">
        <h3>Why Choose Us?</h3>
        <div className="feature-grid">
          <div className="card">
            <h4>User-Friendly Interface</h4>
            <p>Our platform is designed with you in mind, to provide an intuitive experience.</p>
          </div>
          <div className="card">
            <h4>Real-Time Polling</h4>
            <p>We generate context-aware poll questions live during the lecture, ensuring timely and engaging student interaction.</p>
          </div>
          <div className="card">
            <h4>Ease of Use</h4>
            <p>Simple and seamless navigation to manage, launch and track your polls.</p>
          </div>
          <div className="card">
            <h4>Experience</h4>
            <p>Crafted with feedback from real educators, students, and event organizers.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link to="/terms-of-service">Terms of Service</Link> |{" "}
          <Link to="/contact">Contact Support</Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
