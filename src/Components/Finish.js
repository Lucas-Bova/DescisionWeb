import React, {useEffect, useState} from 'react';
import "../css/bootstrap.css";
import {CheckCircle, XCircle, ArrowRepeat} from 'react-bootstrap-icons';
import {useCookies} from 'react-cookie';
import GetRoom from '../APICalls/GetRoom';
import {useRecoilValue} from 'recoil';
import { APIToken } from '../Recoil/Atoms/token';
import Loader from '../Components/PageComps/Loader';

//need to think through how to display stuff
export default function Finish(props) {

    const [room, setRoom] = useState([])
    const [cookies, setCookie] = useCookies([room.id])

    const token = useRecoilValue(APIToken);

    useEffect(() => {
        if (token){
            fetchRoom()
        }
    },[token])

    useEffect(() => {
        if (room.id){
            setCookie(room.id, true, {path: "/"});
        }
    }, [room])

    const fetchRoom = () => {
        GetRoom(props.id, token)
            .then(res => res.json())
            .then(res => setRoom(res))
            .catch(error => console.log(error));
    }

    const sortOptions = () => {
        var sortedOptions = room.options.sort((a, b) => (a.voteCount >= b.voteCount) ? -1 : 1)
        return sortedOptions;
    }

    return(

        <div className="card bg-dark w-100 text-center">
        {room.options == null ? <Loader /> :
        <React.Fragment>
            <h2 className="card-header text-success">Your votes are in!</h2>
            <h3 className="card-header text-primary">{room.category}</h3>
            <div className="card-body text-left">
                {room.options[0] ? sortOptions().map((option, index) => {
                    return <div key={index} className="border border-success mb-1 rounded">
                            {index === 0 ? <CheckCircle className="mb-2 ml-1" color={"#2AA198"} size={24} /> : <XCircle className="mb-2 ml-1" color={"#D33682"} size={24} />}
                            <span className="text-primary" style={{fontSize:25}}> {option.optionName} - {option.voteCount}</span>
                           </div>
                }): <Loader />}
            </div>
            <div className="card-footer text-center">
                {room.options[0] ? <h2 className="text-success">Current leader is: {sortOptions()[0].optionName}</h2> : <h3>loading...</h3>}
            </div>
            <div className="card-footer text-center">
                <button className="mh-100 btn-primary" onClick={fetchRoom}> Refresh <ArrowRepeat /></button>
            </div>
        </React.Fragment>
        }
        </div>
    )
}