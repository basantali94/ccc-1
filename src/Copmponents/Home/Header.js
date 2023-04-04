import React from "react";
import "./Header.css";
import Content from "../content/Content";

const Header = () => {


  return (
    <header>
      <div className="container">
        <div className="w-50 d-flex justify-content-center flex-column">
          <h1>
            <span> anyone can earn</span>
            <span> from trade</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button>Apply For Access</button>
        </div>
      <Content />
      </div>
    </header>
  );
};

export default Header;
