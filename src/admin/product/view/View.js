
import React, { Component } from "react";
import Parser from 'html-react-parser';
import axios from "axios";
import swal from 'sweetalert';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import Items from './item'

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
        <a class="navbar-brand" href="/admin/product/update">Update</a>
        <a class="navbar-brand" href="/admin/product/delete">Delete</a>
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
                        <th scope="col">Image URL</th>
                        <th scope="col">Price</th>
                        </tr>
                </thead>
                <tbody>
                {

                this.state.proucts.map((item) => (

                  <Items 
                    product={item}
                  />

                ))
                
                }

              
                </tbody>
              
              </table>

            
        {/* <Get url="http://localhost:4000/api/admin/products/" params={{}}>
          {(error, response, isLoading, makeRequest, axios) => {
            if(error) {
              return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
            }
            else if(isLoading) {
              return (<div>Loading...</div>)
            }
            else if(response !== null) {
               var html = ""
                console.log("aaa")

                let items = response.data.map((item) => {
                    return {
                      _id: item._id,
                     
                    };
                  });

            //    this.setState({proucts: items})
                //  result = response.data
                // result.forEach(element => {
                   
                //     html += '<tr>'+
                //     '<td scope="row">'+element["_id"]+'</td>'+
                //     '<td scope="row">'+element["name"]+'</td>'+
                //     '<td scope="row">'+element["desc"]+'</td>'+
                //     '<td scope="row">'+element["image"]+'</td>'+
                //     '<td scope="row">'+element["price"]+'</td>'+
                //     '</tr>'

                // });
                console.log(this.state.proucts)
              return (
              
              <div>
                 
                  <table className="table">
                  
                      <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col"> Description</th>
                            <th scope="col">Image URL</th>
                            <th scope="col">Price</th>
                            </tr>
                    </thead>
                    <tbody>
                    {Parser(html)}

                  
                    </tbody>
                  
                  </table>

                
              </div>
              
              )
                
            
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
     */}
    
      </div>
        );
    }

  async componentDidMount() {
    await axios({
      method:'GET',
      url: 'http://localhost:4000/api/admin/products',
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json"
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