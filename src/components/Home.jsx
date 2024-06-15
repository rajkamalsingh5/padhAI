import React from 'react'
import About from "./About"
import {  motion } from "framer-motion";
import Typewriter from "typewriter-effect";
const Home = () => {
    const animations = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        },
      };
  return (
    <>
    <section className='home' id="home">  
    <div id="home">
      <section>
        <div className='text'>
          <motion.h1 {...animations.h1}>
          "Education is the most powerful weapon which you can use to change the world."
          <br/>
          -Nelson Mandela
          </motion.h1>
          <Typewriter
            options={{
              strings: ["Welcome Hustlers !","Study Here ","Clear Doubts Using bot","Make Notes","All at One place","Lets Grow Together"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
        </div>
      </section>
      <section>
       
      </section>
    </div>
    </section>
   <About/> 
   </>
  )
}

export default Home;