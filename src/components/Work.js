import React, { Component } from 'react';
import '../App.scss';
// import {TransitionGroup, CSSTransition} from "react-transition-group";

export default class Work extends Component {
  render() {
    return (
      <>
      <div className="jumbotron contact-details">
        <h3>Some Links of my projects</h3>
      </div>

      <div className="project-container first-project">
        <h6>E-Shop</h6>
        <p>Using Html, Sass and Javascript, React-app, Router, Redux, Bootstrap</p>
        <li>
          <a href="https://e-shop-ali.netlify.com">Pizza Shop</a>
        </li>
      </div>

      <div className="project-container second-project">
        <h6>Teppisch Wäscherei</h6>
        <p>Using Html, Sass and Javascript</p>
          <li>
            <a href="http://unique-waescherei.de/">unique-waescherei.de</a>
          </li>
      </div>

      <div className="project-container third-project">
        <h6>NaTours project</h6>
        <p>
          Tech: Html and advanced Css , Sass(variable, mixins, BEM methode),
          Mediaquery(responsive for mobile, tablet etc)
        </p>

          <li>
            <a href="https://my-natours-project.netlify.com">NaTours project</a>
          </li>
      </div>

      <div className="project-container last-project">
        <h6>Evernote Project</h6>
        <p>Using Html, Css</p>
          <li>
            <a href="https://evernote.netlify.com">EVERNOTE</a>
          </li>
      </div>
      </>

    );
  }
}
