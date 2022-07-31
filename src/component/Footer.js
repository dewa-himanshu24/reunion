import React from "react";

const Footer = () => {
  return (
    <div className="m-0">
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        {/* <!-- Grid container --> */}
        <div className="container pt-4">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Github --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/dewa-himanshu24"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="bi bi-github"></i>
            </a>
            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/himanshu-dewangan-45a60a22a/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://twitter.com/Himansh54308380"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="bi bi-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="dewa.hima24@gmail.com"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="bi bi-google"></i>
            </a>
          </section>
        </div>

        {/* <!-- Copyright --> */}
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-dark" href="https://github.com/dewa-himanshu24">
            dewa.himanshu24
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
