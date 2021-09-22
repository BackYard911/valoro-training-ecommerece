<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainHeader } from "./components/MainHeader";
import { MainContainer } from "./components/MainContainer";
import { UtilBox } from "./components/UtilBox";
import { ItemDetails } from "./components/ItemDetails";
import Login from "./components/Login";
import Register from "./components/Register";
=======
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
Switch,
Route } from 'react-router-dom';
import { MainHeader } from './components/MainHeader';
import { MainContainer } from './components/MainContainer';
import { UtilBox } from './components/UtilBox';
import { ItemDetails } from './components/ItemDetails';
import {Cart} from './components/Cart'
>>>>>>> a44cfd87012a97b4d0c5c15c4efbad119d547102

function App() {
  return (
    <Router>
<<<<<<< HEAD
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
=======
    <div className="App">
      <MainHeader/>
      <Switch>
        <Route exact path="/">
          <MainContainer/>
        </Route>
        <Route path="/item">
          <ItemDetails/>
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
      </Switch>

    </div>
>>>>>>> a44cfd87012a97b4d0c5c15c4efbad119d547102
    </Router>
  );
}

export default App;
