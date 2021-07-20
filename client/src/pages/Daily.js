import React from "react";
import DailyDiveImg from "./images/dailydive.PNG";
function Shop() {
  return (
    <>
      <section className="row p-5 project-background">
        <img className="project-focus col-sm-4" src={DailyDiveImg} alt="" />
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
                    href="https://chequelito.github.io/theDailyDive/"
                  >
                    Demo
                  </a>
                </button>
                <h4 class="mt-4">
                  <strong>Description</strong>
                </h4>
                <p>
                  This application was designed as a one stop shop to start your
                  day. Check the weather for your area and to see the top news
                  from the most important categories
                </p>
              </section>
              <section className="project-text">
                <h4>
                  <strong>Functionality</strong>
                </h4>
                <p>
                  It allows users to check the weather based on their
                  geolocation and to sift through to top news cards that are
                  live api calls at the click of a button.
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
                    href="https://github.com/Chequelito/theDailyDive"
                  >
                    Source Code
                  </a>
                </button>
                <h4 class="mt-4">
                  <strong>Contribution</strong>
                </h4>
                <p>
                  I worked on dynamic card generation for the news section and
                  grabbing the information from the backend api call to display
                  in the page.
                </p>
              </section>
              <section className="project-text">
                <h4>
                  <strong>Technology</strong>
                </h4>
                <p>Javascript, Html, CSS</p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Shop;
