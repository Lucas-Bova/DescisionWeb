import React from 'react';
import {ArrowLeftSquareFill, ArrowRightSquareFill} from 'react-bootstrap-icons';

export default function Footer(props) {

    //react bootstrap icons

    return (
        <React.Fragment>
                <button class={`col-xs-2 btn-primary ${props.enabledBack ? 'hoverable' : 'disabled'}`} title={"Back"} onClick={props.onBackPress}>
                    <ArrowLeftSquareFill title={"Back"} titleStyle={""} onClick={props.onBackPress}/> Back
                    </button>
                <button class={`col-xs-2 offset-2 btn-primary ${props.enabledNext ? 'hoverable' : 'disabled'}`} title={"Back"} onClick={props.onNextPress}>
                Next <ArrowRightSquareFill title={"Next"} onClick={props.onNextPress}/>
                    </button>
                <p >@decisionsApp</p>
        </React.Fragment>
    );
}