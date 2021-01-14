import React, {useState, useEffect} from 'react';
import "../css/bootstrap.css";
import "../css/App.css";
import OptionCard from "./OptionCard"
import { Swipeable } from 'react-swipeable';
import {CheckCircle, XCircle, Circle} from 'react-bootstrap-icons';
import Finish from './Finish';
import {useCookies} from 'react-cookie';
import GetRoom from '../APICalls/GetRoom';
import {useRecoilValue} from 'recoil';
import { APIToken } from '../Recoil/Atoms/token';
import Loader from '../Components/PageComps/Loader';

export default function MainView(props) {

    const [viewIndex, setViewIndex] = useState(0);
    const [yesTracker, setYesTracker] = useState([]);
    const [showAnimation, setShowAnimation] = useState(false);
    const [showCheck, setShowCheck] = useState(false);
    const [room, setRoom] = useState([]);
    const [complete, setComplete] = useState(false);

    const token = useRecoilValue(APIToken);

    const [cookies, setCookie] = useCookies([room.id])

    useEffect(() => {
        if (token){
            GetRoom(props.id, token)
            .then(res => res.json())
            .then(res => setRoom(res))
            .catch(error => console.log(error)); 
        }
    },[token])

    //maybe add a cookie check so we don't have repeat votes
    useEffect(() => {
        if (room) {
            if (cookies[room.id] === "true") {
                setComplete(true)
            }
        }
    }, [room])


    const onNoSwipe = () => {
        setShowAnimation(true);
        setShowCheck(false);
        setTimeout(() => {
            setShowAnimation(false);
        }, 600);

        if (viewIndex + 1 !== room.options.length){
            setViewIndex(viewIndex + 1);
        }
        else{
            setViewIndex(viewIndex + 1);
        }
    }

    const onYesSwipe = (option) => {
        putVote(option)
        setShowAnimation(true);
        setShowCheck(true);
        setTimeout(() => {
            setShowAnimation(false);
        }, 600);
        
        setYesTracker([...yesTracker, viewIndex]);

        if (viewIndex + 1 !== room.options.length){
            setViewIndex(viewIndex + 1);
        }
        else{
            setViewIndex(viewIndex + 1);
        }
    }

    const putVote = async (option) => {
        await fetch(process.env.REACT_APP_DECISION_API_ROUTE + '/options/' + option.id, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                'Authorization': 'bearer ' + token,
            }
        });
    }

    return(
        <div>
            {room.options == null ? <Loader /> :
            <div className="container-fluid min-vh-75">
                {complete ? 
                <div className="col-sm-4 offset-sm-4">
                    <Finish Room_Guid={room.id} Room_Id={room.id} id={props.id} token={props.token}/> 
                </div> : 
                <div>
                <div className="row min-vh-50">
                    {viewIndex < room.options.length ? 
                    <div className="col-sm-4 offset-sm-4 text-center pt-4 pb-5">
                        {showAnimation ? (showCheck ? <CheckCircle color="#2AA198" size={148} /> : <XCircle color="#D33682" size={148} />) : 
                            <Circle color="#839496" size={148} /> }
                    </div> : null
                    }
                </div>
                <div className="row min-vh-50">
                    <div className="col-sm-4 offset-sm-4">
                        {viewIndex < room.options.length ? 
                        <Swipeable onSwipedLeft={(eventData) => onNoSwipe()} onSwipedRight={() => onYesSwipe(room.options[viewIndex])}>
                            {room.options[viewIndex] ? <OptionCard category={room.category} option={room.options[viewIndex]} position={viewIndex + 1} total={room.options.length} 
                            onClickLeft={(eventData) => onNoSwipe()} onClickRight={() => onYesSwipe(room.options[viewIndex])} /> : <Loader /> }
                        </Swipeable>
                            :
                            <Finish Room_Guid={room.id} Room_Id={room.id} id={props.id} token={props.token}/>}
                    </div> 
                </div>
                </div>
            }
            </div>
            }
        </div>
    )
}