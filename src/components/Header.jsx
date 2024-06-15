import React, { useEffect, useState } from 'react'
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {motion} from"framer-motion";
import { AiOutlineMenu } from "react-icons/ai";

  
  const Header = () => {
    const [sticky,setSticky]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>50?setSticky(true):setSticky(false);
        })
    },[])

    const[Menu,setMenu]= useState(false);
    const toggleMenu=()=>{
      Menu?setMenu(false):setMenu(true);
    }
  return(
    <nav className={`${sticky?`scrolled`:""}`}>
    <motion.div initial ={{x:"-100%"}} whileInView={{x:0}}>
    <FaGraduationCap/>
    <p style={{fontSize:"2rem" }}>padh<span style={{fontSize:"2rem", color:"red",fontSize:"larger"}}>AI</span></p>
    </motion.div>
    <div className='items'>
        <ul className={Menu?'':'hide'}>
        <Link onClick={toggleMenu}  to="/">Home</Link>
        <Link onClick={toggleMenu} to="/contact">contact</Link>
        <Link onClick={toggleMenu}  to ="/doubts">Doubts</Link>
        <Link onClick={toggleMenu} to ="/notes">Notes</Link>
        <Link onClick={toggleMenu} to ="/study">Study</Link>
        </ul>
    </div>
    <AiOutlineMenu className='menu-icon' onClick={toggleMenu}/>
   </nav>
  )
  };

export default Header;