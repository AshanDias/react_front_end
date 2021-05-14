import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';

import User from '../../../model/User';
import { Link } from 'react-router-dom'

import './signup.css';
var html = "";
let txtName = React.createRef();
let txtAddress = React.createRef();
let txtPhone = React.createRef();
let txtEmail = React.createRef();
let txtPassword = React.createRef();
class SignUp extends React.Component {
  user = new User();

  constructor(props) {
    super(props);
    //this.signUpUser();
  }

  render() {


    return (
      <div class="container p-5">
        <img src="asset/account.png" />
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <h1>SignIn</h1>
            <div class="form-group">
              <input type="text" ref={txtName} class="form-control" name="" id="" aria-describedby="helpId" placeholder="Name"  />
            </div>
            <div class="form-group">
              <input type="text" ref={txtAddress} class="form-control" name="" id="" aria-describedby="helpId" placeholder="Address" />
            </div>
            <div class="form-group">
              <input type="text" ref={txtPhone} class="form-control" name="" id="" aria-describedby="helpId" placeholder="Phone"/>
            </div>
            <div class="form-group">
              <input type="text" ref={txtEmail} class="form-control" name="" id="" aria-describedby="helpId" placeholder="Email" />
            </div>
            <div class="form-group">
              <input type="password" ref={txtPassword} class="form-control" name="" id="" aria-describedby="helpId" placeholder="Password"  />
            </div>

            <button class="btn btn-success btn-full btn-block" onClick={this.signUpUser}>Sign Up</button>
            <Link class="btn btn-link" to="/signin">Sign In</Link>
          </div>
          <div class="col-lg-4"></div>
        </div>
      </div>
    );
  }
 
  signUpUser = () => {
    this.user.email = txtEmail.current.value;
    this.user.password = txtPassword.current.value;;
    this.user.name = txtName.current.value;
    this.user.address = txtAddress.current.value;
    this.user.phone = txtPhone.current.value; 
    console.log(this.user);
    var result = this.user.createUser(this.user);
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




export default SignUp;
