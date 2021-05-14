import React from 'react';
import ServerConnector from '../model/ServerConnector';
class Item extends React.Component {
    serverConnector = new ServerConnector();
    getItemList()
    {
        this.serverConnector._API = this.serverConnector._BASE_URL+"/api/admin/products";
        return this.serverConnector.get(this.serverConnector._API);
    }

}

  export default Item;
