import React, { Component } from 'react';
import '../App.css';
// import foto from '../images/myfoto.jpeg';
// <img src={foto} alt="my foto"/>

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="my-name">
          <h4>Ali Mohammad Pudina</h4>
          <h5>Web developer</h5>
        </div>

        <div className="main-foto-container">

            <div className="rotate-container">
              <div className="foto-container-front">
                
              </div>

              <div className="foto-container-back">
                <p>Web developer</p>
                <p>Self learner</p>
                <p>English level: B2</p>
                <p>German level: B2</p>
                <p>Driving licence: Class B</p>
                <p>Always ready to learn</p>
              </div>
            </div>

        </div>

        <div className="under-foto">
          <h6>Move the <b>Mouse</b> and look at the <b>EYE</b>!</h6>
          <p>Click on the <b>EYE</b> to come to this Route/Home again.</p>
          <p>To see some of my projects click on the <b>WORK</b> button.</p>
        </div>
      </div>
    );
  }
}
