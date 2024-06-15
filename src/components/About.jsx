import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";

const About = () => {
  return (
    <section className="about" id="about">
      <main>
        <h1>What is padh<span style={{color:"red"}}>AI</span>?</h1>

        <article>
          <h4>get your all queries resolved..</h4>
          <p>
             padhAI is your one stop solution to all queries you can use this web app to study various subjects and also you can resolve all your doubts using bot and in case of any new learning you can make your own notes
          </p>

          <p>
            Explore various study materials in just one click.
          </p>

          <Link to="/study">
            <RiFindReplaceLine />
          </Link>
        </article>
      </main>
    </section>
  );
};

export default About;