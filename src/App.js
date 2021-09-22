import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainHeader } from "./components/MainHeader";
import { MainContainer } from "./components/MainContainer";
import { UtilBox } from "./components/UtilBox";
import { ItemDetails } from "./components/ItemDetails";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader />
        <Switch>
          <Route exact path="/">
            <MainContainer />
          </Route>
          <Route path="/item">
            <ItemDetails />
          </Route>
          <Route path="/register-page">
            <Register />
          </Route>
          <Route path="/login-page">
            <Login />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
