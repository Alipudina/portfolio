import React, { Component } from 'react';
import '../App.scss';
import darya from '../images/lifeguard.jpg';
// import {TransitionGroup, CSSTransition} from "react-transition-group";

export default class Work extends Component {
  render() {
    return (
      <>
      <div className="jumbotron contact-details">
        <h3>Some Links of my work</h3>
      </div>

      <div className="project-container first-project">
        <h6>E-Shop</h6>
        <p>Using Html, Sass and Javascript, React-app, Router, Redux, Bootstrap (Invidual-project)</p>
        <li>
          <a href="https://pizza-shop.netlify.com/">Pizza Shop</a>
        </li>
      </div>

      <div className="project-container second-project">
        <h6>Teppisch Wäscherei</h6>
        <p>Pair working, using Html, Sass and Javascript</p>
          <li>
            <a href="http://unique-waescherei.de/">unique-waescherei.de</a>
          </li>
      </div>

      <div className="project-container third-project">
        <h6>Hamburg Weather Widget</h6>
        <p>Using WEATHER API</p>
          <li>
            <a href="https://hamburg-weather.netlify.com/">Hamburg Weather Widget</a>
          </li>
      </div>

      <div className="project-container last-project">
        <h6>Evernote Project</h6>
        <p>Team of three, using Html, Css</p>
          <li>
            <a href="https://evernote.netlify.com/">EVERNOTE</a>
          </li>
      </div>
      </>

    );
  }
}
