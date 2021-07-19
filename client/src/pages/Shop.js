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
                <h4>
                  <strong>Functionality</strong>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima asperiores velit architecto. Culpa expedita doloribus
                  commodi molestias doloremque quas ipsa?
                </p>
              </section>
              <section className="project-text">
                <h4>
                  <strong>My responsibilites</strong>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima asperiores velit architecto. Culpa expedita doloribus
                  commodi molestias doloremque quas ipsa?
                </p>
                <button
                  className="
                      w-100
                      btn btn-lg btn-secondary
                      fw-bold
                      bg-white
                      text-dark
                      zoom-nav
                      mt-4
                    "
                >
                  <a className="project-btn-style" href="ww.google.com">
                    Demo
                  </a>
                </button>
              </section>
            </section>

            <section className="col-sm-5">
              <section className="project-text">
                <h4>
                  <strong>My responsibilites</strong>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima asperiores velit architecto. Culpa expedita doloribus
                  commodi molestias doloremque quas ipsa?
                </p>
              </section>
              <section className="project-text">
                <h4>
                  <strong>Technologies used</strong>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima asperiores velit architecto. Culpa expedita doloribus
                  commodi molestias doloremque quas ipsa?
                </p>
                <button
                  className="
                      w-100
                      btn btn-lg btn-secondary
                      fw-bold
                      bg-white
                      text-dark
                      zoom-nav
                      mt-4
                    "
                >
                  <a className="project-btn-style" href="ww.google.com">
                    Source Code
                  </a>
                </button>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Shop;
