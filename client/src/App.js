import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Create from './Components/Pages/Create';
import Edit from './Components/Pages/Edit';
import Home from './Components/Pages/Home';
import Profile from './Components/Pages/Profile';
import Saved from './Partials/Content/Content';
import Post from './Components/Pages/Post';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-warning p-3">
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
                  <Link to="/saved" className="nav-link">Saved Post</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
          <Route path="/post" component={Post} />
          <Route path="/saved" component={Saved} />
        </div>
        <section id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                
                <p cclassName="col-md-3 ">Black Teach Bravado is a community of next generation, next level coders. We intend to make coding acessible to Black enthusiast by bringing differnt coding processes to our learning community.
                </p> 

            </div>
            <div className="col-md-3">
                    <h1>Features</h1>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>NETWORKING</p>
                    <p>REACT</p>
                    <p>UNLIMITED RESOURCES</p>
    
                </div>
                
                <div class="col-md-3">
                        <h1>Quick Contact</h1>
                        <p><span class="fas fa-phone-square icon"></span>213-599-1234</p>
                        <p><span class="far fa-envelope icon"></span>contact@gmail.com</p>
                        <p><span class="fas fa-home icon"></span>7610 Jackwood St. </p>
                        <p class="city">Houston, TX 77071</p>
                       
        
                    </div>
                    <div class="col-md-3">
                            <h1>Follow Us On</h1>
                            <p><span class="fab fa-facebook-square icon2"></span>Facebook</p>
                            <p><span class="fab fa-twitter-square icon2"></span>Twitter</p>
                            <p><span class="fab fa-instagram icon2"></span>Instagram </p>
                            <p><span class="fab fa-youtube-square icon2"></span>YouTube </p>
                            
                        </div>
    
        </div><hr/>

        <p class="copyright">Created By: <span/>  Arthur T. Polly</p>
    </div>
</section>
      </Router>
    );
  }
}

export default App;
