import React from 'react';
import decode from 'jwt-decode';

function UserFromToken() {
    try {
        const token = localStorage.getItem('current_user_token');
        const loggedUser = decode(token).userName;
        // eslint-disable-next-line
        const loggedUserId = decode(token).id;
        // decode(localStorage.getItem('current_user_token')).id
        // console.log(token + "    from UserFromToken.js");
        // console.log(loggedUser + "    from UserFromToken.js");
         //console.log(loggedUserId + "    from UserFromToken.js");
        return(
            <div>{ loggedUser } </div>
        )
    }
    catch (err) {
        return false;
    }
}
export default UserFromToken;