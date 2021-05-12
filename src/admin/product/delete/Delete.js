import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';

class DeleteProducts extends Component {

    constructor(props) {
        super(props);

        

        this.state = {
            _id:"",
          name: "",
          desc: "",
          image: "",
          price: null
        };

        this.myChangeHandler = this.myChangeHandler.bind(this)
        this.searchData = this.searchData.bind(this)
        this.deleteData=this.deleteData.bind(this)
      }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

    render(){

        return (

            
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
        <div className="form-group">
					 
                     <label>
                         Search By Id
                     </label>
                     <input type="text" name="_id"  className="form-control" placeholder="Input ID"  onChange={this.myChangeHandler} />
                   <br></br>
              <button type="button" className="btn btn-primary" onClick={this.searchData}>
					Search
				</button>
         </div>

<b> Product Delete</b><hr></hr>
			<form>
				<div className="form-group">
					 
					<label>
						Name
					</label>
					<input type="text" name="name" value={this.state.name}  className="form-control" disabled  onChange={this.myChangeHandler} />
				</div>
				<div className="form-group">
					 
					<label>
						Description
					</label>
					<input type="text" name="desc" value={this.state.desc}  className="form-control" disabled onChange={this.myChangeHandler} />
				</div>
                <div className="form-group">
					 
					<label>
						Image
					</label>
					<input type="text" name="image" value={this.state.image} className="form-control" disabled onChange={this.myChangeHandler} />
				</div>

                <div className="form-group">
					 
					<label>
						Price
					</label>
					<input type="number" name="price" value={this.state.price} className="form-control" disabled onChange={this.myChangeHandler} />
				</div>
                <button type="button" className="btn btn-primary" onClick={this.deleteData}>
					Delete
				</button>
			</form>
		</div>
         </div>
    </div>
        )
    }


    deleteData(){


        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                axios({
                    method:'DELETE',
                    url: `http://localhost:4000/api/admin/products/${this.state._id}`,
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        Accept: "application/json"
                      },
                    data:this.state,
                    
                }).then(response => {
                    if (response && response.data) {
                        swal("Success!", "Record Deleted!", "success");
                      this.setState({ clients: response.data });
                    }
                  })
                  .catch(error =>  swal("Error!", "An Error Occured!", "error"));
          

            }
          });
          



       
      
    }

    searchData(){

        

        axios({
            method:'GET',
            url: `http://localhost:4000/api/admin/products/${this.state._id}`,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
              },
           
            
        }).then(response => {
            if (response && response.data) {
                this.state.name=response.data[0]["name"]
                this.state.desc=response.data[0]["desc"]
                this.state.image=response.data[0]["image"]
                this.state.price=response.data[0]["price"]
              this.setState({ clients: response.data });
            }
          })
          .catch(error =>  swal("Error!", "An Error Occured!", "error"));
    }
}

export default DeleteProducts;