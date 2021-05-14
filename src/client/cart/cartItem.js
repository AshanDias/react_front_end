import React, { Component } from "react";

class CartItem extends Component {
    render() { 
        return ( 
            <tr>
            <td>{this.props.product._id}</td>
            <td><img id="cartImg" src={this.props.product.image} alt="" /></td>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.price}</td>
            <td> <button type="button" class="btn btn-dark mr-1" onClick={this.props.add}><i class="fa fa-plus-circle" aria-hidden="true"></i></button><label class="m-2">{this.props.product.__v}</label><button type="button" class="btn btn-danger" onClick={this.props.minus}><i class="fa fa-minus-circle" aria-hidden="true"></i></button></td>
            <td>{this.props.product.price}</td>
            <td><button type="button" class="btn btn-danger" onClick={this.props.delete}><i class="fa fa-trash" aria-hidden="true"></i></button></td>
          </tr>
        )
    }
}

export default CartItem;