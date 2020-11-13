import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "@reach/router";

const ShowAll = (props) => {

    const [products, setProducts] = useState([]);

    const deleteProduct = (product_id) => {
        axios.delete("http://localhost:8000/api/products/delete/" + product_id)
        .then((res) => setProducts(products.filter(product => product._id !== product_id)))
        .catch((err)=> console.log(err));
      }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res)=> setProducts(res.data.products))
            .catch((err)=> console.log(err));
    }, []);
    
    return(
        <div>
            <h2>All Products:</h2>
            <ul className="list-group list-group-flush">
                {products.map((prod)=>(
                    <li className="list-group-item">
                        <Link to={"/products/" + prod._id}>{prod.title}</Link>
                        <button className="btn btn-danger ml-2 btn-sm" onClick={() => deleteProduct(prod._id)}>X</button>
                    </li>
                ))}
                
            </ul>
        </div>
    );
};

export default ShowAll;