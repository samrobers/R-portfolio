import React from "react";

function Header() {
  return (
    <>
      <header className="row mt-1 header-background justify-content-center">
        <section className=""></section>
        <section className="text-white">
          <a href="/" className="text-color">
            <h1 className="header-text text-color mt-3">
              <strong>Samuel Roberson</strong>
            </h1>
          </a>
        </section>
        <section class=" btn-group justify-content-center">
          <section className="fs-4 zoom-nav mt-2">
            <a href="/about" className="text-color mt-2 m-4 header-text">
              About Me
            </a>
          </section>
          <section className=" fs-4 zoom-nav mt-2  m-4">
            <a href="/contact" className="text-color header-text">
              Contact
            </a>
          </section>
          <section className="fs-4 zoom-nav mt-2  m-4">
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
