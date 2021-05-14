import React, { Component } from "react";

class Pro extends Component {
    render() {
        return (
            <div class="card col-lg-3 mt-1">
                <img class="card-img-top p-1" src={this.props.product.image} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{this.props.product.name}</h5>
                    <h6 class="card-sub-title text-muted">{this.props.product.desc}</h6>
                    <p class="card-text text-danger">Rs.{this.props.product.price}</p>
                    <div class=" container">
                        <button type="button" class="btn btn-sm btn-primary mr-1" onClick={this.props.onAddToCart}><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button> <button type="button" class="btn btn-sm btn-success" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pro;