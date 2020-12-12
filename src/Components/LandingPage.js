import React, {useState, useEffect} from 'react';
import "../css/bootstrap.css";
import "../css/App.css";
import { useParams } from 'react-router';
import {useLocation} from 'react-router-dom';
import MainView from './MainView';
import GetToken from '../APICalls/GetToken';
import {APIToken} from '../Recoil/Atoms/token';
import {useRecoilState} from 'recoil';
import CreateHome from './CreateRoom/CreateHome';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function LandingPage(props) {
    //get api token here, put in recoil
    const [token, setToken] = useRecoilState(APIToken)
    useEffect(() => {
        GetToken()
        .then(res => res.json())
        .then(res => setToken(res.access_token))
        .catch(error => console.log(error))
    },[])
    let query = useQuery();
    let id  = query.get("id");
    return(
        <React.Fragment>
            {id == null ? <CreateHome /> : <MainView id={id} /> }
        </React.Fragment>
    )
}