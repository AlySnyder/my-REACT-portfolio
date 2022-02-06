import React, { Component } from "react";
import '/Users/alexsnyder/UM Coding Bootcamp/homework/my-REACT-portfolio/portfolio-port/src/App.css';
import coverImage from "../../assets/cover/github.jpeg";
import TextTransition, { presets } from "react-text-transition";
import { Card, Col, Image, Row } from "react-bootstrap";
import ProfileUi from 'react-profile-card';
import { Avatar } from "@mui/material";



function About() {
  const texts = [
    "HTML",
    "CSS",
    "Javascript",
    "REACT",
    "MongoDB",
    "MySQL",
    "State",
    "MERN",
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      1000
    );

    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="text-white">
            I ❤️ <TextTransition
              text={texts[index % texts.length]}
              springConfig={presets.wobbly}
            />
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-5 mt-5">
        <Col md={5}>
          <Card bg="dark" text="white" body>
          <Row className="justify-content-md-center">
            <Col md={4}>
              <Image className="mb-5 mt-2" roundedCircle fluid thumbnail src="avatar2.png" />
            </Col>
            <Card.Text>
              Hi!<br/>
              Thank you for visiting my portfolio.<br/>
               I am a Full Stack Web Developer based in Miami, FL. <br/> 
              I am currently enrolled in University of Miami Coding Bootcamp and scheduled to graduate in February 2022.<br/> Please use the contact link to send me a message. I look forward to hearing from you!
              </Card.Text>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )

}




export default About;