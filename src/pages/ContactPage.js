import React from "react";
import Layout from "../components/layouts/Layout";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <Layout>
      <img
        src="/images/contactBanner.jpeg"
        alt="..."
        className="img-fluid"
        style={{ width: "100vw" }}
      />
      <div className="container my-4">
        <div className="row g-4">
          <div className="col-md-6">
            <h2 className="text-center fw-bold text-darkblue mt-4">
              Contact Us
            </h2>
            <h4 className=" fw-semibold">We Value Your Feedback</h4>
            <p>
              We welcome your feedback, suggestions, and tips. If you have any
              news tips, interesting stories, or corrections, please fill out
              the form below.
            </p>
            <form className="container form-border bg-darkblue text-light">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-light-white">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="form-floating text-dark">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  defaultValue={""}
                />
                <label htmlFor="floatingTextarea">Message</label>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-outline-info my-3 w-50 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <h2 className="mt-4 fw-semibold text-darkblue">
              Contact Information
            </h2>
            <div className="my-4 container">
              <div className="row">
                <p className="col-md-5">Have a News Tip?</p>
                <p className="col-md-7 fw-semibold ">
                  <span className="fw-normal">
                    <AiOutlineMail className="text-danger" />
                    Email
                  </span>{" "}
                  : tips@newsmmr.com
                </p>
              </div>
              <div className="row">
                <p className="col-md-5">General Inquiries</p>
                <p className="col-md-7 fw-semibold">
                  <span className="fw-normal">
                    <AiOutlineMail className="text-danger" />
                    Email
                  </span>{" "}
                  : info@newsmmr.com
                </p>
              </div>
              <div className="row">
                <p className="col-md-5">Advertising</p>
                <p className="col-md-7 fw-semibold">
                  <span className="fw-normal">
                    <AiOutlineMail className="text-danger" />
                    Email
                  </span>{" "}
                  : ads@newsmmr.com
                </p>
              </div>
              <div className="row">
                <p className="col-md-6">Address: Hitech City, Hyderabad</p>
                <p className="col-md-6 fw-semibold">
                  <span className="fw-normal">
                    <AiFillPhone className="text-primary" />
                    Phone
                  </span>{" "}
                  : +91-96302-58741
                </p>
              </div>
            </div>
            <h3 className="fw-semibold mt-4 text-darkblue">
              Follow Us On Socila Media
            </h3>
            <div className="my-4 container">
              <p>
                Stay updated with the latest news and stories by following us on
                social media.
              </p>
            
              <ul className="list-unstyled d-flex justify-content-around">
                <li className="ms-3">
                  <Link className="text-body-secondary" to={""}> 
                    <i
                      className="bi-instagram"
                      style={{ fontSize: "2rem", color: "#fd1d1d" }}
                    /> 
                  </Link>
                </li>
                <li className="ms-3">
                  <Link className="text-body-secondary" to={""}>
                    <i
                      className="bi-facebook"
                      style={{ fontSize: "2rem", color: "#1877F2" }}
                    />
                  </Link>
                </li>
                <li className="ms-3">
                  <Link className="text-body-secondary" to={""}>
                    <i
                      className="bi-linkedin"
                      style={{ fontSize: "2rem", color: "#0A66C2" }}
                    />
                  </Link>
                </li>

                <li className="ms-3">
                  <Link className="text-body-secondary" to={""}>
                    <i
                      className="bi-twitter"
                      style={{ fontSize: "2rem", color: "#1DA1F2" }}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
