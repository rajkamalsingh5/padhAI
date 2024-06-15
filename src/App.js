import Header  from "./components/Header";
import Home from "./components/Home";
// import About from "./components/About.jsx";
import Chatbot from "./components/chatbot/chabot.jsx";
import Notes from "./components/Notes/Main.jsx";
import Study from "./components/Study.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
// import { useState } from "react";
import ContextProvider from './Context/context.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  { Toaster } from "react-hot-toast";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
// import "./styles/chatbot.scss";
import "./styles/notes.scss";
import "./styles/main.scss";
import "./styles/study.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/about.scss";

function App() {
  
  return  <>
   <ContextProvider>
   <Router>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="#about" element={<About />} /> */}
        <Route path="/doubts" element={<Chatbot />} />
        <Route path="/study" element={<Study />} />
       
        <Route path="/notes" element={<Notes />} />
       {/* </ContextProvider>, */}

      </Routes>

      <Footer />
      <Toaster />
    </Router>
    </ContextProvider>
    </>
}
export default App;