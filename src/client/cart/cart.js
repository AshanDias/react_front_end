import React from 'react'
import './cart.css';

class Cart extends React.Component {

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
                <tr>
                  <td>1</td>
                  <td><img id="cartImg" src="https://s.cdpn.io/3/dingo-dog-bones.jpg" alt="" /></td>
                  <td>Dingo Dog Bones</td>
                  <td>$50.00</td>
                  <td> <input type="number" name="" id="" value="1" class="form-control form-control-sm"  /></td>
                  <td>$100</td>
                  <td><button type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><img id="cartImg" src="https://s.cdpn.io/3/dingo-dog-bones.jpg" alt="" /></td>
                  <td>Dingo Dog Bones</td>
                  <td>$50.00</td>
                  <td> <input type="number" name="" id="" value="1" class="form-control form-control-sm"  /></td>
                  <td>$100</td>
                  <td><button type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><img id="cartImg" src="https://s.cdpn.io/3/dingo-dog-bones.jpg" alt="" /></td>
                  <td>Dingo Dog Bones</td>
                  <td>$50.00</td>
                  <td> <input type="number" name="" id="" value="1" class="form-control form-control-sm"  /></td>
                  <td>$100</td>
                  <td><button type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><img id="cartImg" src="https://s.cdpn.io/3/dingo-dog-bones.jpg" alt="" /></td>
                  <td>Dingo Dog Bones</td>
                  <td>$50.00</td>
                  <td> <input type="number" name="" id="" value="1" class="form-control form-control-sm"  /></td>
                  <td>$100</td>
                  <td><button type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                </tr>

              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" class="text-left"><bold><h1>Total</h1></bold></td>
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
}
export default Cart;
