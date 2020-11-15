import React from "react";
import "../App";
import MainView from "../Components/02_todoApp/01_MainView.jsx";
import Weather from "../Components/02_todoApp/04_Weather.jsx";
import DarkMode from "../Components/02_todoApp/05_DarkMode";
import { Switch, Route } from "react-router-dom";
import Headers from "../Components/1_Header/Header.jsx";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Headers />
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/weather" component={Weather} />
          <Route path="/darkmode" component={DarkMode} />
        </Switch>
      </div>
    );
  }
}
export default Home;
