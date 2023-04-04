import './Content.css'

import logo1 from "../../images/Anti Virus 32.png";
import logo2 from "../../images/Book 32.png";
import logo3 from "../../images/API32.png";
import logo4 from "../../images/Box 32.png";

export default function Content() {
  return (
              <div className="logos">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={logo1} alt="logo1" />
            </div>
            <div className="col-md-3">
              <img src={logo2} alt="logo2" />
            </div>
            <div className="col-md-3">
              <img src={logo3} alt="logo3" />
            </div>
            <div className="col-md-3">
              <img src={logo4} alt="logo4" />
            </div>
          </div>
        </div>
      </div>
  )
}
