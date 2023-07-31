import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container" style={{marginTop:'80px', marginBottom: "50px"}}>
        <div className="row g-4">
          <div className="col-md-6">
            <img src="/images/about.png" alt="..." className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="fw-semibold text-darkblue mt-4">About Our News Website</h2>
            <p>
              Welcome to Our News Website! We strive to bring you the latest and
              most accurate news from around the world. Our dedicated team of
              writers and journalists work tirelessly to deliver news that
              matters to you.
            </p>
            <h2 className="fw-semibold mt-4 text-darkblue">Our Team Members</h2>
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center">
                <img src="/images/member.png" alt="" />
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div>
                  <div className="fw-bold fs-5 text-success">Mohammed Minnathullah</div>
                  <div className="fw-semibold fs-6">Full Stack Web Developer</div>
                  <div className="my-4">
                    <ul className="list-unstyled d-flex justify-content-center">
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
            <h2 className="fw-semibold mt-4 text-darkblue">Contact Information</h2>
            <div className="d-flex align-items-center">
              <div>
                <p className="fw-semibold">
                  Maddur, Siddipet, Telangana State, India. 506367
                </p>
                <p className="fw-semibold">
                  <span className="fw-normal">
                    <AiFillPhone className="text-primary" />
                    Phone
                  </span>{" "}
                  : 6281089096
                </p>
                <p className="fw-semibold">
                  <span className="fw-normal">
                    <BsWhatsapp className="text-success"/>
                    Whatsapp
                  </span>{" "}
                  : 9652336445
                </p>
                <p className="fw-semibold">
                  <span className="fw-normal">
                    <AiOutlineMail className="text-danger"/>
                    Email
                  </span>{" "}
                  : minnathullahmohammed@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
