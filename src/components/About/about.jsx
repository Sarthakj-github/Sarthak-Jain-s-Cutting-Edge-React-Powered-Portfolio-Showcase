import React from 'react';
import "./about.css";
import my_pic from "../../assets/My_pic.jpg"; // Path to profile image

function About() {
  return (
    <section className="about-section">
      {/* <h1 className="heading">About</h1> */}
      <div className="about-container">
        <div className="about-text">
          <p className="aboutp">
            Final-year B.Tech in Computer Science (AI) with deep expertise in Python, C++, and machine learning, complemented by strong web development skills. Experienced in building scalable, interactive web applications and AI-driven solutions. Developed impactful projects like <strong>Mood Spotifier</strong>, an AI-powered mood analysis and music recommendation app, and <strong>Code Crafter</strong>, a multi-language coding platform. Skilled in full-stack development with technologies like React, FastAPI, and Django, with robust backend experience in MySQL and MongoDB. Known for designing optimized solutions, collaborative teamwork, and applying advanced ML models to real-world challenges.
          </p>

          <ul className="about-list">
            <li className="profile"><span>Profile:</span> Dual-Track Aspiring AI & SD Engineer</li>
            <li className="education"><span>Education:</span> Bachelor of Technology (Pursuing)</li>
            <li className="language"><span>Languages:</span> Hindi, English</li>
            <li className="tools"><span>Tools worked-on:</span> VS Code, Git, GCP, MS Office</li>
            <li className="interests"><span>Hobbies/Interests:</span> Traveling, Chess-Matching, Culturaphile</li>
          </ul>
        </div>

        <div className="about-img-container">
          <div className="about-img">
            <img src={my_pic} alt="Sarthak Jain" />
          </div>
          <div className="about-info">
            <p><span className="title">Name:</span> Sarthak Jain</p>
            <p><span className="title">Experience:</span> Fresher</p>
            <p><span className="title">Address:</span> Etawah, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
