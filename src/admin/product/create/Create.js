import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';
import {storage} from "../../../firebase/firebase"
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
        this.handleChange =this.handleChange.bind(this)
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
        </nav>
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
          <input type="file" name="image" className="form-control" onChange={this.handleChange} />
         
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
    

     handleChange(e) {
       var imageFile = e.target.files[0]
       const uploadTask = storage.ref(`/images/${imageFile.name}`).put(imageFile)
       uploadTask.on('state_changed', 
       (snapShot) => {
         //takes a snap shot of the process as it is happening
         console.log(snapShot)
       }, (err) => {
         //catches the errors
         console.log(err)
       }, () => {
         // gets the functions from storage refences the image storage in firebase by the children
         // gets the download url then sets the image from firebase as the value for the imgUrl key:
         storage.ref('images').child(imageFile.name).getDownloadURL()
          .then(fireBaseUrl => {
            console.log(fireBaseUrl)
            this.state.image=fireBaseUrl
            swal("Image uploaded!");
          })
        })
      console.log(imageFile);
    }

    submitForm(){
        if(!this.state.name || !this.state.desc || !this.state.image || !this.state.price){
        
          swal("Error", "Fields cannot be null!", "error");
        }else{
        
      
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
}

export default CreateProducts;