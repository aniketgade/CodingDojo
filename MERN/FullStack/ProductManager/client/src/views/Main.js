import React from "react";
import ShowAll from "../components/ShowAll";
import NewProduct from "../components/NewProduct";


const Main = (props) => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col"><NewProduct /></div>
                <div className="col"><ShowAll /></div>
            </div>
        </div>
    )
};

export default Main;