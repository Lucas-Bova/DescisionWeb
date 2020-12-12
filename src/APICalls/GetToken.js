export default async function GetToken() {
    const payload = {
        'client_id': process.env.REACT_APP_CLIENT_ID,
        'client_secret': process.env.REACT_APP_CLIENT_SECRET,
        'scope': process.env.REACT_APP_SCOPE,
        'grant_type': process.env.REACT_APP_GRANT_TYPE
    }
    const parms = Object.keys(payload).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(payload[key])).join('&');
       return await fetch(process.env.REACT_APP_DECISION_AUTH_ROUTE, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',    
            },
            body: parms
        })
        //add token to recoil
}