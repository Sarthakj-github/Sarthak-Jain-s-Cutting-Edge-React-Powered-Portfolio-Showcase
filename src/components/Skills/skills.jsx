import React from 'react';
import "./skills.css";
// Import skill icons here, assuming you have them in your assets folder
import { FaPython, FaJava, FaHtml5, FaCss3, FaReact, FaNodeJs } from 'react-icons/fa';
import { DiJavascript1, DiPhp, DiMongodb, DiMysql } from 'react-icons/di';
import { SiTensorflow, SiOpencv, SiPandas, SiScikitlearn,SiNumpy,SiOracle } from 'react-icons/si';

const SkillBall = ({ icon: Icon, name }) => (
  <div className="skill-ball">
    <Icon className="skill-icon" />
    <span className="skill-name">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section className='skills-section'>
      {/* <h1 className="heading">Skills</h1> */}

      <div className='skill-layer programming-languages'>
        <h2>Programming Languages</h2>
        <div className="skills-container">
          <SkillBall icon={FaPython} name="Python" />
          <SkillBall icon={FaJava} name="Java" />
          <SkillBall icon={DiJavascript1} name="JavaScript" />
          <SkillBall icon={DiPhp} name="PHP" />
          {/* Add other programming languages here */}
        </div>
      </div>

      <div className='skill-layer web-development'>
        <h2>Web Development</h2>
        <div className="skills-container">
          <SkillBall icon={FaHtml5} name="HTML" />
          <SkillBall icon={FaCss3} name="CSS" />
          <SkillBall icon={FaReact} name="React.js" />
          <SkillBall icon={FaNodeJs} name="Node.js" />
          {/* Add other web dev skills here */}
        </div>
      </div>

      <div className='skill-layer ai-ml'>
        <h2>AI/ML</h2>
        <div className="skills-container">
          <SkillBall icon={SiOpencv} name="OpenCV" />
          <SkillBall icon={SiTensorflow} name="TensorFlow" />
          <SkillBall icon={SiScikitlearn} name="Scikit-learn" />
          <SkillBall icon={SiNumpy} name="Numpy" />
          <SkillBall icon={SiPandas} name="Pandas" />
        </div>
      </div>

      <div className='skill-layer databases'>
        <h2>Databases</h2>
        <div className="skills-container">
          <SkillBall icon={DiMysql} name="MySQL" />
          <SkillBall icon={DiMongodb} name="MongoDB" />
          <SkillBall icon={SiOracle} name="Oracle" />
        </div>
      </div>

      <div className='skill-layer soft-skills'>
        <h2>Soft Skills</h2>
        <div className="skills-container">
          <SkillBall icon={FaPython} name="Communication" />
          <SkillBall icon={FaPython} name="Analytics" />
          <SkillBall icon={FaPython} name="Problem Solving" />
          <SkillBall icon={FaPython} name="Teamwork" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
