import React from "react";
// import Logo from "../../public/assets/images/weatherdash.PNG";
import Logo from "./images/weatherdash.PNG";
function Project() {
  return (
    <div>
      <div className="card" style={{ width: 288 }}>
        <img src={Logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="./" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
