import React from 'react';
import './intro.css';
import full_pic from '../../assets/full_pic.png';
//import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section className='Intro'>
    <div class="introcontent">
        <div class='introlines'>
            <span class='hello'>Hello,</span>
            <span class='Iam'>I'm Sarthak Jain</span>
            <span class='proff'>Student, AI Enthusiast</span>
            <p class='intropara'>Embarking on an enriching B.Tech journey at PSIT Kanpur.</p>
        </div>
        <div class="btns">
            <button class='btn'><a href="https://www.linkedin.com/in/sarthakJchanderia" class="leet">LinkedIn</a></button>
            <button class='btn'><a href="https://github.com/Sarthakj-github" class="gith">GitHub</a></button>
        </div>
    </div>
    <img src={full_pic} alt="full_pic" class='fullpic' />
    </section>
  )
}

export default Intro;