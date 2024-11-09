import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {

  const slider = useRef()
  let tx = 0

  const slideForward = () =>{
    if (tx > -50){
      tx -= 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () =>{
    if(-50 <= tx && tx < 0){
      tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  
  }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sarah Thompson</h3>
                  <span>Edusity, USA</span>
              </div>
                
              </div>
              <p>
                "Education is the key to unlocking potential. At Edusity, we
                empower students to achieve their goals and overcome
                challenges. Our innovative programs foster creativity and
                critical thinking. I am proud to be part of a team that values
                every learner's journey."
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div> 
              </div>
              <p>
                "At Edusity, we believe that education should be accessible to
                everyone. Our commitment to inclusive learning creates an
                environment where all students can thrive. I have seen
                firsthand how our programs change lives and inspire growth."
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Emma Johnson</h3>
                  <span>Edusity, USA</span>
                </div>
                
              </div>
              <p>
                "Joining Edusity has been a transformative experience for me.
                I am passionate about fostering a love for learning in
                students of all backgrounds. Our collaborative approach
                empowers educators and students alike to innovate and excel."
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Michael Smith</h3>
                  <span>Edusity, USA</span>
                </div>
                
              </div>
              <p>
              "At Edusity, I have discovered the true power of education to
              inspire change. Our team is dedicated to providing
              personalized support to each student, helping them navigate
              their unique paths to success. I believe that learning should
              be a joyful journey."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
