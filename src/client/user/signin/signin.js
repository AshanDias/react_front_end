import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import './signin.css';
var html = "";

class SignIn extends React.Component {

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
          <h1>Signin</h1>
            <div class="form-group">
              <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Email" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Password" />
            </div>
            <button class="btn btn-success btn-full btn-block">Sign In</button>
            <Link class="btn btn-link" to="/signup">Sign Up</Link>
           
            </div>
          <div class="col-lg-4"></div> 
        </div> 
      </div>
    );
  }


  fetchAllProducts = () => {


  }

}




export default SignIn;
