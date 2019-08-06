import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Create from './Components/Pages/Create';
import Edit from './Components/Pages/Edit';
import Home from './Components/Pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link to="/" className="navbar-brand">BLACK TECH BRAVADO</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Post</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Saved Post</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Home} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
        </div>
      </Router>
    );
  }
}

export default App;
