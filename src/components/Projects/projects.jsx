import React from 'react';
import './projects.css';
import { Link } from 'react-scroll';
// import matrix_app from "../../assets/matrix_app.jpg";
import manas from "../../assets/manas.jpg";
import modic from "../../assets/modic.jpg";
import rps_game from "../../assets/rps_game.jpg";
import code_crafter from "../../assets/code_crafter.jpeg";

const Project = ({ title, image, content, prolink }) => (
    <Link to={prolink} className='projbox'>
        <div className="project">
            <div className='image'><img src={image} alt="Project" /></div>
            <div className="title">{title}</div>
            <div className='content'>{content}</div>
        </div>
    </Link>
);

function Projects() {
    return (
        <section className='Projects'>
            {/* <h1 className="heading">Projects</h1> */}
            <div className="projects-container">
                <div className="projects">
                    {/* <Project 
                        title="MATRIX CALCULATOR USING TKINTER"
                        image={matrix_app}
                        content="Made a GUI using Tkinter and Numpy to perform various operations on Matrices. It is very useful for Boards students as there are some operations which take very much time."
                        prolink="https://github.com/Sarthakj-github/Python-Projects/tree/Python_rep/Matrix%20Calculator"
                    /> */}
                    <Project 
                        title="MOOD-SPOTIFIER-MODIC"
                        image={modic}
                        content="This project leverages Python, Django, and TailwindCSS to enable AI-driven conversations, utilizing OpenCV and Keras for mood detection. It off ers cross-platform accessibility and provides personalized music recommendations based on the detected mood."
                        prolink="https://github.com/Sarthakj-github/Mood-Spotifier-MODIC"
                    />
                    <Project 
                        title="Mental Analysis for Nations and Societies (MANAS)"
                        image={manas}
                        content="Predicts Disability-Adjusted Life Years (DALYs) from mental disorders using machine learning models. Built with Python, FastAPI and React, it supports data-driven global mental health policy decisions."
                        prolink="https://github.com/Sarthakj-github/Mood-Spotifier-MODIC"
                    />
                    <Project 
                        title="ELEMENTAL CLASH-THE-INFINITE-RPS-ODYSSEY"
                        image={rps_game}
                        content="Fueled by HTML, CSS, and JavaScript, ElementalClash delivers lightning-fast rounds with strategic depth, while robust backend storage ensures seamless play tracking. Experience pleasing Rock Paper Scissors game enriched with captivating elemental themes."
                        prolink="https://github.com/Sarthakj-github/ElementalClash-The-Infinite-RPS-Odyssey"
                    />
                    <Project 
                        title="Code Crafter"
                        image={code_crafter}
                        content="It is an interactive coding tool using ReactJS, FastAPI, MongoDB, Judge0 API for multi-language code execution, with features like a code editor and history management."
                        prolink="https://github.com/Sarthakj-github/Code_Crafter"
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;