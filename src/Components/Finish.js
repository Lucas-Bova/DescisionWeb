import React, {useEffect, useState} from 'react';
import "../css/bootstrap.css";
import {CheckCircle, XCircle, ArrowRepeat} from 'react-bootstrap-icons';
import {useCookies} from 'react-cookie';
import GetRoom from '../APICalls/GetRoom'
import { APIToken } from '../Recoil/Atoms/token';

//need to think through how to display stuff
export default function Finish(props) {

    const [room, setRoom] = useState([])
    const [cookies, setCookie] = useCookies([props.Room_Guid])

    useEffect(() => {
        if (props.token){
            fetchRoom();
        }
    },[props.token])

    useEffect(() => {
        setCookie(props.Room_Guid, false, {path: "/"});
    }, [])

    const fetchRoom = () => {
        GetRoom(props.id, props.token)
            .then(res => res.json())
            .then(res => setRoom(res))
            .catch(error => console.log(error));
    }

    const sortOptions = () => {
        var sortedOptions = room.options.sort((a, b) => (a.voteCount >= b.voteCount) ? -1 : 1)
        return sortedOptions
    }

    return(

        <div class="card bg-dark w-100 text-center">
        {room.options == null ? <div>Loading...</div> :
        <React.Fragment>
            <h2 class="card-header text-success">Your votes are in!</h2>
            <div class="card-body text-left">
                {room.options[0] ? sortOptions().map((option, index) => {
                    return <div class="border border-success mb-1 rounded">
                            {index === 0 ? <CheckCircle class="mb-2 ml-1" color={"#2AA198"} size={24} /> : <XCircle class="mb-2 ml-1" color={"#D33682"} size={24} />}
                            <span class="text-primary" style={{fontSize:25}}> {option.optionName} - {option.voteCount}</span>
                           </div>
                }): <h3>Loading...</h3>}
            </div>
            <div class="card-footer text-center">
                {room.options[0] ? <h2 class="text-success">Current leader is: {sortOptions()[0].optionName}</h2> : <h3>loading...</h3>}
            </div>
            <div class="card-footer text-center">
                <button class="mh-100 btn-primary" onClick={fetchRoom}> Refresh <ArrowRepeat /></button>
            </div>
        </React.Fragment>
        }
        </div>
    )
}