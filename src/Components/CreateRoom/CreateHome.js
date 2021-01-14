import React, { useEffect } from 'react';
import "../../css/bootstrap.css";
import {useHistory} from 'react-router';
import Header from '../PageComps/Header';
import Footer from '../PageComps/Footer';

export default function CreateHome() {
    const history = useHistory();

    useEffect(() => {
        window.sessionStorage.clear();
    }, [])

    const OnNextPress = () => {
        history.push('/catagory');
    }
    return(
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>
                        <Header titleText={"Hello you indecisive human!"} />
                    </div>
                </div>
                <div className='row body'>
                    <div className='col-md-8 col-md-8 offset-md-2'>
                        <h3 className='text-secondary text-center'>Welcome to the app that helps you make the truly important decisions in life. Like where to eat and what series to binge...
                            So, if you are ready to embark on this incredible journey of self discovery, hit the <span className='text-primary'>next</span> button!</h3>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-8 offset-md-2 text-center'>
                        <Footer enabledBack={false} enabledNext={true} onNextPress={OnNextPress} />
                    </div>
                </div>
            </div>
        </div>
    )
}