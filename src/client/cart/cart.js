import React from 'react'
import CartM from '../../model/Cart'
import CartItem from './cartItem'
import swal from 'sweetalert';
import './cart.css';

class Cart extends React.Component {
  state = { products: [] };
  cart = new CartM();
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div class="container">
        <div class="card">
          <div class="card-body  table-responsive">
            <h4 class="card-title">Your Shopping Cart</h4>
            <table class="table table-striped table-inverse">
              <thead class="thead-inverse">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Unit Price</th>
                  <th>QTY.</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.products.map((item) => (
                    this.state.products.length > 0 ? <CartItem key={item._id} product={item}
                      minus={() => this.minus(item._id)}
                      add={() => this.add(item._id)}
                      delete={() => this.deleteItem(item._id)} /> : <div>No Items found</div>
                  ))
                }
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" class="text-left"><h1>Total</h1></td>
                  <td> 4 </td>
                  <td colSpan="2">$400</td>
                </tr>
                <tr>
                  <td colSpan="5"></td>
                  <td colSpan="2"><button type="button" class="btn btn-full btn-block btn-success"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i> $400 Checkout</button></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    )
  }

  async componentDidMount() {
    this.getCartItems();
  }
 
  getCartItems = () => {
    var value = sessionStorage.getItem("cart")
    var data = JSON.parse(value)
    this.setState({ products: data });
  }

  add = (id) => {
    var value = sessionStorage.getItem("cart")
    var data = JSON.parse(value)
    var index = data.findIndex(x => x._id == id);
    data[index].__v = data[index].__v + 1;
    this.cart.updateCart(data);
    this.getCartItems();
    //console.log();
  }

  minus = (id) => {
    var value = sessionStorage.getItem("cart")
    var data = JSON.parse(value)
    var index = data.findIndex(x => x._id == id);
    if (data[index].__v >= 1)
      data[index].__v = (data[index].__v - 1)
     

    this.cart.updateCart(data);
    this.getCartItems();
  }

  deleteItem = (id) => {
    var value = sessionStorage.getItem("cart")
    var data = JSON.parse(value)
    var index = data.findIndex(x => x._id == id); 
   
    data.splice(index, 1)
    this.cart.updateCart(data);
    this.getCartItems();
  }
}
export default Cart;
