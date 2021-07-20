import React from "react";
import Fitness from "./images/fitnesstracker.PNG";
function FitTrack() {
  return (
    <>
      <section className="row p-5 project-background">
        <img className="project-focus col-sm-4" src={Fitness} alt="" />
        <section className="col-sm-7">
          <section className="row text-center justify-content-center">
            <section className="col-sm-2"></section>
            <section className="col-sm-5">
              <section className="project-text">
                <button
                  className="
                      w-100
                      btn btn-lg btn-secondary
                      fw-bold
                      bg-white
                      text-dark
                      zoom-nav
                    "
                >
                  <a
                    className="project-btn-style"
                    href="https://trackyourworkoutsr.herokuapp.com/?id=60c6bbdaa5e6880015232d2a"
                  >
                    Demo
                  </a>
                </button>
                <h4 class="mt-4">
                  <strong>Description</strong>
                </h4>
                <p>
                  This application was designed as a fitness tracker for users
                  to view their progress over a period of time.
                </p>
              </section>
              <section className="project-text">
                <h4>
                  <strong>Functionality</strong>
                </h4>
                <p>
                  It allows the user to factors to their workout as well as
                  choose the type of their workout. The data is stored and once
                  the user has a week of workouts they can see a graph of the
                  progress.
                </p>
              </section>
            </section>

            <section className="col-sm-5">
              <section className="project-text">
                <button
                  className="
                      w-100
                      btn btn-lg btn-secondary
                      fw-bold
                      bg-white
                      text-dark
                      zoom-nav
                    "
                >
                  <a
                    className="project-btn-style"
                    href=" https://github.com/samrobers/fitnessTracker"
                  >
                    Source Code
                  </a>
                </button>
                <h4 class="mt-4">
                  <strong>Contribution</strong>
                </h4>
                <p>
                  MongoDB utilization to keep the user data persistent and
                  provide that information to the user within a certain date
                  window.
                </p>
              </section>
              <section className="project-text">
                <h4>
                  <strong>Technology</strong>
                </h4>
                <p>Javascript, Html, CSS, MongoDB, dotenv, express, mongoose</p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default FitTrack;
