import React from "react";
import MLB from "./images/mlbtracker.PNG";
function MLBTrack() {
  return (
    <>
      <section className="row p-5 project-background">
        <img className="project-focus col-sm-4" src={MLB} alt="" />
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
                    href="https://calm-lake-10775.herokuapp.com/"
                  >
                    Demo
                  </a>
                </button>
                <h4 class="mt-4">
                  <strong>Description</strong>
                </h4>
                <p>
                  This is a Major League baseball application to help track what
                  stadiums you have been to and to help plan future trips by
                  showing local attractions.
                </p>
              </section>
              <section className="project-text">
                <h4>
                  <strong>Functionality</strong>
                </h4>
                <p>
                  It allows the user to sign-in, sign-up, log-in, search
                  different ballparks, find what they have to offer inside as
                  well as near, save the ballparks visited to the profile.
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
                    href="https://github.com/jongregory75/MLB-Ballpark-Tracker"
                  >
                    Source Code
                  </a>
                </button>
                <h4 class="mt-4">
                  <strong>Contribution</strong>
                </h4>
                <p>
                  I completed the backend for this project as well as passing
                  authorization and utilizing it on the front end.
                </p>
              </section>
              <section className="project-text">
                <h4>
                  <strong>Technology</strong>
                </h4>
                <p>
                  Javascript, Html, CSS, Mongoose, NoSql, MongoDB, Bcrypt,
                  jwt-decode, React, Bootstrap, graphQl
                </p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default MLBTrack;
