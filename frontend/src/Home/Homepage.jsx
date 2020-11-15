import React from "react";
import "../App";
import FirstPage from "../Components/02_todoApp/01_FirstPage.jsx";
import Weather from "../Components/02_todoApp/04_Weather.jsx";
import Navigation from "../Components/02_todoApp/05_Navigation";
import { Switch, Route } from "react-router-dom";
import Headers from "../Components/1_Header/Header.jsx";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Headers />
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route path="/weather" component={Weather} />
          <Route path="/darkmode" component={Navigation} />
        </Switch>
      </div>
    );
  }
}
export default Home;
