import React from "react";
import '../../App.css';
import { Button, Card, ListGroup } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";



function Resume() {
  return (
    <section className="my-5">
      <a href="Alex Snyder Resume.rtf">
        <Button variant="info">Click here to download my Resume.</Button>
      </a>
      <Row className="justify-content-md-center mb-5 mt-5">
        <Col md={5}>
          <Card className="mt-5 bg-dark text-white">
            <Card.Body>
              <h1>My Skills</h1>
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
        </Col>
      </Row>
      {/* </div> */}
    </section>
  );
}

export default Resume;