import React, {useState} from "react";
import axios from "axios";
import {navigate} from "@reach/router";

const NewProduct = (props) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errs, setErrs] = useState({});

    const createProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new",{
            title,
            price,
            description
        })
         .then((res)=>{ 
             console.log(res)
             if(res.data.error.errors){
                 setErrs(res.data.error.errors)
             }
             else{
                 navigate("/products/" + res.data.product._id)
             }
             
            })
        .catch((err) => console.log(err));
    };

    return(
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={createProduct}>
                <div className="form-group">
                    <label className="mr-2">Title</label>
    {errs.title ? <span className="small text-danger">{errs.title.message}</span> : null}
                    <input className="form-control form-control-sm" name="title" type="text" onChange = {(e) => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="mr-2">Price</label>
    {errs.price ? <span className="small text-danger">{errs.price.message}</span> : null}
                    <input className="form-control form-control-sm" name="price" type="text" onChange = {(e) => setPrice(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input className="form-control form-control-sm" name="description" type="text" onChange = {(e) => setDescription(e.target.value)}/>
                </div>

                <button className="btn btn-info btn-lg" type="submit">Create</button>

            </form>
        </div>
    )
};

export default NewProduct;
