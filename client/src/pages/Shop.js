import React from "react";
import Shopalot from "./images/shopalot.PNG";
function Shop() {
  return (
    <>
      <section className="row p-5 project-background">
        <img className="project-focus col-sm-4" src={Shopalot} alt="" />
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
                    href=" https://shop-a-lot.herokuapp.com/"
                  >
                    Demo
                  </a>
                </button>
                <h4 class="mt-4">
                  <strong>Description</strong>
                </h4>
                <p>
                  This application was designed as a e-commerce site set in the
                  world of dungeons and dragons.
                </p>
              </section>
              <section className="project-text">
                <h4>
                  <strong>Functionality</strong>
                </h4>
                <p>
                  It allows the user to sign-in, sign-up, log-in, search for
                  items and add them to their cart and then their backpack. The
                  methods of search also have categories if you are just
                  browsing.
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
                    href=" https://github.com/V1brance/shop-a-lot"
                  >
                    Source Code
                  </a>
                </button>
                <h4 class="mt-4">
                  <strong>Contribution</strong>
                </h4>
                <p>
                  I worked primarily on all of the backend making sure the
                  correct data and relationships were served when requested as
                  well as the search bar.
                </p>
              </section>
              <section className="project-text">
                <h4>
                  <strong>Technology</strong>
                </h4>
                <p>
                  Javascript, Html, CSS, Sequelize, Restful, MySql, Insomnia,
                  Bcrypt
                </p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Shop;
