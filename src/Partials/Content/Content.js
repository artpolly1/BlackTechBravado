import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './Content.css';

export default class Content extends Component {
    render() {
        return (
        <div class="container">
            <div class="row">    
            <div class="col-lg-8 col-md-10 mx-auto">

            <div class="post-preview">
            <Link to="/post" className="nav-link"><h2 class="post-title">
            UTH Bootcamp Cohort Pushes Through.
            </h2>
            <h3 class="post-subtitle">
            Find Out They Did It...
            </h3></Link>

          <p class="post-meta">Posted by
            <a href="#"> Deez Nutz </a>
            on August 13, 2019</p>
        </div>
        <hr/>
        <div class="post-preview">
        <Link to="/post" className="nav-link"><h2 class="post-title">
            Bring It Back With React
            </h2>
            <h3 class="post-subtitle">
            Find Out They Did It...
            </h3></Link>
          <p class="post-meta">Posted by
            <a href="#">Dr. Arthur Polly</a>
            on August 13, 2019</p>
        </div>
        <hr/>
        <div class="post-preview">
        <Link to="/post" className="nav-link"><h2 class="post-title">
        You Don't Know JS, YET!
            </h2>
            <h3 class="post-subtitle">
            Find Out They Did It...
            </h3></Link>
          <p class="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
            on August 13, 2019</p>
        </div>
        <hr/>
        <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
        <hr/>
            </div>
            </div>

            <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p class="copyright text-muted">Copyright &copy; Your Website 2019</p>
        </div>
      </div>
    </div>
  </footer>
            </div>
       
    
        )
    }
}