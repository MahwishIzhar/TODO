import React from 'react';
import './Input.css';

const Input = (props) =>
{

    return(
    
    <div className="inputDiv">
        <label className="labelName">{props.labelName}</label> 
        <input className="inputField" type="text" placeholder={props.PlaceHolder} value={props.value} onChange={(event)=>props.onChange(event)}/>
        
    </div>
    );
}

export default Input;