import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Create from './Components/Pages/Create';
import Edit from './Components/Pages/Edit';
import Home from './Components/Pages/Home';
import Profile from './Components/Pages/Profile';
import Post from './Components/Pages/Post';
import './Components/Pages/ValidatedLoginForm.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <Link to="/" className="navbar-brand">BTB</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                  <Link to="/post" className="nav-link">Log-In</Link>
                </li>
              <li className="navbar-item">
                  <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Saved Post</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
          <Route path="/post" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;
