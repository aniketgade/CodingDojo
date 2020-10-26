import React from "react";

const ContentWithColor = (props) => {

    console.log(props);

    const contentStyle = {
        background: props.background,
        color: props.color,
    };

    return (
        <div style={contentStyle}>
            {props.text == "home" ? 'Welcome' : props.text}
        </div>
    );
}

export default ContentWithColor;