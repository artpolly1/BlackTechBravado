import React, { Component } from 'react';
import './Jumbotron.css';
import ValidatedLoginForm from '../../Components/Pages/ValidatedLoginForm';

const titleColor = {
  color:'white'
};

export default class Jumbotron extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid ">
  <div className="container">
    <h1 className="display-4 text-center mt-5 jumbo-header titleColor" >Black Tech Bravado</h1>
    <ValidatedLoginForm />

  
  </div>
</div>
        )
    }
}