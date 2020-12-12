import React, { useState } from 'react';
import "../../css/bootstrap.css";
import {useHistory} from 'react-router';
import Header from '../PageComps/Header';
import Footer from '../PageComps/Footer';
import {OptionList} from '../../Recoil/Atoms/optionList';
import { useRecoilState } from 'recoil';

export default function CustomRoom() {
    const history = useHistory();
    const [inputValue, setInputValue] = useState('');

    const [optionList, setOptionList] = useRecoilState(OptionList); 

    const OnNextPress = () => {
        history.push('/roomfinal');
    }
    const OnBackPress = () => {
        history.push('/catagory');
    }

    const HandleSubmit = (e) => {
        if (e.key === 'Enter' || e.type === 'click'){
            setOptionList([...optionList, inputValue]);
            setInputValue('');
        }
    }

    return(
        <div>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-md-8 offset-md-2'>
                        <Header titleText={"OK! Give us some options."} />
                    </div>
                </div>
                <div class='row body'>
                    <div class='col-md-8 offset-md-2 text-center mb-4'>
                        <input class="col-8 p-2" type='text' onChange={(e) => setInputValue(e.target.value)} value={inputValue} onKeyPress={(e) => HandleSubmit(e)} />
                        <button class=' col-3 btn btn-primary' onClick={(e) => HandleSubmit(e)}>Add</button>
                    </div>
                    <div class='col-md-8 offset-md-2'>
                        <ul class="formated-list text-center">
                            {optionList.map((value) => {
                                 return <li class='border border-primary p-2 mb-1 mt-2'><span class="text-large">{value}</span></li>
                            })}
                        </ul>
                    </div>
                    <div class='col-md-8 offset-md-2 text-center'>
                        {optionList && optionList.length ? <p class="text-large"><u>Hit the next button when you are done!</u></p> : ""}
                    </div>
                </div>
                <div class="row">
                    <div class='col-md-8 offset-md-2 text-center'>
                        <Footer enabledBack={true} enabledNext={optionList && optionList.length ? true : false} onNextPress= {optionList && optionList.length ? OnNextPress : false} onBackPress={OnBackPress} />
                    </div>
                </div>
            </div>
        </div>
    )
}