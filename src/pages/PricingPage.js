import React from "react";
import Layout from "../components/layouts/Layout";

const PricingPage = () => {
  return (
    <Layout>
      <div
        className="container"
        style={{ marginTop: "80px", marginBottom: "50px" }}
      >
        <h1 className="text-center fw-bolder my-4">Pricing</h1>
        <p className="text-center text-gray fs-5 fw-semibold my-4">
          Free for development, Options if you're commercial
        </p>
        <div className="row g-4 my-4">
          <div className="col-md-4">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3 row">
                  <div className="col-md-4">
                    <img
                      src="images/htmlTag.png"
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <div>
                      <h3 className="fw-semibold">Developer</h3>
                      <h2 className="text-gray fw-semibold">$0</h2>
                      <p>Totally Free, Start Now</p>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <p>
                    For all development and testing of personal or commercial
                    projects.
                  </p>
                  <hr />
                  <p>Search all articles and get live top headlines help</p>
                  <p>Articles available with 24 hour delay</p>
                  <p>Search articles up to a month old</p>
                  <p>CORS enabled for localhost</p>
                  <hr />
                  <p>100 requests per day</p>
                  <p>No extra requests available</p>
                  <p>No uptime SLA</p>
                  <p>Basic support</p>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-success"
                  >
                    Start With Developer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3 row">
                  <div className="col-md-4">
                    <img
                      src="images/company.png"
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <div>
                      <h3 className="fw-semibold">Business</h3>
                      <h2 className="text-gray fw-semibold">$359</h2>
                      <p>Per month, Billed Yearly</p>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <p>
                  For production and published commercial projects.
                  </p>
                  <hr />
                  <p>Search all articles and get live top headlines help</p>
                  <p>New articles available in <span className="fw-bold">real-time</span></p>
                  <p>Search articles up to <span className="fw-bold">5 years old</span></p>
                  <p>CORS enabled for <span className="fw-bold">all origins</span></p>
                  <hr />
                  <p><span className="fw-bold">250,000</span> requests per month included</p>
                  <p>$0.0018 per extra request </p>
                  <p>No uptime SLA</p>
                  <p className="fw-bold">Email support</p>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Start With Business
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3 row">
                  <div className="col-md-4">
                    <img
                      src="images/plane.png"
                      alt="..."
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <div>
                      <h3 className="fw-semibold">Advanced</h3>
                      <h2 className="text-gray fw-semibold">$1399</h2>
                      <p>Per month, Billed Yearly</p>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <p>
                  For large and enterprise projects that require exceptional resources and support.
                  </p>
                  <hr />
                  <p>Search all articles and get live top headlines help</p>
                  <p>New articles available in <span className="fw-bold">real-time</span></p>
                  <p>Search articles up to <span className="fw-bold">5 years old</span></p>
                  <p>CORS enabled for <span className="fw-bold">all origins</span></p>
                  <hr />
                  <p><span className="fw-bold">2,000,000</span> requests per month included</p>
                  <p><span className="fw-bold">$0.0009</span> per extra request </p>
                  <p className="fw-bold">99.95% uptime SLA</p>
                  <p className="fw-bold">Premium email and phone support</p>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-info"
                  >
                    Start With Advanced
                  </button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;
