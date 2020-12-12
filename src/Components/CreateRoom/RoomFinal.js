import React, { useEffect, useState } from 'react';
import "../../css/bootstrap.css";
import {useHistory} from 'react-router';
import Header from '../PageComps/Header';
import Footer from '../PageComps/Footer';
import { OptionList } from '../../Recoil/Atoms/optionList';
import { APIToken } from '../../Recoil/Atoms/token';
import { useRecoilState, useRecoilValue } from 'recoil';
import PostRoom from '../../APICalls/PostRoom';
import PostOptions from '../../APICalls/PostOptions';
import GetToken from '../../APICalls/GetToken';
import {ArrowDownSquareFill} from 'react-bootstrap-icons';

export default function RoomFinal() {
    const history = useHistory();

    const [roomGuid, setRoomGuid] = useState('');

    const [optionList, setOptionList] = useRecoilState(OptionList); 
    const [token, setToken] = useRecoilState(APIToken);

    const OnNextPress = () => {
        history.push('/');
    }
    const OnBackPress = () => {
        history.push('/custom');
    }
    
    useEffect(() => {
        if(token) {
            PostRoomData()
        }
        else
        {
            GetToken()
            .then(res => res.json())
            .then(res => setToken(res.access_token))
            .catch(error => console.log(error))
        }
    }, [token])

    const PostRoomData = () => {
        //console.log(`posting room token = ${token} option list = ${optionList}`)
        if (token && optionList && optionList.length){
            PostRoom(token)
            .then(res => res.json())
            .then(res => {setRoomGuid(res.id); return res})
            .then(res => PostOptions(token, res.id, optionList))
            .catch(error => console.log(error))
        }
    }

    const link = <React.Fragment><div class="text-large m-3"><ArrowDownSquareFill size={20} /> Click on the link and share it with your friends to decide! <ArrowDownSquareFill size={20} /> </div>
                <div class="border border-secondary p-3 m-3 text-large "><a href={`http://localhost:3000/?id=${roomGuid}`}><u>Descision Time!</u></a></div> </React.Fragment> //copy to clipboard

    return(
        <div>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-md-8 offset-2'>
                        <Header titleText={"Alrighty! Your descision is all ready to be made."} />
                    </div>
                </div>
                <div class='row body'>
                    <div class='col-md-8 offset-2'>
                        {optionList && optionList.length ? 
                        <ul class="formated-list text-center">
                            {optionList.map((value) => {
                                 return <li class='border border-primary p-2 mb-1 mt-2'><span class="text-large">{value}</span></li>
                            })}
                        </ul> : <p>Loading...</p>}
                    </div>
                </div>
                <div class='row'>
                    <div class='col-md-8 offset-2 text-center'>
                        {roomGuid ? link : <p>loading...</p>}
                    </div>
                </div>
                <div class="row">
                    <div class='col-md-8 offset-2 text-center'>
                        <Footer enabledBack={true} enabledNext={optionList && optionList.length ? true : false} 
                        onNextPress= {optionList && optionList.length ? OnNextPress : false} onBackPress={OnBackPress} />
                    </div>
                </div>
            </div>
        </div>
    )
}