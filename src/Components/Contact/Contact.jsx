import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import while_arrow from '../../assets/white-arrow.png'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e983a65b-7361-4165-a517-979d347dfc88");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
        <p>
          Feel free to contact us with any questions, suggestions, or feedback.
          We are here to assist you and would love to hear from you. Your input
          is invaluable in helping us improve our services and better meet your
          needs. Don't hesitate to reach out—we're just a message away!
        </p>
        <ul>
          <li><img src={mail_icon} alt="" />example@gmail.com</li>
          <li><img src={phone_icon} alt="" />+1 123-456-789 </li>
          <li><img src={location_icon} alt="" />1234 Learning Street, Knowledge City <br/> Educationland, 56789 </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required/>
          <label htmlFor="">Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">Submit now<img src={while_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
