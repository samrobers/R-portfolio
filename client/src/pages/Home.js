import React from "react";

function Home() {
  return (
    <>
      <main className="text-white">
        <section className="row mt-5">
          <section className="row mt-5">
            <section className="mt-5">
              <section className="text-center mt-5  view-background ">
                <h1 className="header-text mt-5">Projects</h1>
                <p className="lead">
                  <a
                    href="/project"
                    className="
                      btn btn-lg btn-secondary
                      fw-bold
                      bg-white
                      text-dark
                      zoom-nav
                      mt-5
                    "
                  >
                    View
                  </a>
                </p>
              </section>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;
