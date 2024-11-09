import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={() => {setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          At our institution, we are committed to fostering a learning
          environment that empowers students to become the leaders of tomorrow.
          Through innovative teaching methods, cutting-edge research, and a
          vibrant campus community, we prepare our students to excel in a
          rapidly changing world.
        </p>
        <p>
          Our university offers a wide range of academic programs designed to
          cultivate critical thinking, creativity, and a deep understanding of
          global issues. By encouraging collaboration, diversity, and a
          forward-thinking mindset, we strive to shape future generations of
          problem-solvers who will lead with integrity, innovation, and
          compassion.
        </p>
        <p>
          Whether through academic achievements, community service, or
          groundbreaking research, our students are given every opportunity to
          make a lasting impact on the world. We don't just nurture academic
          excellence; we nurture individuals who are driven to create a better
          future for all.
        </p>
      </div>
    </div>
  );
};

export default About;
