import React, {useState, useEffect} from "react";
import axios from "axios";
import {navigate} from "@reach/router";

const Edit = (props) => {

    const[product, setProduct] = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errs, setErrs] = useState({});

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/" + props.product_id)
        .then((res)=> {
            setTitle(res.data.product.title);
            setPrice(res.data.product.price);
            setDescription(res.data.product.description);
            setProduct(res.data.product);
        })
        .catch((err)=> console.log(err));
    }, [])

    const editProduct = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/update/" + props.product_id,{
            title,
            price,
            description
        })
        .then((res)=> { 
            if(res.data.error.errors){
                setErrs(res.data.error.errors)
                setTitle(product.title);
            setPrice(product.price);
            setDescription(product.description);
            }
            else{
            navigate("/products/" + props.product_id)
            }
        })
        .catch((err) => console.log(err));
    };

    return(
        <div className="container w-50">
            <h2>Edit Product</h2>
            <form onSubmit={editProduct}>
                <div className="form-group">
                    <label className="mr-2">Title</label>
                    {errs.title ? <span className="small text-danger">{errs.title.message}</span> : null}
                    <input className="form-control form-control-sm" name="title" type="text" value={title} onChange = {(e) => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="mr-2">Price</label>
                    {errs.price ? <span className="small text-danger">{errs.price.message}</span> : null}
                    <input className="form-control form-control-sm" name="price" type="text" value={price} onChange = {(e) => setPrice(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input className="form-control form-control-sm" name="description" type="text" value={description} onChange = {(e) => setDescription(e.target.value)}/>
                </div>

                <button className="btn btn-info btn-lg" type="submit">Submit</button>

            </form>
        </div>
    )
};

export default Edit;
