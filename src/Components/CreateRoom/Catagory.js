import React, { useState } from 'react';
import "../../css/bootstrap.css";
import {useHistory} from 'react-router';
import Header from '../PageComps/Header';
import Footer from '../PageComps/Footer';
import {Film, QuestionCircleFill, CupStraw, Headphones, PersonFill, Circle, CircleFill} from 'react-bootstrap-icons';

export default function CreateHome() {
    const history = useHistory();
    //const [category, setCategory] = useRecoilState(Category);
    const [isSelected, setIsSelected] = useState(() => {
        let initialState = [];
        initialState.fill(false, 0, 4);
        return initialState;
    });

    const OnNextPress = () => {
        
        history.push('/custom')
    }

    const OnBackPress = () => {
        history.push('/');
    }

    const OnListClick = (e) => {
        let att = e.target.attributes.val.value;
        let tempArray = [...isSelected];
        let item = !tempArray[e.target.id];
        tempArray.fill(false);
        tempArray[e.target.id] = item;
        setIsSelected(tempArray);
        window.sessionStorage.setItem("category", att);
    }
    return(
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <Header titleText={"First, let others know what you're trying to decide."} />
                    </div>
                </div>
                <div className='row body'>
                    <div className='col-md-8 offset-md-2'>
                        <ul className='formated-list'>
                            <li val="What to eat?" id={0} className='hoverable border border-primary p-2 mb-2' onClick={(e) => OnListClick(e)}><CupStraw className='pr-3' size={60}/> 
                            <span className="text-large">What to eat</span> {isSelected[0] ? <span className='float-right pt-3 pr-5'><CircleFill size={20} /></span> :
                             <span className='float-right pt-3 pr-5'><Circle size={20} /></span>}
                             </li>

                            <li val="What to watch?" id={1} className='hoverable border border-primary p-2 mb-2' onClick={(e) => OnListClick(e)}><Film className='pr-3' size={60}/> 
                            <span className="text-large">What to watch</span> {isSelected[1] ? <span className='float-right pt-3 pr-5'><CircleFill size={20} /></span> :
                             <span className='float-right pt-3 pr-5'><Circle size={20} /></span>}
                             </li>

                            <li val="What to listen to?" id={2} className='hoverable border border-primary p-2 mb-2' onClick={(e) => OnListClick(e)}><Headphones className='pr-3' size={60}/> 
                            <span className="text-large">What to listen to</span> {isSelected[2] ? <span className='float-right pt-3 pr-5'><CircleFill size={20} /></span> :
                             <span className='float-right pt-3 pr-5'><Circle size={20} /></span>}
                             </li>

                            <li val="What to wear?" id={3} className='hoverable border border-primary p-2 mb-2' onClick={(e) => OnListClick(e)}><PersonFill className='pr-3' size={60}/> 
                            <span className="text-large">What to wear</span> {isSelected[3] ? <span className='float-right pt-3 pr-5'><CircleFill size={20} /></span> :
                             <span className='float-right pt-3 pr-5'><Circle size={20} /></span>}
                             </li>

                            <li val="Custom?" id={4} className='hoverable border border-primary p-2 mb-2' onClick={(e) => OnListClick(e)}><QuestionCircleFill className='pr-3' size={60}/>
                            <span className="text-large">Something else</span> {isSelected[4] ? <span className='float-right pt-3 pr-5'><CircleFill size={20} /></span> :
                             <span className='float-right pt-3 pr-5'><Circle size={20} /></span>}
                             </li>
                        </ul>                  
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-8 offset-md-2 text-center'>
                        <Footer enabledBack={true} enabledNext={isSelected.includes(true) ? true : false} onNextPress={OnNextPress} onBackPress={OnBackPress} />
                    </div>
                </div>
            </div>
        </div>
    )
}