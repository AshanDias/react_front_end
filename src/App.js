import logo from './logo.svg';
import './App.css';
import AdminProduct from './admin/product/view/View'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminProducts from "./admin/product/view/View";
import CreateProducts from "./admin/product/create/Create"
import UpdateProducts from "./admin/product/update/Update"
import DeleteProducts from "./admin/product/delete/Delete"
//Client
import Nav from "./client/nav/Nav";
import Home from "./client/home/home";
import SignIn from "./client/user/signin/signin";
import SignUp from "./client/user/signup/signup";
import Cart from "./client/cart/cart";
import ProductDetails from "./client/product/product-detail/pro-detail";

//End Client

function App() {
  return (<Router>
    <div className="App">
    <Nav />
      <Switch>
        <Route path="/admin/product" exact component={AdminProduct}></Route>
        <Route path="/admin/product/create" exact component={CreateProducts}></Route>  
        <Route path="/admin/product/update" exact component={UpdateProducts}></Route> 
        <Route path="/admin/product/delete" exact component={DeleteProducts}></Route> 
        {/* Client */} 
        <Route path="/" exact component={Home}></Route> 
        <Route path="/signin" exact component={SignIn}></Route> 
        <Route path="/signup" exact component={SignUp}></Route> 
        <Route path="/cart" exact component={Cart}></Route> 
        <Route path="/product/details" exact component={ProductDetails}></Route> 

         
         {/* End Client */} 
      </Switch>
    </div>
  </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import AdminProduct from './admin/product/view/View'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminProducts from "./admin/product/view/View";
import CreateProducts from "./admin/product/create/Create"
import UpdateProducts from "./admin/product/update/Update"
import DeleteProducts from "./admin/product/delete/Delete"
//Client
import Nav from "./client/nav/Nav";
import Home from "./client/home/home";
import SignIn from "./client/user/signin/signin";
import SignUp from "./client/user/signup/signup";
import Cart from "./client/cart/cart";
import ProductDetails from "./client/product/product-detail/pro-detail";

//End Client

function App() {
  return (<Router>
    <div className="App">
    <Nav />
      <Switch>
        <Route path="/admin/product" exact component={AdminProduct}></Route>
        <Route path="/admin/product/create" exact component={CreateProducts}></Route>  
        <Route path="/admin/product/update" exact component={UpdateProducts}></Route> 
        <Route path="/admin/product/delete" exact component={DeleteProducts}></Route> 
        {/* Client */} 
        <Route path="/" exact component={Home}></Route> 
        <Route path="/signin" exact component={SignIn}></Route> 
        <Route path="/signup" exact component={SignUp}></Route> 
        <Route path="/cart" exact component={Cart}></Route> 
        <Route path="/product/details" exact component={ProductDetails}></Route> 

         
         {/* End Client */} 
      </Switch>
    </div>
  </Router>
  );
}

export default App;

