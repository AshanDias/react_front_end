import React, { Component } from "react";

class Items extends Component {
    render() {

        return (
            <tr>
                <td scope="col">{this.props.product._id}</td>
                <td scope="col">{this.props.product.name}</td>
                <td scope="col">{this.props.product.desc}</td>
                <td scope="col">{this.props.product.image}</td>
                <td scope="col">{this.props.product.price}</td>
                <td scope="col">
                <button className="btn btn-warning" onClick={this.props.onEdit}>
                    Edit
                </button>
                </td>
            </tr>
        )
    }

}
export default Items;