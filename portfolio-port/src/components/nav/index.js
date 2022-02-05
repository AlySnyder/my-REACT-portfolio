import React from "react";
import { Link } from "react-router-dom";


function nav() {

  const categories = [
    {
      name: "About Me",
      description:
        "What Alex Snyder is all about!",
        linkPath: "/about",
    },
    { name: "Contact", description: "Contact me via E-mail", linkPath: '/contact'},
    { name: "Resume", description: "Download my Resume here!", linkPath:'/resume'},
    {
      name: "Portfolio",
      description: "Check out my projects!", linkPath: '/portfolio'
    },
  ];

  return (
    <header>
      <h2>
        <Link to="/">
        <span role="img" aria-label="Techie woman"> 👩🏻‍💻</span> Alex Snyder
        </Link>
      </h2>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className="mx-1"
              key={category.name}
            >
              <Link to={category.linkPath}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default nav;
