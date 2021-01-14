export default async function PostRoom(token, category) {
       return await fetch(process.env.REACT_APP_DECISION_API_ROUTE + '/rooms' + '?category=' + category, {
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