import React, { Component } from 'react';
// import '../App.css';
// import { BrowserRouter, Route } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class Mistake extends Component {
  // render() {
  //   return (
  //     <div className="">
  //       <p>mistake</p>
  //     </div>
  //   );
  // }

  // state = {copied: false};



  // onCopy = () => {
  //   // this.setState({copied: true});
  //   console.log(this.state.copied);
  //
  //   setTimeout(() => this.setState({copied: false}), 3000);
  //   // console.log(this.state.copied);
  // };

  render() {
    return (
      <div className="app">

        <section className="section">
          <p>1. Button</p>
          <CopyToClipboard text='mine'>
            <span style={{border: '1px solid red'}}>Copy to clipboard</span>
          </CopyToClipboard>
        </section>

      </div>
    );
  }


}
