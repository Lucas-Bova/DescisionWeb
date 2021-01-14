import React from 'react';
import "../css/bootstrap.css";
import {ChevronDoubleLeft, ChevronDoubleRight, CheckCircle, XCircle} from 'react-bootstrap-icons';
import {useMediaQuery} from 'react-responsive';


export default function OptionCard(props) {

    const isMobile = useMediaQuery({query: '(max-width: 1224px)'});

    return(
        <div className="card bg-dark w-100 text-center">
            <h2 className="card-header text-primary pb-3 pt-3">{props.category}</h2>
            <h3 className="card-header text-success">Option {props.position} of {props.total}</h3>
            <div className="card-body">
                <h1 className="card-title text-primary">{props.option.optionName}</h1>
            </div>
            <div className="card-footer text-center">
                <CheckCircle style={{cursor:'pointer'}} onClick={props.onClickRight} className="mr-1" size={30} color={"#2AA198"} />
                <ChevronDoubleLeft style={{cursor:'pointer'}} onClick={props.onClickRight} className="mr-5" size={30} color={"#B58900"} />
                <span className="font-weight-bold text-success" style={{fontSize:26}}>{isMobile ? "Swipe" : "Click"}</span>
                <ChevronDoubleRight style={{cursor:'pointer'}} onClick={props.onClickleft} className="ml-5" size={30} color={"#B58900"} />
                <XCircle style={{cursor:'pointer'}} onClick={props.onClickLeft} className="ml-1" size={30} color={"#D33682"} />
            </div>
        </div>
    )
}