import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, navigate} from "@reach/router";

const ShowOne = (props) => {

    const [product, setProduct] = useState({});

    const deleteProduct = () => {
        axios.delete("http://localhost:8000/api/products/delete/" + props.product_id)
        .then((res) => navigate("/products"))
        .catch((err)=> console.log(err));
      }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.product_id)
        .then((res)=> {
            setProduct(res.data.product);
            console.log(product);
        })
        .catch((err)=> console.log(err));
    }, []);

    return(
        <div className="container">
            <div className="card mt-4" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
                    <p className="card-text">{product.description}</p>
                    <Link to="/products"><button className="m-1 btn btn-sm btn-secondary">Go Back</button></Link>
            <Link to={"/products/" + product._id + "/edit"}><button className="m-1 btn btn-sm btn-primary">Edit</button></Link>
            <button onClick={deleteProduct} className="m-1 btn btn-sm btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default ShowOne;