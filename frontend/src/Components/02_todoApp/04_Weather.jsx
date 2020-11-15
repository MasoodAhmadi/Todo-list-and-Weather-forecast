import React from "react";
import styled from "../styles";

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      items: [],
      city: [],
      combine: [],
      country: [],
      Weather: [],
      Wind: [],


    };

    this.getWeather = this.getWeather.bind(this);
  }

  //Time to weather
  currentTime() {
    this.setState({
      time: new Date(),
    });
  }

  getWeather = async () => {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=tampere&appid=034e4c1a00d9f959337a5f7b1cccd8eb"
    );
    const data = await response.json();
    const { name, main, sys, weather, wind } = data;
    console.log(sys);

    this.setState({
      city: name,
      combine: main,
      country: sys,
      Weather: weather,
      Wind: wind,
    });
  };

  //rendering the components
  componentDidMount() {
    setInterval(() => this.currentTime(), 1000);
    this.getWeather();
  }

  render() {
    const { city, combine, country, Weather, Wind, } = this.state;
    const Temp = Math.round(combine.temp - 273);
    const Feels = Math.round(combine.feels_like - 273);


    return (
      <div>

        <div style={styled.rowlist1}>
          <div style={styled.widget}>
            <div style={styled.details}>
              <div style={styled.date}>
                {this.state.time.toLocaleTimeString()}
              </div>
              <div style={styled.city}>
                city: {city}, country:{country.country}
              </div>
              <div style={styled.temperature}>{Temp}&deg;</div>
              <div style={styled.summary}>
                <p style={styled.summaryText}>
                  {" "}
                  {Weather.map((desc, index) => {
                    return <p key={index}>{desc.description} </p>;
                  })}
                </p>
              </div>
              <div style={styled.precipitation}>Feels like: {Feels}&deg;</div>
              <div style={styled.wind}> Wind speed: {Wind.speed}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FirstPage;
