import React, { useState, useEffect } from 'react';
import "../../css/bootstrap.css";
import {useHistory} from 'react-router';
import Header from '../PageComps/Header';
import Footer from '../PageComps/Footer';
import OptionListItem from './OptionListItem';

export default function CustomRoom() {
    const history = useHistory();
    const [inputValue, setInputValue] = useState('');

    const [optionList, setOptionList] = useState(() => {
        if (window.sessionStorage.getItem("options")) {
            return JSON.parse(window.sessionStorage.getItem("options"));
        }
        return [];
    })

    useEffect(() => {
        window.sessionStorage.setItem("options", JSON.stringify([...optionList]));
    }, [optionList])

    const OnNextPress = () => {
        history.push('/roomfinal');
    }
    const OnBackPress = () => {
        history.push('/catagory');
    }

    const OnDelete = (e) => {
        let temp = [...optionList];
        temp.splice(e.target.id, 1)
        setOptionList(temp);
    }

    const HandleEdit = (option, index) => {       
        let temp = [...optionList]
        temp.splice(index, 1, option)
        setOptionList(temp);
    }

    const HandleSubmit = (e) => {
        if (e.key === 'Enter' || e.type === 'click'){
            setOptionList([...optionList, inputValue]);
            setInputValue('');
        }
    }

    return(
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <Header titleText={"OK! Give us some options."} />
                    </div>
                </div>
                <div className='row body'>
                    <div className='col-md-8 offset-md-2 text-center mb-4'>
                        <input className="col-8 p-2" type='text' maxLength="60" onChange={(e) => setInputValue(e.target.value)} value={inputValue} onKeyPress={(e) => HandleSubmit(e)} />
                        <button className='ml-1 col-3 btn btn-primary' onClick={(e) => HandleSubmit(e)}>Add</button>
                    </div>
                    <div className='col-md-8 offset-md-2'>
                        <ul className="formated-list text-center">
                            {optionList.map((value, index) => {
                                 return <OptionListItem key={index} index={index} value={value} onEdit={HandleEdit} onDelete={OnDelete} />
                            })}
                        </ul>
                    </div>
                    <div className='col-md-8 offset-md-2 text-center'>
                        {optionList && optionList.length ? <p className="text-large"><u>Hit the next button when you are done!</u></p> : ""}
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-8 offset-md-2 text-center'>
                        <Footer enabledBack={true} enabledNext={optionList && optionList.length ? true : false} onNextPress= {optionList && optionList.length ? OnNextPress : null} onBackPress={OnBackPress} />
                    </div>
                </div>
            </div>
        </div>
    )
}