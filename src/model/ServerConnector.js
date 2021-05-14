// All server transactions going true this model
import React from 'react';
import axios from 'axios';
class ServerConnector extends React.Component {
    //Put your baseurl to here
    _BASE_URL = "http://localhost:4000";
    _API = null;

    get(_API) {
        axios.get(_API)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    post(_API, data) {

        return Promise.resolve(axios.post(_API, data));
    }



    // Local storage
    saveStatusOnLocalStorage(name, statusObj) {
        return Promise.resolve(sessionStorage.setItem(name, JSON.stringify(statusObj)));
    }

    removeStatusOnLocalStorage() {
        return Promise.resolve(sessionStorage.clear());
    }

    showLocalStorage(name) {
        return Promise.resolve(sessionStorage.getItem(name));
    }

}

export default ServerConnector;