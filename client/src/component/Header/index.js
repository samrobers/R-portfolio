import React from "react";

function Header() {
  return (
    <>
      <header className="row mt-4">
        <section className="col-sm-2"></section>
        <section className="col-sm-4 text-white text-center">
          <h1>Samuel Roberson</h1>
        </section>
        <section className="col-sm-1 fs-4 zoom-nav mt-2">
          <a href="./" className="text-color mt-2">
            About Me
          </a>
        </section>
        <section className="col-sm-1 fs-4 zoom-nav mt-2">
          <a href="./" className="text-color">
            Contact
          </a>
        </section>
        <section className="col-sm-1 fs-4 zoom-nav mt-2">
          <a href="./" className="text-color">
            Resume
          </a>
        </section>
      </header>
    </>
  );
}

export default Header;
