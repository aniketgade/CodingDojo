import React from "react";
import {Link} from "@reach/router";

const Navbar = () => {
    const navbar = {
        margin: "10px",
    };

    return (
        <div>
        <Link to="city/mumbai" style={navbar}>Mumbai</Link>
        <Link to="city/delhi" style={navbar}>Delhi</Link>
        <Link to="city/fremont" style={navbar}>Fremont</Link>
        </div>
    );
}

export default Navbar;