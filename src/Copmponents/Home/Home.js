import React from "react";
import Header from "./Header";
import "./Home.css";
import image1 from "../../images/Capture.png";
import image2 from "../../images/Capture.png";



const Home = ({cont , us}) => {



  return (
    <>
      <Header />
      <section className="aboutus">
        <div className={cont}>
          <div className="row">
            <div className="col-md-6">
              <img src={image1} alt="img1" />
            </div>
            <div className="col-md-6">
              <h2>About us</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button>
                <a href="#about">learn more</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="serv">
      </section>

      <section className="whychooseus">
        <div className={us}>
          <div className="row">
            
            <div className="col-md-6">
              <h2>WHY CHOOSE US?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button>
                <a href="#about">learn more</a>
              </button>
            </div>
            <div className="col-md-6" style={{display:'flex' , justifyContent:'end'}}>
              <img src={image2} alt="img2" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
