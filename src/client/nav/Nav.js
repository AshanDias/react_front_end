import React from 'react'
import User from '../../model/User';
import { Link } from 'react-router-dom'
import '../../App.css';
var navStyle = {
  color: "white",
  //text-decoration: none;
}
class Nav extends React.Component {

  user = new User();
  state = { isLoggedIn: false };
  constructor(props) {
    super(props);

    //
  }



  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <nav>
        <Link style={navStyle} to="/"> <h1>LOGO</h1></Link>
        <ul className="nav-links">
          {isLoggedIn === true ? <Link style={navStyle} to="/cart"><li><i class="fa fa-cart-plus" aria-hidden="true"></i> Cart</li></Link> : ''}
          {isLoggedIn === true ? <Link style={navStyle} to="/admin/product"><li><i class="fa fa-user" aria-hidden="true"></i> Admin</li></Link> : ''}
          {isLoggedIn === true ? <button class="btn btn-link text-light" onClick={this.logout} id="logout"><i class="fa fa-sign-out" aria-hidden="true"></i> LogOut</button> : <Link style={navStyle} to="/signin"><li> <i class="fa fa-user" aria-hidden="true"></i> SignIn</li></Link>}
        </ul>
      </nav>

    );
  }
  async componentDidMount() {
    this.userIsLoggedIn();
  }

  userIsLoggedIn = () => {
    var result = this.user.isUserLoggedIn();
    result.then(data => {

      if (data == null) {
        this.setState({ isLoggedIn: false });
      }
      else {
        this.setState({ isLoggedIn: true });
      }
    }).catch(err => {
      return this.setState({ isLoggedIn: true });
    });


  }

  logout = () => {
    var result = this.user.removeUserSession();
    result.then(data => {
      window.location.href = "/signin";
    }).catch(err => {
      console.log(err);
    });
  }

}

export default Nav;
