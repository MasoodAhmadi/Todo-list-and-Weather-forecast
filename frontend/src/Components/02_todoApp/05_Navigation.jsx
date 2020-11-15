import React from "react";
import OrganizerItems from "./02_OrganizerItems.jsx";
import SearchBox from "../Reusable_Component/01_Search/Search.jsx";
import styled from "../styles3";

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
      isComplete: false,
      Wind: [],
      InitialInput: {
        text: "",
        id: "",
      },
      searchTodo: "",
      currentPage: 1,
      pageSize: 5,
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.UpdateItem = this.UpdateItem.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  //Time to weather
  currentTime() {
    this.setState({
      time: new Date(),
    });
  }
  //editing the text
  onTextChange = (event) => {
    this.setState({
      InitialInput: { text: event.target.value, id: Date.now() },
    });
  };

  //Search input
  onSearch = (e) => {
    this.setState({ searchTodo: e.target.value });
  };

  //adding element inside the todo list
  addItem(e) {
    e.preventDefault();
    const addnewItem = this.state.InitialInput;
    if (addnewItem.text !== "") {
      const addnewItems = [...this.state.items, addnewItem];
      this.setState({
        items: addnewItems,
        InitialInput: { text: "", id: "" },
      });
    }
  }


  //to delete the Fields
  onDeleteItem(id) {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filteredItems });
  }

  //Editing input Fields
  UpdateItem(text, id) {
    const items = this.state.items;
    items.map((item) => {
      if (item.id === id) {
        item.text = text;
      }
      return null;
    });
    this.setState({ items: items });
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
    const { city, combine, country, Weather, Wind, InitialInput } = this.state;
    const Temp = Math.round(combine.temp - 273);
    const Feels = Math.round(combine.feels_like - 273);

    const { items, searchTodo } = this.state;
    const isTodoDefined = Array.isArray(items);
    let filteredUser;
    if (isTodoDefined) {
      filteredUser = items.filter((filtering) =>
        filtering.text.toLowerCase().includes(searchTodo.toLowerCase())
      );
    }
    return (
      <div>
        <div style={styled.rowlist}>
          <div style={styled.head}>
            <h1 style={styled.h1}>ToDo List</h1>
          </div>
          <div>
            <input
              style={styled.Inp}
              type="text"
              value={InitialInput.text || ""}
              onChange={this.onTextChange}
            />

            <button style={styled.btn} onClick={this.addItem}>
              ADD
            </button>
          </div>
          <div>
            <br />
            <SearchBox
              placeholder="Search todo ...."
              handleChange={(e) =>
                this.setState({ searchTodo: e.target.value })
              }
            />
          </div>
          {isTodoDefined ? (
            <OrganizerItems
              items={filteredUser}
              onDeleteItem={this.onDeleteItem}
              UpdateItem={this.UpdateItem}
            />
          ) : (
              <div>Error: todo not defined </div>
            )}
          <br />
        </div>
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
