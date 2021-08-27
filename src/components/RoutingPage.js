import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Body from "./body/Body";
import MainPage from "./MainPage/MainPage";
import ResponsePage from "./ResponsePage/ResponsePage";

export default function RoutingPage(){
    return(
      <Router>
          <Switch>
          <Route exact path="/">
              <MainPage />
          </Route>
          <Route exact path="/form">
              <Body />
          </Route>
          <Route exact path="/response">
            <ResponsePage />
          </Route>
          </Switch>
      </Router>
    )
  }