
import React, { Component } from "react";
import Parser from 'html-react-parser';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
class AdminProducts extends Component {

    render(){
        var result =null
        return (
            
            <div>
           
        <Get url="http://localhost:4000/api/admin/products/" params={{}}>
          {(error, response, isLoading, makeRequest, axios) => {
            if(error) {
              return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
            }
            else if(isLoading) {
              return (<div>Loading...</div>)
            }
            else if(response !== null) {
               var html = ""


                 result = response.data
                result.forEach(element => {
                   
                    html += '<tr>'+
                    '<td scope="row">'+element["_id"]+'</td>'+
                    '<td scope="row">'+element["name"]+'</td>'+
                    '<td scope="row">'+element["desc"]+'</td>'+
                    '<td scope="row">'+element["image"]+'</td>'+
                    '<td scope="row">'+element["price"]+'</td>'+
                    '</tr>'

                });
              
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
      </div>
        );
    }


}

  export default AdminProducts;