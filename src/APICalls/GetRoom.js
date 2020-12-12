import { useEffect } from 'react';
import {useRecoilValue} from 'recoil';
import {APIToken} from '../Recoil/Atoms/token';

export default async function GetRoom(id, token) {
       return await fetch(process.env.REACT_APP_DECISION_API_ROUTE + '/rooms/' + id, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': 'bearer ' + token,     
                'Accept': 'application/json',
                'Content-Type': 'application/json'       
            }
        })
}