import React, { useEffect, useState } from 'react';
import "../../css/bootstrap.css";
import {useHistory} from 'react-router';
import Header from '../PageComps/Header';
import Footer from '../PageComps/Footer';
import { APIToken } from '../../Recoil/Atoms/token';
import { useRecoilState } from 'recoil';
import PostRoom from '../../APICalls/PostRoom';
import PostOptions from '../../APICalls/PostOptions';
import GetToken from '../../APICalls/GetToken';
import {ArrowDownSquareFill} from 'react-bootstrap-icons';
import Loader from '../PageComps/Loader';

export default function RoomFinal() {
    const history = useHistory();

    const [roomGuid, setRoomGuid] = useState(() => window.sessionStorage.getItem("roomGuid"));

    //const [optionList, setOptionList] = useRecoilState(OptionList);
    const [optionList, setOptionList] = useState(() => JSON.parse(window.sessionStorage.getItem("options")));
    const [category, setCategory] = useState(() => window.sessionStorage.getItem("category"));
    const [token, setToken] = useRecoilState(APIToken);
    
    useEffect(() => {
        if(token && roomGuid == null) {
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
        if (token && optionList && optionList.length){
            PostRoom(token, category)
            .then(res => res.json())
            //.then(res => {setRoomGuid(res.id); return res})
            .then(res => {window.sessionStorage.setItem("roomGuid", res.id); return res})
            .then(res => PostOptions(token, res.id, optionList))
            .catch(error => console.log(error))
        }
    }

    const link = <React.Fragment><div className="text-large m-3"><ArrowDownSquareFill size={20} /> Click on the link and share it with your friends to decide! <ArrowDownSquareFill size={20} /> </div>
                <div className="border border-secondary p-3 m-3 text-large "><a href={`http://localhost:3000/?id=${roomGuid}`}><u>Descision Time!</u></a></div> </React.Fragment> //copy to clipboard

    return(
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8 offset-2'>
                        <Header titleText={"Alright! Your descision is ready to be made."} />
                    </div>
                </div>
                <div className='row body'>
                    <div className='col-md-8 offset-2 text-center'>
                        <h2 className='text-success border border-success pt-4 pb-4'>{category.length ? category: null}</h2>
                        {optionList && optionList.length ? 
                        <ul className="formated-list text-center">
                            {optionList.map((value, index) => {
                                 return <li key={index} className='border border-primary p-2 mb-1 mt-2'><span className="text-large">{value}</span></li>
                            })}
                        </ul> : <Loader />}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8 offset-2 text-center'>
                        {roomGuid ? link : <Loader />}
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-8 offset-2 text-center'>
                        <Footer enabledBack={false} enabledNext={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}