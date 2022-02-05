import React from "react";
import '/Users/alexsnyder/UM Coding Bootcamp/homework/my-REACT-portfolio/portfolio-port/src/App.css';
import coverImage from "../../assets/cover/github.jpeg";



function about() {
  return (
    <section className="my-5">
      <img src={coverImage} classsName="my-2" style={{width: "100%"}} alt="cover" />
    </section>
  );
}

export default about;