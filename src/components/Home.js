import React, { Component } from 'react';
import '../App.css';
import foto from '../images/myfoto.jpeg';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="my-name">
          <h4>Ali Mohammad Pudina</h4>
          <p>Frontend developer</p>
        </div>

        <div className="main-foto-container">
          <div className="foto-container">
            <img src={foto} alt="my foto"/>
          </div>
          <div className="personal-details">
            <p>Age: 37</p>
            <p>Marital Status: Married</p>
            <p>Nationality: Afghan</p>
          </div>
        </div>

        <div className="under-foto">
          <h6>Open for any <b>Offer</b> as Frontend developer</h6>
          <p>Click on <b>EYE</b> to come to this Route/home again.</p>
        </div>

        <div className="responsive-description">
          <p>In this portfolio is not concentrated on responsive mode.</p>
        </div>
      </div>
    );
  }
}
