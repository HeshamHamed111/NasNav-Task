import React from 'react';
import './button.css'; 
const Button = ({color, classcomp, children, callsack}) => {
    return (
        <button className= {`${classcomp? 'button ' + classcomp: 'button'}`} style={{color:{color}, border: "1px solid #F00" }}
        onClick={()=> callsack(children)}>
        {children}
        </button>
    )
} 
export default Button;