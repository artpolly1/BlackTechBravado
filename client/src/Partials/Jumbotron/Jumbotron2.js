import React, { Component } from 'react';
import './Jumbotron.css';

export default class Jumbotron extends Component {
    render() {
        return (
            <div id="postJumbo" className="jumbotron jumbotron-fluid jum">
  <div className="container">
    <h1 className="display-4 text-center mt-5 jumbo-header">Black Tech Bravado</h1>
  </div>
</div>
        )
    }
}