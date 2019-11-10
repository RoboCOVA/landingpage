import React, { Component } from 'react';
import Alert from './Alert';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {joinSubscriber} from '../actions/user'


class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state={
            email:''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        this.setState({email:e.target.value})
    }
     onSubmit(e){
        e.preventDefault(); 
        const data={
            email:this.state.email
        }    
        this.props.joinSubscriber(data)
    }
  render() {
      const {email} = this.state
    return (
        <div>
        <header class="home-area overlay" id="home_page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 hidden-sm col-md-5">
                    <figure class="mobile-image wow fadeInUp" data-wow-delay="0.2s">
                        <img src="/assetes/firstpng1.png" alt="" />
                    </figure>
                </div>
                <div class="col-xs-12 col-md-7">
                    <div class="space-80 hidden-xs"></div>
                    <h1 class="wow fadeInUp" data-wow-delay="0.4s">Start connecting with people.</h1>
                    <div class="space-20"></div>
                    <div class="desc wow fadeInUp" data-wow-delay="0.6s">
                        <p>Mediabox offers a platform for people to get connected through groups created under various catagories.</p>
                    </div>
                    <div class="space-20"></div>
                    <a href="#" class="bttn-white wow fadeInUp" data-wow-delay="0.8s"><i class="lnr lnr-download"></i>Download App</a>
                </div>
            </div>
        </div>
    </header>

    <section class="progress-area gray-bg" id="progress_page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6">
                    <div class="page-title section-padding">
                        <h5 class="title wow fadeInUp" data-wow-delay="0.2s">About app</h5>
                        <div class="space-10"></div>
                        <h3 class="dark-color wow fadeInUp" data-wow-delay="0.4s">Interraction within groups</h3>
                        <div class="space-20"></div>
                        <div class="desc wow fadeInUp" data-wow-delay="0.6s">
                            <p>Ethiopian Fresh Coffee aroma time with Friends and Family, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                        </div>
                        <div class="space-50"></div>
                        <a href="#" class="bttn-default wow fadeInUp" data-wow-delay="0.8s">Learn More</a>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6">
                    <figure class="mobile-image">
                        <img src="/assetes/images/second4.png" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    </section>

    <section class="feature-area section-padding-top" id="features_page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2">
                    <div class="page-title text-center">
                        <h5 class="title">Categories</h5>
                        <div class="space-10"></div>
                        <h3>5 Distinct group categories</h3>
                        <div class="space-60"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="service-box wow fadeInUp" data-wow-delay="0.4s">
                        <div class="box-icon">
                            <i class="lnr lnr-apartment"></i>
                        </div>
                        <h4>Job Opportunities</h4>
                        <p>Find your Dream job.</p>
                    </div>
                    <div class="space-60"></div>
                    <div class="service-box wow fadeInUp" data-wow-delay="0.2s">
                        <div class="box-icon">
                            <i class="lnr lnr-coffee-cup"></i>
                        </div>
                        <h4>Shay-Buna</h4>
                        <p>Ethiopian Fresh Coffee aroma time with Friends and Family.</p>
                    </div>
                    <div class="space-60"></div>
                    <div class="service-box wow fadeInUp" data-wow-delay="0.6s">
                        <div class="box-icon">
                            <i class="lnr lnr-chart-bars"></i>
                        </div>
                        <h4>Startups</h4>
                        <p>We are in Digital Age, Let Us Build it together.</p>
                    </div>
                    <div class="space-60"></div>
                </div>
                <div class="hidden-xs hidden-sm col-md-4">
                    <figure class="mobile-image">
                        <img src="/assetes/images/second3.png" alt="Feature Photo" />
                    </figure>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="service-box wow fadeInUp" data-wow-delay="0.2s">
                        <div class="box-icon">
                            <i class="lnr lnr-earth"></i>
                        </div>
                        <h4>Diaspora</h4>
                        <p>We are living the Comfort Zone, How about helping Our Families.</p>
                    </div>
                    <div class="space-60"></div>
                    <div class="service-box wow fadeInUp" data-wow-delay="0.4s">
                        <div class="box-icon">
                            <i class="lnr lnr-bicycle"></i>
                        </div>
                        <h4>Sports</h4>
                        <p>Follow your Dream team, Create them or Follow them.</p>
                    </div>
                    <div class="space-60"></div>
                    <div class="space-60"></div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <div class="page-title">
                        <h5 class="title wow fadeInUp" data-wow-delay="0.2s">Features</h5>
                        <div class="space-10"></div>
                        <h3 class="dark-color wow fadeInUp" data-wow-delay="0.4s">Simplistic Design & easy to use user interface</h3>
                    </div>
                    <div class="space-20"></div>
                    <div class="desc wow fadeInUp" data-wow-delay="0.6s">
                        <p>Ethiopian Fresh Coffee aroma time with Friends and Familylaborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                    </div>
                    <div class="space-50"></div>
                    <a href="#" class="bttn-default wow fadeInUp" data-wow-delay="0.8s">Learn More</a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                    <div class="space-60 hidden visible-xs"></div>
                    <div class="service-box wow fadeInUp" data-wow-delay="0.2s">
                        <div class="box-icon">
                            <i class="lnr lnr-clock"></i>
                        </div>
                        <h4>Easy Notifications</h4>
                        <p>Ethiopian Fresh Coffee aroma time with Friends and Family, sed do eiusmod tempor.</p>
                    </div>
                    <div class="space-50"></div>
                    <div class="service-box wow fadeInUp" data-wow-delay="0.2s">
                        <div class="box-icon">
                            <i class="lnr lnr-laptop-phone"></i>
                        </div>
                        <h4>Chat support</h4>
                        <p>Ethiopian Fresh Coffee aroma time with Friends and Family, sed do eiusmod tempor.</p>
                    </div>
                    <div class="space-50"></div>
                    <div class="service-box wow fadeInUp" data-wow-delay="0.2s">
                        <div class="box-icon">
                            <i class="lnr lnr-cog"></i>
                        </div>
                        <h4>Full fledged setting</h4>
                        <p>Ethiopian Fresh Coffee aroma time with Friends and Family, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="download-area overlay">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 hidden-sm">
                    <figure class="mobile-image">
                        <img src="/assetes/images/download-image2.png" alt="" />
                    </figure>
                </div>
                <div class="col-xs-12 col-md-6 section-padding">
                    <h3 class="white-color">Download The App</h3>
                    <div class="space-20"></div>
                    <p>Ethiopian Fresh Coffee aroma time with Friends and Family. Quibusdam possimus eaque magnam eum praesentium unde.</p>
                    <div class="space-60"></div>
                    <a href="#" class="bttn-white sq"><img src="/assetes/images/play-store-icon.png" alt="Play Store Icon" /> Play Store</a>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer-area" id="contact_page">
        <div class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="page-title text-center">
                            <h5 class="title">Contact US</h5>
                            <h3 class="dark-color">Find Us By Bellow Details</h3>
                            <div class="space-60"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-4">
                        <div class="footer-box">
                            <div class="box-icon">
                                <span class="lnr lnr-map-marker"></span>
                            </div>
                            <p>8-54 Paya Lebar Square <br /> 60 Paya Lebar Roa SG, Singapore</p>
                        </div>
                        <div class="space-30 hidden visible-xs"></div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="footer-box">
                            <div class="box-icon">
                                <span class="lnr lnr-phone-handset"></span>
                            </div>
                            <p>+65 93901336 <br /> +65 93901337</p>
                        </div>
                        <div class="space-30 hidden visible-xs"></div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="footer-box">
                            <div class="box-icon">
                                <span class="lnr lnr-envelope"></span>
                            </div>
                            <p>yourmail@gmail.com <br /> backpiper.com@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
               
                <div class="subscribe-area section-padding">
                
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2">
                                <div class="subscribe-form text-center">
                                    <h3 class="blue-color">Subscribe To Get Updated</h3>
                                    <Alert />
                                    <div class="space-20"></div>
                                    <form id="mc-form" onSubmit={e => this.onSubmit(e)}>
                                        <input type="email" value={email} onChange={e => this.onChange(e)} class="control" placeholder="Enter your email" required="required" id="mc-email" />
                                        <button class="bttn-white active" type="submit"><span class="lnr lnr-location"></span> Subscribe</button>
                                        <label class="mt10" for="mc-email"></label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
    </footer>
</div>

    );
  }
}


LandingPage.propTypes = {
    joinSubscriber: PropTypes.func.isRequired,
 
}

export default connect(null,{joinSubscriber})(LandingPage);
