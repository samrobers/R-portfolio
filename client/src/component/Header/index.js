import React from "react";

function Header() {
  return (
    <>
      <header className="row mt-4">
        <section className="col-sm-2"></section>
        <section className="col-sm-4 text-white text-center">
          <a href="/" className="text-color">
            <h1 className="header-text text-color">Samuel Roberson</h1>
          </a>
        </section>
        <section class=" mt-4 btn-group justify-content-center">
          <section className="fs-4 zoom-nav mt-2">
            <a href="/about" className="text-color mt-2 m-2 header-text">
              About Me
            </a>
          </section>
          <section className=" fs-4 zoom-nav mt-2  m-2">
            <a href="/contact" className="text-color header-text">
              Contact
            </a>
          </section>
          <section className="fs-4 zoom-nav mt-2  m-2">
            <a href="/resume" className="text-color header-text">
              Resume
            </a>
          </section>
        </section>
      </header>
    </>
  );
}

export default Header;
