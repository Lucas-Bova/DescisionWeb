export default async function PostRoom(token) {
       return await fetch(process.env.REACT_APP_DECISION_API_ROUTE + '/rooms', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': 'bearer ' + token,     
                'Content-Type': 'application/json'       
            },
            body: {
                
            }
        })
}