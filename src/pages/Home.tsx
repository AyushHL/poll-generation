import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-container">
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
        <p>Experience the best features tailored for you. Join us today and revolutionize real-time audience engagement!</p>
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
        <p>Privacy Policy | Terms of Service | Contact Support</p>
      </footer>
    </div>
  );
};

export default Home;
