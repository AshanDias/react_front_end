import React from 'react';
import Item from '../model/Item';
import ServerConnector from '../model/ServerConnector';
class CartM extends React.Component {
    serverConnector = new ServerConnector();
    cartItemList = []; 

    addToCart(item) {
        var value = sessionStorage.getItem("cart")
        var data = JSON.parse(value)
        if (data != null) {
            var result = data.find(x => x._id == item._id);
            if (result) {
                console.log("alrady");
            }
            else {
                this.cartItemList.push(item)
                this.serverConnector.saveStatusOnLocalStorage("cart", JSON.stringify(this.cartItemList));
            }
        }
        else {
            item.__v = 1;
            this.cartItemList.push(item)
            this.serverConnector.saveStatusOnLocalStorage("cart", JSON.stringify(this.cartItemList));
        }

    }

    updateCart(data){
        this.resetCart();
        this.serverConnector.saveStatusOnLocalStorage("cart", JSON.stringify(data));
    }

    getCartItemList(){
       return this.serverConnector.showLocalStorage("cart");
    }

    resetCart()
    {
        return sessionStorage.removeItem("cart");
    }
}

export default CartM;
