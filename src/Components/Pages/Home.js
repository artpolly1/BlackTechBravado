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
            <h1>Join Our Mailing list</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia placeat facere dolore corporis explicabo voluptates magni, qui cum obcaecati. Eum dolor architecto in rerum qui id doloribus dolorem ut totam?</p>
            <button type="submit" class="btn home-btn bg-light">Submit</button>
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit dolores voluptatibus ad natus, incidunt nulla? Quod laudantium illum nam nostrum nisi quibusdam quae temporibus consectetur illo! Odit, voluptate earum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio odio ut praesentium inventore, beatae sit sunt expedita similique ?</p>
    </div>

    <div class="col-md-6 text-justify">
            <h3>AA Coder Blazes Tech</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit dolores voluptatibus ad natus, incidunt nulla? Quod laudantium illum nam nostrum nisi quibusdam quae temporibus consectetur illo! Odit, voluptate earum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio odio ut praesentium inventore, beatae sit sunt expedita similique ?</p>
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
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste odit adipisci maxime corrupti saepe commodi iusto debitis.</p>
                    </div>
                    <div class="col-md-3">
    <img src="https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png" alt="white shoes" id="iconTwo" />
    <h4><strong>Express</strong></h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste odit adipisci maxime corrupti saepe commodi iusto debitis.</p>
    </div>

    <div class="col-md-3" >
    <img src="https://www.trzcacak.rs/myfile/detail/25-250313_file-react-icon-svg-react-native-logo-png.png" id="iconThree" />
    <h4><strong>React</strong></h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste odit adipisci maxime corrupti saepe commodi iusto debitis.</p>
    </div>

    <div class="col-md-3" >
    <img src="https://readyspace.com.hk/wp-content/uploads/2018/01/logo-hexagon-card.png"  id="iconThree"/>
    <h4><strong>React</strong></h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste odit adipisci maxime corrupti saepe commodi iusto debitis.</p>
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
        
        <section id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio odio ut praesentium inventore?</p>

            </div>
            <div class="col-md-3">
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




    </div>
        )
    }
}