import React, { Component } from "react";

class Items extends Component {
    render() {

        return (
            <tr>
                <td scope="col">{this.props.product._id}</td>
                <td scope="col">{this.props.product.name}</td>
                <td scope="col">{this.props.product.desc}</td>
                <td scope="col">
                <img src={this.props.product.image} height="50px" width="50px" />
                    
                 </td>
                <td scope="col">{this.props.product.price}</td>
                <td scope="col">
                <button className="btn btn-warning btn-sm" onClick={this.props.onEdit}>
                    Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={this.props.onDelete}>
                    Delete
                </button>
                </td>
            </tr>
        )
    }

}
export default Items;