import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Mistake from './components/Mistake';
import Work from './components/Work';
import About from './components/About';
// import {TransitionGroup, CSSTransition} from "react-transition-group";
import { AnimatedSwitch } from 'react-router-transition';

// <TransitionGroup component={null}>
//         <CSSTransition timeout={200} classNames="fade">
//              <Component handleClick={this.props.handleClick} />
//         </CSSTransition>
//    </TransitionGroup>


class App extends Component {
  constructor(props) {
    super(props);
    this.state={x: '', y: ''}
    this.onMouseMoveFunc=this.onMouseMoveFunc.bind(this);
  }

  onMouseMoveFunc(ev) {
    const eyeCircle= this.refs.thirdCircle;
    this.setState({x: ev.screenX, y: ev.screenY})
    eyeCircle.style.left= `${this.state.x/35}px`;
    eyeCircle.style.top= `${this.state.y/80}px`;
  }


  render() {
    return (
      <BrowserRouter>
        <div className="main-container" onMouseMove={this.onMouseMoveFunc}>

          <div className="two-flex">
            <div className="work">

              <NavLink to="/">
                <div className="some first-circle" ref="firstCircle">
                  <div className="second-circle">
                    <div className="third-circle" ref="thirdCircle"></div>
                  </div>
                </div>
              </NavLink>

            </div>
            <div className="work">
              <div className="some">
                <NavLink className="three-links" to="/work" activeStyle={{opacity: '.4'}}>Work</NavLink>
              </div>
            </div>
          </div>

          <div className="middle-container">
            <Switch>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >

              <Route exact path="/" component={Home} />
              <Route path="/work" component={Work} />



              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/mistake" component={Mistake} />

            </AnimatedSwitch>

            </Switch>
          </div>

          <div className="two-flex">
            <div className="work">
              <div className="some">
                <NavLink className="three-links" to="/about" activeStyle={{opacity: '.4'}}>About</NavLink>
              </div>
            </div>
            <div className="work">
              <div className="some">
                <NavLink className="three-links" to="/contact" activeStyle={{opacity: '.4'}}>Contact</NavLink>
              </div>
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
