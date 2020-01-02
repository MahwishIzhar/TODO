import React from 'react';
import todo from '../todo.png';
import './MainPage.css';

const MainPage = (props) => {

    return(
    
        <div className="mainClass">
              <div className="innerClass">
                
                <img src={todo} style = {{width: "75px",height: "75px"}} />
              
                <h1 >{props.heading}</h1>
                
                
              </div>
              <button onClick={() => props.onClick()}> Login</button>
        </div>
   
    );

}

export default MainPage;