import React from "react";

const Content = (props) => {

    console.log(props);

    return (
        <div>
            {props.text == "home" ? 'Welcome' : props.text}
        </div>
    );
}

export default Content;