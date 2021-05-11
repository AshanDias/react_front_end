import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';
class CreateProducts extends Component {

    constructor(props) {
        super(props);

     
        this.state = {
          name: "",
          desc: "",
          image: "",
          price: null
        };

        this.myChangeHandler = this.myChangeHandler.bind(this)
        this.submitForm = this.submitForm.bind(this)
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
			<form>
				<div className="form-group">
					 
					<label>
						Name
					</label>
					<input type="text" name="name" className="form-control"  onChange={this.myChangeHandler} />
				</div>
				<div className="form-group">
					 
					<label>
						Description
					</label>
					<input type="text" name="desc"  className="form-control" onChange={this.myChangeHandler} />
				</div>
                <div className="form-group">
					 
					<label>
						Image
					</label>
					<input type="text" name="image" className="form-control" onChange={this.myChangeHandler} />
				</div>

                <div className="form-group">
					 
					<label>
						Price
					</label>
					<input type="number" name="price" value={this.state.value} className="form-control" onChange={this.myChangeHandler} />
				</div>
			
				
				<button type="button" className="btn btn-primary" onClick={this.submitForm}>
					Submit
				</button>
			</form>
		</div>
     </div>
</div>
        )
    }

    submitForm(){
        
      
        axios({
            method:'POST',
            url: 'http://localhost:4000/api/admin/products',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
              },
            data:this.state,
            
        }).then(response => {
            if (response && response.data) {
                swal("Success!", "Record Added Success!", "success");
              this.setState({ clients: response.data });
            }
          })
          .catch(error =>  swal("Error!", "An Error Occured!", "error"));
      

    }
}

export default CreateProducts;