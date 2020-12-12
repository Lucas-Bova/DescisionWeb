export default async function PostRoom(token, roomId, optionsArray) {
    //want to work through this whole thing cause its a mess

        function GetOptionItems(roomId) {
            var data = [];
            optionsArray.forEach(option => {
                data.push(
                    {
                        OptionName: `${option}`,
                        VoteCount: 0,
                        Room_Id: `${roomId}`
                    }
                )
            });
            return data;
    }

    var data = GetOptionItems(roomId)
    return await fetch(process.env.REACT_APP_DECISION_API_ROUTE + '/options/', {
         method: 'POST',
         mode: 'cors',
         headers: {
             'Authorization': 'bearer ' + token,     
             'Accept': 'application/json',
             'Content-Type': 'application/json'   
         },
         body: JSON.stringify(data)
     })
}