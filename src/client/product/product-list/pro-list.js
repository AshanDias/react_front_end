import React, { Component } from 'react'
import swal from 'sweetalert';
import Item from '../../../model/Item';
import Pro from './pro'
import CartM from '../../../model/Cart';
import Parser from 'html-react-parser';
import './pro-list.css';
var html = "";

class ProductList extends React.Component {
  item = new Item();
  cart = new CartM();
  state = { products: [] };
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <div class="container">
        <div id="itemCard" class="row">
          {
            this.state.products.map((item) => (
              <Pro key={item._id} product={item}
                onAddToCart={() => this.addtoCart(item)} />
            ))
          }  
        </div>
      </div>

    );
  }

  async componentDidMount() {
    this.fetchAllItems();
  }


  fetchAllItems = () => {

    var result = this.item.getItemList();
    result.then(data => {
      if (data.status == 200) { 
        this.setState({ products: data.data }); 
      }

    }).catch(err => {
      swal("Information", err.message, "info");
    });

  } 

  addtoCart = (item) => {
    this.cart.addToCart(item);
  }

}




export default ProductList;
