import React from 'react';
import "../../css/bootstrap.css";

export default function Header(props) {
    
    return (
          <h1 className="text-center text-primary">{props.titleText}</h1>        
    )
}