import React from "react";
import '../../App.css';
import { Button, Card, Row, Col } from "react-bootstrap";


function Project({ title, image, githubRepo, deployment }) {

  return (
    <Card bg="dark" text="warning">
      <Card.Img style={{ width: "100%", height: "15vw", objectFit: "cover" }} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Row>
          <Col>
            <a href={githubRepo} target="_blank">
              <Button>Github Repo</Button>
            </a>
          </Col>
          <Col>
            <a href={deployment} target="_blank">
              <Button>Deployment</Button>
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Project;