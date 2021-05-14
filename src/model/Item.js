import React from 'react';
import ServerConnector from '../model/ServerConnector';
class Item extends React.Component {
    image = null;
    name = null;
    desc = null;
    price = null;
    serverConnector = new ServerConnector();
    getItemList()
    {
        this.serverConnector._API = this.serverConnector._BASE_URL+"/api/customer/items";
        return this.serverConnector.get(this.serverConnector._API);
    }

    getItemDetail(id)
    { 
        this.serverConnector._API = this.serverConnector._BASE_URL+"/api/customer/items/"+id;
        return this.serverConnector.get(this.serverConnector._API);
    }

}

  export default Item;
