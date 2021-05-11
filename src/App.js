import logo from './logo.svg';
import './App.css';
import AdminProduct from './admin/product/view/View'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminProducts from "./admin/product/view/View";
function App() {
  return (<Router>
    <div className="App">
      
      <Switch>
        <Route path="/admin/product" exact component={AdminProduct}></Route> 
      </Switch>
    </div>
  </Router>
  );
}

export default App;
