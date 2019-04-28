import React, { Component } from 'react';
import '../App.css';
import {contactData} from './data';
// import { BrowserRouter, Route } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class Contact extends Component {

  copyHandler(ev) {
    const copyTarget=ev.target;
    copyTarget.textContent='copied';
    copyTarget.style.color='green';

    setTimeout(() => {
        copyTarget.textContent='copy'
        copyTarget.style.color='black'
    },3000)
  }

  render() {
    return (
      <>
        <div className="jumbotron contact-details">
          <h3>Contact details</h3>
        </div>
        <div className="contact-container">
          {contactData.map((elem, index) => {
            return (
              <div className="data-container" key={index}>

                <span className="titel">{elem.ident}:</span>
                <span className="name">{elem.name}</span>
                <CopyToClipboard text={elem.name}>
                  <p onClick={this.copyHandler}>copy</p>
                </CopyToClipboard>
              </div>
            )
          })}
       </div>

       <div className="map-container">
         <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.494389126106!2d9.899637515848807!3d53.62032158003735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b186f761d8b55b%3A0x37b9d6179932ba71!2sOliver-Li%C3%9Fy-Stra%C3%9Fe%2C+22523+Hamburg!5e0!3m2!1sen!2sde!4v1556232709914!5m2!1sen!2sde"
           frameBorder="0" style={{border: '0'}} allowFullScreen>
         </iframe>
       </div>
      </>
    );
  }
}
