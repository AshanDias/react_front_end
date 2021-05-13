import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './signup.css';
var html = "";

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.fetchAllProducts();
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
                <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Name" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Address" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Phone" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Email" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Password" />
              </div>

              <button class="btn btn-success btn-full btn-block">Sign Up</button>
              <Link class="btn btn-link" to="/signin">Sign In</Link>
            </div>
            <div class="col-lg-4"></div>
          </div>
        </div> 
    );
  }


  fetchAllProducts = () => {


  }

}




export default SignUp;
