import React from "react";
import '../../App.css';
import coverImage from "../../assets/cover/github.jpeg";
import Nav from "../nav";
import About from "../about";
import { Button, Card, Row, Col } from "react-bootstrap";
import blogImage from "../../assets/alysblog.jpg"


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
      image: "https://howtostartablog.com/wp-content/uploads/2018/09/how-to-start-a-blog-1600x960.jpg",
      githubRepo: "https://github.com/AlySnyder/alys-awesome-tech-blog",
      deployment: "https://gentle-brook-44437.herokuapp.com",
    },
    {
      title: "My Portfolio",
      image: "https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto/uploads/2020/06/SOC101_Portfolio_Guide.png",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHO_5lV9ejy8iv-Xv8jfOFa8yxLgWn5Y6OA&usqp=CAU",
      githubRepo: "https://github.com/AlySnyder/workday-scheduler",
      deployment: "https://alysnyder.github.io/workday-scheduler/",
    },
    {
      title: "Note Taker",
      image: "https://hip2save.com/wp-content/uploads/2020/08/Lisa-Frank-Notebooks-at-Walmart-.jpg",
      githubRepo: "https://github.com/AlySnyder/note-taker",
      deployment: "https://intense-badlands-81787.herokuapp.com/notes",
    },
  ];

  return (
    <Row className="mt-5">
      {projects.map((project) => (
        <Col sm={4} className="mb-3">
          <Card bg="dark" text="warning">
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Row>
                <Col>
                  <a href={project.githubRepo} target="_blank">
                    <Button>Github Repo</Button>
                  </a>
                </Col>
                <Col>
                  <a href={project.deployment} target="_blank">
                    <Button>Deployment</Button>
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Portfolio;