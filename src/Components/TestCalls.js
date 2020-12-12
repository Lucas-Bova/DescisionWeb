import React, {useEffect, useState} from 'react';
import "../css/bootstrap.css";
import {CheckCircle, XCircle} from 'react-bootstrap-icons';
import {useCookies} from 'react-cookie';
import GetRoom from '../APICalls/GetRoom';

//need to think through how to display stuff
export default function TestCalls(props) {
    const [room, setRoom] = useState([]);

    useEffect(() => {
        //fetchRoom();
        GetRoom();
        // res
        // .then(res => res.json())
        // .then(res => console.log(res))
        // .then(res => setRoom(res))
        // .catch(error => console.log(error)); 
    }, [])

    return (
        <div>hello world</div>
    )
}