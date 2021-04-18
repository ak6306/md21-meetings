import React from 'react'

function About() {
    return (
        <div style= {{display: 'flex', height: '91vh', backgroundColor: '#E5E5E5'}}>
            <div style = {{width: '350px'}}>
                
            </div>
            <div style = {{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <h1>About Me</h1>
            <br/>
            <div style = {{backgroundColor: '#fff', width: '90%', height: '60vh', marginTop: '40px'}}>
                <div style = {{margin: '60px 70px', fontSize: '18px'}}>
                <p>Name: Aditya Kumar Choudhary <br></br> 
                    Roll: 1829035 <br></br>
                    Github Profile: <a href="https://github.com/ak6306">github.com/ak6306</a><br></br>
                    Skills: JavaScript, Node.js, MongoDB, HTML/CSS,  React, Java, etc
                </p>
                <br></br>
                    Projects:
                    <ul style = {{marginLeft: "30px"}}>
                        <li>KIIT ASK  -- A simple forum for kiitians --  Check it out <a href = "https://kiitask.herokuapp.com">here</a></li>
                        <li>Lexicon Tutorials --Designed backend and deployed --  Check it out <a href="https://www.lexicontutorials.in">here</a></li>
                        <li>Amigos Adda</li>
                        <li>BB Bot</li>
                        <li>Twitter Bot</li>
                    </ul>
                </div>
                
            </div>
            </div>
            
        </div>
    )
}

export default About
