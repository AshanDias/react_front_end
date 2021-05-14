import React, { Component } from 'react'
import swal from 'sweetalert';
import Item from '../../../model/Item';
var qs = require('qs')
var html = "";

class ProductDetails extends React.Component {
  item = new Item();

  state = { products: [] }
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 p-5">
            <img src={this.state.products.image} width="70%" alt="" />
          </div>
          <div class="col-lg-4 p-5">
            <div class="table-responsive">
              <table class="table table-striped table-inverse">
                <tbody> 
                  <tr>
                    <td>Name</td>
                    <td>{this.state.products.name}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{this.state.products.desc}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{this.state.products.price}</td>
                  </tr>
                </tbody>
              </table></div>
          </div>
          <div class="col-lg-4"></div>
        </div>
      </div>

    );
  }

  async componentDidMount() {
    this.getItemDetails();
  }


  getItemDetails = () => {
    var res = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).id
    console.log(res)

    var result = this.item.getItemDetail(res);
    result.then(data => {
      if (data.status == 200) {
        if (data.status == 200) {
           
          this.setState({ products: data.data[0]});
        }
      }

    }).catch(err => {
      console.log(err.message);
      swal("Information", err.message, "info");
    });

  }

  addtoCart = (item) => {
    this.cart.addToCart(item);
  }

}




export default ProductDetails;
