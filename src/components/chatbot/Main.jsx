import React, { useContext } from 'react'
import "./main.scss"
import { RiFindReplaceLine } from "react-icons/ri";
import { Context } from '../../Context/context.jsx'
import {  BsChevronDown } from "react-icons/bs";

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)


  return (
    <div className='main'>
        <div className="nav">
            <p>padh<span style={{color:"red",fontSize:"larger"}}>AI</span>-Your study Buddy</p>
        </div>
        <div className="main-container">

            {!showResult
            ?<>
               <div className="greet">
                <p><span>Hello, Hustlers!</span></p>
                <p>Ask your Doubts Here ?</p>
                <BsChevronDown />
            </div>
           
            
            </>
            :<div className='result'>
                <div className="result-title">
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                         <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                </div>
                </div>
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your queries here & wait for 15 sec' />
                    <div>
                       {input?<RiFindReplaceLine onClick={()=>onSent()} />:null} 
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Main