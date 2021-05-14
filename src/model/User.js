import React from 'react';
import ServerConnector from '../model/ServerConnector';
class User extends React.Component {
    serverConnector = new ServerConnector();
    email = null;
    password = null;
    name = null;
    address = null;
    phone = null;
    _token

    login(user)
    {
        this.serverConnector._API = this.serverConnector._BASE_URL+"/api/login";
        return this.serverConnector.post(this.serverConnector._API,user);
    }

    createUser(user)
    {
        this.serverConnector._API = this.serverConnector._BASE_URL+"/api/register";
        return this.serverConnector.post(this.serverConnector._API,user);
    }

    createUserSession(user)
    {
        //Save user token and user information on local storage
        //Save the space between bearer and token (bearer __ Token)
        this._token = "bearer"+" "+user.token
        this.serverConnector.saveToekn(this._token);
        this.serverConnector.saveStatusOnLocalStorage("user",JSON.stringify(user.user));
    }

    isUserLoggedIn()
    {
        return this.serverConnector.showLocalStorage("_token");
        
    }

    removeUserSession()
    {
        return this.serverConnector.removeStatusOnLocalStorage();
    }



  }

  export default User;
