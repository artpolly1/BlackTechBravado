import React, { Component } from 'react';
import Jumbotron from '../../Partials/Jumbotron/Jumbotron';
import Content from '../../Partials/Content/Content';


export default class TodosList extends Component {
    render() {
        return (
            <div>
                <Jumbotron />
                <Content />
            </div>
        )
    }
}