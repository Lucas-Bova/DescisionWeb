import React from 'react';
import "../../css/bootstrap.css";

export default function loader() {
    
    return (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>       
    )
}