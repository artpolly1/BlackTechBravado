import React, { Component } from 'react';
import axios from 'axios';
import '../Pages/style.css';
import Jumbotron from '../../Partials/Jumbotron/Jumbotron2';


export default class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.onChangePostTitle = this.onChangePostTitle.bind(this);

        this.onChangeAuthor = this.onChangeAuthor.bind(this);

        this.onChangePostContent = this.onChangePostContent.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            post_title: '',
            post_author: '',
            post_content: ''
        }
    }
    onChangePostTitle(e) {
        this.setState({
            post_title: e.target.value
        });
    }

    onChangeAuthor(e) {
        this.setState({
            post_author:e.target.value
        });
    }

    onChangePostContent(e) {
        this.setState({
            post_content:e.target.value
        });
    
    }
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);

        console.log(`Title: 
        ${this.state.post_title}`);

        console.log(`Post Author: 
        ${this.state.post_author}`);

        console.log(`Post Content: 
        ${this.state.post_content}`);

        const newUserPost = {
            post_title: this.state.post_title,
            post_author: this.state.post_author,
            post_content: this.state.post_content
        };

        axios.post('http://localhost:8080/uPos/add', newUserPost)
            .then(res => console.log(res.data));

        this.setState({
            post_title: '',
            post_author: '',
            post_content: ''
        })
    }
    render() {
        return (

            <div style={{marginTop: 10,} }>
               

                <h1 className= "jumbo-header">Create New Article</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Article Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.post_title}
                                onChange={this.onChangePostTitle}
                                />
                    </div>

                    <div className="form-group">
                        <label>Author: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.post_author}
                                onChange={this.onChangeAuthor}
                                />
                    </div>

                    <div className="form-group">
                        <label>Article Content: </label>
                        <textarea rows="10"
                                type="text" 
                                className="form-control"
                                value={this.post_content}
                                onChange={this.onChangePostContent}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Post" className="btn btn-primary" />
                    </div>
                </form>
                
            </div>

        
        )
    }
}