import React, { useState } from 'react';
import "../../css/bootstrap.css";
import {Switch, useHistory} from 'react-router';
import Header from '../PageComps/Header';
import Footer from '../PageComps/Footer';
import {Film, QuestionCircleFill, CupStraw} from 'react-bootstrap-icons';

export default function CreateHome() {
    const history = useHistory();
    const [nextRoute, setNextRoute] = useState('');

    const OnNextPress = () => {
        history.push()
    }

    const OnBackPress = () => {
        history.push('/');
    }

    const OnListClick = (e) => {
        switch (e.target.id) {
            case 'food':
                history.push('/food');
                break;
            case 'movie':
                history.push('/movie');
                break;
            case 'custom':
                history.push('/custom');
                break;
        }
    }
    return(
        <div>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-md-8 offset-md-2'>
                        <Header titleText={"What do you want to decide!"} />
                    </div>
                </div>
                <div class='row body'>
                    <div class='col-md-8 offset-md-2'>
                        <ul class='formated-list'>
                            <li id='food' class='hoverable border border-primary p-2 mb-2' onClick={() => history.push('/food')}><CupStraw class='pr-3' size={60}/> 
                            <span class="text-large">Food Near Me</span></li>
                            <li id='movie' class='hoverable border border-primary p-2 mb-2' onClick={() => history.push('/movie')}><Film class='pr-3' size={60}/> 
                            <span class="text-large">Movies Near Me</span></li>
                            <li id='custom' class='hoverable border border-primary p-2 mb-2' p-1 mb-1 onClick={() =>history.push('/custom')}><QuestionCircleFill class='pr-3' size={60}/>
                            <span class="text-large">Custom</span></li>
                        </ul>                      
                    </div>
                </div>
                <div class="row">
                    <div class='col-md-8 offset-md-2 text-center'>
                        <Footer enabledBack={true} enabledNext={false} onNextPress={OnNextPress} onBackPress={OnBackPress} />
                    </div>
                </div>
            </div>
        </div>
    )
}