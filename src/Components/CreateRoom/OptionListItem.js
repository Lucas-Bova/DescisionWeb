import React, { useState } from 'react';
import "../../css/bootstrap.css";

export default function OptionListItem(props) {
    const [isEdit, setIsEdit] = useState(false);
    const [optionValue, setOptionValue] = useState("");

    const OnEditButtonClick = () => {
        setOptionValue(props.value);
        setIsEdit(!isEdit);
    }

    const OnEdit = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            props.onEdit(optionValue, e.target.id);
            setIsEdit(!isEdit);
        }
    }

    return(
        <div>
            <li key={props.index} className='border border-primary p-2 mb-1 mt-2'>
                {isEdit ? 
                <React.Fragment>
                    <input id={props.index} className="col-4 p-2" type="text" maxLength="60" value={optionValue} onChange={(e) => setOptionValue(e.target.value)} onKeyPress={(e) => OnEdit(e)} />
                    <button id={props.index} className="col-2 btn-primary float-right mt-1" name="Done" onClick={(e) => OnEdit(e)}>Done</button>
                </React.Fragment>
                 : 
                 <React.Fragment>
                    <span className="text-large offset-4">{props.value}</span>
                    <button id={props.index} className="col-2 btn-primary float-right mt-1" name="Remove" onClick={(e) => props.onDelete(e)}>Remove</button>
                    <button id={props.index} className="col-2 btn-primary float-right mr-1 mt-1" name="Edit" onClick={() => OnEditButtonClick()}>Edit</button> 
                 </React.Fragment>}
            </li>
        </div>

    )
}