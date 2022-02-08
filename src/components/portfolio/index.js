import React from "react";
import '../../App.css';
import { Button, Card, Row, Col } from "react-bootstrap";
import Project from "./project";


function Portfolio() {

  const projects = [
    {
      title: "Covid-19 Activity Tracker",
      image: "https://user-images.githubusercontent.com/59854414/147838352-dc9a492e-b0fb-4da1-870e-e01dc6ca1fbf.png",
      githubRepo: "https://github.com/AlySnyder/interactive-project-15",
      deployment: "https://quiet-badlands-14441.herokuapp.com",
    },
    {
      title: "Alex's Awesome Tech Blog",
      image: "Alys tech blog.png",
      githubRepo: "https://github.com/AlySnyder/alys-awesome-tech-blog",
      deployment: "https://gentle-brook-44437.herokuapp.com",
    },
    {
      title: "My Portfolio",
      image: "Alys portfolio.png",
      githubRepo: "https://github.com/AlySnyder/my-REACT-portfolio",
      deployment: "https://apple.com",
    },
    {
      title: "Live Weather Dashboard",
      image: "https://github.com/AlySnyder/weather-dashboard/raw/main/weather-dasboard.png",
      githubRepo: "https://github.com/AlySnyder/weather-dashboard",
      deployment: "https://alysnyder.github.io/weather-dashboard/",
    },
    {
      title: "Work Day Scheduler",
      image: "workday scheduler.png",
      githubRepo: "https://github.com/AlySnyder/workday-scheduler",
      deployment: "https://alysnyder.github.io/workday-scheduler/",
    },
    {
      title: "Note Taker",
      image: "notetaker.png",
      githubRepo: "https://github.com/AlySnyder/note-taker",
      deployment: "https://intense-badlands-81787.herokuapp.com/notes",
    },
  ];

  return (
    <Row className="mt-5">
      {projects.map((project) => (
        <Col sm={4} className="mb-3">

          <Project
            title={project.title}
            image={project.image}
            githubRepo={project.githubRepo}
            deployment={project.deployment}
          />

        </Col>
      ))}
    </Row>
  );
}

export default Portfolio;