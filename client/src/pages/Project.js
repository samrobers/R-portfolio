import React from "react";
// import Logo from "../../public/assets/images/weatherdash.PNG";
import DailyDive from "./images/dailydive.PNG";
// import Logo from "./images/weatherdash.PNG";
import Shopalot from "./images/shopalot.PNG";
import MlbTracker from "./images/mlbtracker.PNG";
import FitnessTracker from "./images/fitnesstracker.PNG";
function Project() {
  return (
    <div>
      <main class="text-white">
        <section class="row mt-5">
          <section class="row mt-5">
            <section className="row mt-5 text-center justify-content-center">
              <div
                className="card mx-4 project-card2 text-color p-3 shadow-lg"
                style={{ width: 288 }}
              >
                <img
                  src={Shopalot}
                  className="card-img-top image-style"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>Shop-A-Lot</strong>
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="./" className="btn mx-1 btn-outline-light">
                    Source Code
                  </a>
                </div>
              </div>
              <div
                className="card mx-4 project-card2 p-3 shadow-lg"
                style={{ width: 288 }}
              >
                <img
                  src={MlbTracker}
                  className="card-img-top image-style"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>MLB Tracker</strong>
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="./" className="btn btn-outline-light">
                    Source Code
                  </a>
                </div>
              </div>
              <div
                className="card mx-4 project-card2 p-3 shadow-lg"
                style={{ width: 288 }}
              >
                <img
                  src={FitnessTracker}
                  className="card-img-top image-style"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>Fitness Tracker</strong>
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="./" className="btn btn-outline-light">
                    Source Code
                  </a>
                </div>
              </div>
              <div
                className="card mx-4 project-card2 p-3 shadow-lg"
                style={{ width: 288 }}
              >
                <img
                  src={DailyDive}
                  className="card-img-top image-style"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>Daily Dive</strong>
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="./" className="btn btn-outline-light">
                    Source Code
                  </a>
                </div>
              </div>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Project;
