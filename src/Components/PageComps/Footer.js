import React from 'react';
import {ArrowLeftSquareFill, ArrowRightSquareFill} from 'react-bootstrap-icons';

export default function Footer(props) {

    //react bootstrap icons

    return (
        <React.Fragment>
            <div className="mt-3">
                <button className={`float-left pt-2 pb-2 pr-4 pl-3 col-xs-2 btn-primary ${props.enabledBack ? 'hoverable' : 'disabled'}`} title={"Back"} onClick={props.onBackPress}>
                    <ArrowLeftSquareFill title={"Back"} onClick={props.onBackPress}/> Back
                    </button>
                <button className={`float-right pt-2 pb-2 pr-3 pl-4 col-xs-2 btn-primary ${props.enabledNext ? 'hoverable' : 'disabled'}`} title={"Next"} onClick={props.onNextPress}>
                Next <ArrowRightSquareFill title={"Next"} onClick={props.onNextPress}/>
                    </button>
            </div>
                <p className="pt-5">@decisionsApp</p>
        </React.Fragment>
    );
}