// All server transactions going true this model
import React from 'react';
import axios from 'axios';
class ServerConnector extends React.Component {
    //Put your baseurl to here
    _BASE_URL = "http://localhost:4000";
    _API = null;
    _token = null;

    get(_API) {
        this._token = window.sessionStorage.accessToken;
        return Promise.resolve(axios.get(_API, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json", Authorization: this._token
            }
        }));
    }

    post(_API, data) {

        return Promise.resolve(axios.post(_API, data));
    }

    // Local storage
    saveStatusOnLocalStorage(name, statusObj) {
        return Promise.resolve(sessionStorage.setItem(name,statusObj));
    }

    saveToken(token) {
        return window.sessionStorage.accessToken = token;
    }

    removeStatusOnLocalStorage() {
        window.sessionStorage.clear();
        return Promise.resolve(sessionStorage.clear());
    } 

    showLocalStorage(value) {
        return Promise.resolve(sessionStorage.getItem(value)); 
    }

    getToken() {
        return Promise.resolve(window.sessionStorage.accessToken);
    }

}

export default ServerConnector;