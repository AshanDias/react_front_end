import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import User from '../../../model/User';
import './signin.css';
var html = "";
let txtEmail = React.createRef();
let txtPassword = React.createRef();
class SignIn extends React.Component {
  user = new User();
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div class="container p-5">
        <img src="asset/account.png" />
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <h1>Signin</h1>
            <div class="form-group">
              <input type="text" ref={txtEmail} class="form-control" name="" id="" aria-describedby="helpId" placeholder="Email" />
            </div>
            <div class="form-group">
              <input type="password" ref={txtPassword} class="form-control" name="" id="" aria-describedby="helpId" placeholder="Password" />
            </div>
            <button class="btn btn-success btn-full btn-block" onClick={this.userSignin}>Sign In</button>
            <Link class="btn btn-link" to="/signup">Sign Up</Link>

          </div>
          <div class="col-lg-4"></div>
        </div>
      </div>
    );
  }


  userSignin = () => {
    this.user.email = txtEmail.current.value;
    this.user.password = txtPassword.current.value;;
    
    var result = this.user.login(this.user);
    result.then(data => {
      if (data.status == 200) { 
        this.user.createUserSession(data.data);
        window.location.href = "/"

      }

    }).catch(err => { 
      swal("Information", err.message, "info");
    }); 

  }

}




export default SignIn;
