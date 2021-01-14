import { useEffect } from 'react';
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