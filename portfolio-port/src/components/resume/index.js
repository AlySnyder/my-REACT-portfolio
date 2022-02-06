import React from "react";
import '../../App.css';
import coverImage from "../../assets/cover/github.jpeg";
import Nav from "../nav";
import About from "../about";
import { Link } from "react-router-dom";
import { Button, Card, ListGroup } from "react-bootstrap";



function Resume() {
  return (
    <section className="my-5">
      <a href="Alex Snyder Resume.rtf">
        <Button>Click to download my Resume.</Button>
      </a>
      {/* <div className="card" style="width: 18rem;">
  <div class="card-header">
    Skills
  </div> */}
      <Card>
        <Card.Body>
          <h1>Skills</h1>
          <ListGroup>
            <ListGroup.Item>HTML</ListGroup.Item>
            <ListGroup.Item>CSS</ListGroup.Item>
            <ListGroup.Item>Javascript</ListGroup.Item>
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>MongoDB</ListGroup.Item>
            <ListGroup.Item>MySql</ListGroup.Item>
            <ListGroup.Item>State</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      {/* </div> */}
    </section>
  );
}

export default Resume;