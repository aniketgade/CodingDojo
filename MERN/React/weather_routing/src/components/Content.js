import React, {useState, useEffect} from "react";
import axios from "axios";

const Content = (props) => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=4c1ddb01770b46a6ba8235215202210&q=${props.city}
        `)
        .then(response => setWeather(response.data))
        .catch(err => console.log(err));
    },[props.city]);

    if(weather){
    return (
        <div>
            Weather Data
            <p>Current Temperature: {weather.current.temp_f}</p>
            <p>Weather Condition: {weather.current.condition.text}</p>
            <p>Humidity: {weather.current.humidity}</p>
            <p>Wind (MPH): {weather.current.wind_mph}</p>
            <p>Local Time: {weather.location.localtime}</p>
        </div>
    );
    }
    else{
        return (
            <div></div>
        );
    }
}

export default Content;