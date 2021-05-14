
import React, { Component } from "react";
import Parser from 'html-react-parser';
import axios from "axios";
import swal from 'sweetalert';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import Items from './item'
import { Redirect } from 'react-router-dom'


class AdminProducts extends Component {

    state = {
        proucts: [],
    };

    
    constructor(props) {
        super(props);
        
      }


     render(){
       
        var result =null
       console.log(this.state)
        // let items = data.map((item) => {
        //   return {
        //     _id: item._id,
        //     desc:item.desc,
        //     image:item.image,
        //     price:item.price
        //   };
        // });
        // this.setState({ proucts: items });

        return (
            
            <div>
<div className="container-fluid">
	<div className="row">
     <div className="col-md-4"></div>
		<div className="col-md-4">


        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/admin/product">Home</a>
        <a class="navbar-brand" href="/admin/product/create">Create</a>
        </nav>
        </div>
            </div>
        </div>
        

            <br></br>

            <table className="table">
                  
                  <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col"> Description</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                        </tr>
                </thead>
                <tbody>
                {

                this.state.proucts.map((item) => (

                  <Items 
                    product={item}
                    onEdit={() => this.editProduct(item)}
                    onDelete={() => this.deleteProduct(item)}
                  />

                ))
                
                }

              
                </tbody>
              
              </table>

            
       
    
      </div>
        );
    }

    async deleteProduct(item){
      

      swal({
        title: "Are you sure?",
        text: "Do you want to delete this item!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
         
          //start
          axios({
            method:'DELETE',
            url: `http://localhost:4000/api/admin/products/${item._id}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json",
                "authorization":window.sessionStorage.accessToken
              },
            
        }).then(response => {
            if (response && response.data) {
                swal("Success!", "Record Deleted!", "success");
              this.setState({ clients: response.data });
              window.location.reload();
            }
          })
          .catch(error =>  swal("Error!", "An Error Occured!", "error"));
          //end


        }
      });

    }
    async editProduct(item){
      window.location.replace('/admin/product/update?id='+item._id+'')
    
    }

  async componentDidMount() {
 
    await axios({
      method:'GET',
      url: 'http://localhost:4000/api/admin/products',
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
          "authorization":window.sessionStorage.accessToken
        },
     
      
  }).then(response => {
      if (response && response.data) {
        this.setState({ proucts: response.data });
      }
    })
    .catch(error =>  swal("Error!", "An Error Occured!", "error"));
  }
  

}

  export default AdminProducts;