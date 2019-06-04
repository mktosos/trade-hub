import React from 'react';
import decode from 'jwt-decode';

function UserFromToken() {
    try {
        const token = localStorage.getItem('current_user_token');
        const loggedUser = decode(token).userName;
        // eslint-disable-next-line
        const loggedUserId = decode(token).id;
        // console.log(token + "    from UserFromToken.js");
        // console.log(loggedUser + "    from UserFromToken.js");
        // console.log(decode(token).id + "    from UserFromToken.js");
        return(
            <div> Hi { loggedUser } </div>
        )
    }
    catch (err) {
        return false;
    }
}
export default UserFromToken;