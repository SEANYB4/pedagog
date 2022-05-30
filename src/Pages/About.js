import React from "react";
import { useNavigate } from 'react-router-dom';

function About() {

    let navigate = useNavigate();

    return (
        <div>
             <h2>About</h2>

            
                THIS IS THE ABOUT PAGE <button onClick={() => {
                navigate("/forum");
                }}>Change to forum</button>
        </div>
       
        )
  }
  
export default About;