import React from "react";
import toast from "react-hot-toast";
import emailJs from "@emailjs/browser";
import {useRef} from "react";
import { motion } from "framer-motion";
const Contact = () => {
  const form =useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    e.target.reset();
    toast.success("Message Sent");
    
    emailJs.sendForm('service_motjujj','template_jqr0s2k',form.current,'cd-Za80oTWhiM0JFn')
    .then(res=>console.log("email sent"))
    .catch(err=>console.log("Error"))
  }
  return (
    <section className="contact" id="contact">
      <motion.form ref={form} onSubmit={sendEmail}
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <h2>Contact Founder</h2>
        <input type="text" name ='name' placeholder="Enter Your Name .." required />
        <input type="email" name='email' placeholder="abc@gmail.com"  required/>

        <textarea name='message'  placeholder="Write your message.." cols="30" rows="10" required></textarea>

        <button type="submit">Submit</button>
      </motion.form>

        <motion.div className="img_con"
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
        >
        </motion.div>
    </section>
  );
};

export default Contact;