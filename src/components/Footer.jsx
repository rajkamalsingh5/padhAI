import React from "react";
import {
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiOutlineArrowUp,
  AiFillInstagram,
} from "react-icons/ai";
import me from "../assets/mypic.jpeg"
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Rajkamal Singh</h2>
        <p>“In a world where you can be anything, be kind.”</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/rajkamal-singh-94680521b/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="saurabhsingh75555@gmail.com" target={"blank"}>
            < AiFillMail/>
          </a>
          <a href="https://github.com/rajkamal5" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/rajkamalsingh__?igsh=OGJydTdqeWtqNTRr" target={"blank"}>
            <AiFillInstagram />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;