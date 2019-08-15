import React, { Component } from 'react';
import Jumbotron from '../../Partials/Jumbotron/Jumbotron2';
import YouTube from 'react-youtube';
import '../Pages/style.css';



export default class TodosList extends Component {
    render() {
        return (
    <div>
        {/* This is the Jumbotron Section */}
        <Jumbotron />

{/* This is the mailing list section */}
<section id ="welcome">
        <div class="container">
        <div class="welcome text-center wow slideInLeft">
            <h1>\Escaping\the Generational STEM gap</h1>
            <p>One <strong>STUDENT</strong> At A Time</p>


            
        </div>   
        </div>
    </section>

    {/* Featured Articles Section */}

        <div>
            <h1 class="text-center feat-title mt-5">Today's Featured</h1>
        </div>
        <section id="about">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center">
                    <img src= "http://america.aljazeera.com/content/ajam/articles/2015/3/16/silicon-valley-diversity-problem/jcr:content/headlineImage.adapt.1460.high.diversity_tech.1426526463407.jpg" class="img-fluid" alt="dancer" />
                    </div>

                    <div class="col-md-6 text-justify">
        <h3>Problems Beyond Hiring Practices</h3>
        <h4>Written by:Amadou Diallo</h4>
        <p>Today’s approach couldn’t be more different. Census data shows, for example, that the majority of people who took a new job last year weren’t searching for one: Somebody came and got them. Companies seek to fill their recruiting funnel with as many candidates as possible, especially “passive candidates,” who aren’t looking to move. Often employers advertise jobs that don’t exist, hoping to find people who might be useful later on or in a different context.</p>
    </div>

    <div class="col-md-6 text-justify">
            <h3>AA Coder Blazes Tech</h3>
            <p>Black entrepreneurs make up a tiny percentage of the tech workforce. Gregory Lowe started out with no formal coding education or investor-relation training, but is now the designer of multiple successful mobile applications.</p>
            <p>Watch clip to learn more about Mr. Lowe's journey into techa and what he believes to be the driving force to his success in this arena.</p>
        </div>
        <div class="col-md-6">
        <div class="embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/z6SAjgnk9tA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
        </div>
    </div>
                </div>
            </div>
        </section>
         {/* section********************* */}

        <div>
            <section id="services">
                <div class="container">
                    <div class="row">
                    <div class="col-md-3">
                    <img src="https://g.foolcdn.com/art/companylogos/square/mdb.png" alt="MongoDB-logo" id="iconTwo"/>
                    <h4><strong>MongoDB</strong></h4>
    <p>MongoDB is an open-source document-based database management tool that stores data in JSON-like formats. It is a highly scalable, flexible and distributed NoSQL database.</p>
                    </div>
                    <div class="col-md-3">
    <img src="https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png" alt="white shoes" id="iconTwo" />
    <h4><strong>Express</strong></h4>
    <p>Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function callsc</p>
    </div>

    <div class="col-md-3" >
    <img src="https://www.trzcacak.rs/myfile/detail/25-250313_file-react-icon-svg-react-native-logo-png.png" id="iconThree" />
    <h4><strong>React</strong></h4>
    <p>ReactJS basically is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It's used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.</p>
    </div>

    <div class="col-md-3" >
    <img src="https://readyspace.com.hk/wp-content/uploads/2018/01/logo-hexagon-card.png"  id="iconThree"/>
    <h4><strong>Node</strong></h4>
    <p>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>
    </div>
                    </div>
                </div>
            </section>
        </div>

        <section id="testimonials">
    <div class="container">
        <h1 class="text-center">Testimonials</h1>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>Iste odit adipisci maxime corrupti saepe commodi iusto debitis.</p><br/>
        <div class="row">
            <div class="col-md-4">
                <p class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste odit adipisci maxime corrupti saepe commodi iusto debitis.<br/><span class="fab fa-twitter-square"></span><span>@username</span></p> 
                <img src="https://d20t6we9nb6rnn.cloudfront.net/anncellandarthur/1551312662353-1600x580.jpg" alt="us" class="us" />

            </div>
            <div class="col-md-4 middle">
                    <p class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste odit adipisci maxime corrupti saepe commodi iusto debitis.<br/><span class="fab fa-twitter-square"></span><span>@username</span></p> 
                    <img src="https://www.houstonisd.org/cms/lib2/TX01001591/Centricity/Domain/40671/stewart.png" alt="pic 1" class="us" />
    
                </div>
                <div class="col-md-4">
                        <p class="review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste odit adipisci maxime corrupti saepe commodi iusto debitis.<br/><span class="fab fa-twitter-square"></span><span>@username</span></p> 
                        <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1532536595/springbranchisdcom/ysweoupmitfs6girvffg/CareCoachAPII.jpg" alt="us" class="AP" />
        
                    </div>

        </div>
    </div>
</section>


        <div id="subscribe">
<div class="container">
    <div class="subscribe text-center wow slideInLeft">
    <h3>Code With Us</h3>
    <p>Subscribe and receive weekly MERN resources</p>
    <div class="input-group">
        <input type="email" class="form-control" placeholder="Enter Address Here" />
        <div class="input-group-append">
            <button type="submit" class="input-group-text btn">Subscribe</button>
        </div>
</div>
</div>
</div>
</div>
        
       




    </div>
        )
    }
}