import React, { Component } from 'react';
import '../App.scss';
import { Card, Button} from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <>
        <div className="jumbotron contact-details">
          <h3>About me</h3>
        </div>

        <Card className="card-block education">
          <Card.Body>
            <Card.Title>Education</Card.Title>
            <Card.Text>
              Digital Career Institute Hamburg<br />
              Intensive course in Full Stack Web Developing
            </Card.Text>

            <Card.Text>
              HTML, CSS, SASS, BOOTSTRAP, JAVASCRIPT, jQUERY, REACT, REDUX
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-block language-skills">
          <Card.Body>
            <Card.Title>LANGUAGE SKILLS</Card.Title>
            <Card.Text>FARSI-mother tongue, &nbsp; ENGLISH B2, &nbsp; GERMAN B2</Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-block">
          <Card.Body>
            <Card.Title>EXPERIENCE</Card.Title>
            <Card.Text>Some of my projects that you can see them in <b>WORK</b> and more</Card.Text>
          </Card.Body>
        </Card>
      </>

    );
  }
}
