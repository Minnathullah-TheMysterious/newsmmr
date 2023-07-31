import React from "react";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";

const FAQsPage = () => {
  return (
    <Layout>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "60px" }}
      >
        <img src="/images/faq.png" alt="..." className="img-fluid" />
      </div>

      <div
        className="container"
        style={{ marginTop: "80px", marginBottom: "50px" }}
      >
        <div className="">
          <h1 className="text-darkblue fw-bold text-center">
            Frequently Asked Questions
          </h1>
          <p>
            Do You have any Questions about NewsMMr? See the list below for our
            most frequently asked questions. If your questions are not listed
            here, Please{" "}
            <span className="text-primary">
              <Link to={"/contact"} className="text-decoration-none">
                Contact Us
              </Link>
            </span>{" "}
          </p>
        </div>
        <div className="row g-4 my-4">
          <div className="col-md-10">
            <h3>Features FAQs</h3>
            <div className="container">
              <p>What is a request?</p>
              <p className="text-gray">
                Any single HTTP request to any of our endpoints counts as a
                single request. The parameters or modifiers you provide, or the
                number of results you get back, do not affect your request
                count.
              </p>
              <p>What usage does the Developer plan permit?</p>
              <p className="text-gray">
                The Developer plan may be used for development and testing in a
                development environment only, and cannot be used in a staging or
                production environment (including internally). When the API is
                used outside of a development environment an upgrade to one of
                our subscriptions will be required to continue using the API.
              </p>
              <p>What happens if I exceed my monthly quota?</p>
              <p className="text-gray">
                You will be alerted ahead of time if you are going to exceed
                your quota. Then you can decide whether to be automatically
                billed for excess usage, or to pause usage until the next
                billing cycle.
              </p>
              <p>Can I pay via invoice and ACH/bank transfer?</p>
              <p className="text-gray">
                Yes! For annual subscriptions we can accept these payment
                methods.
              </p>
              <p>Can I cancel at any time?</p>
              <p className="text-gray">
                Of course! When you cancel, your plan will run until the end of
                the current paid period and you won't be charged again.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="fw-semibold mb-4">Recent FAQs</h3>
            <div className="container">
              <p>What is Virat Kohli's Ranking in Tests?</p>
              <p className="text-gray">
                At the time of scripting Virat Kohli stands at number 3 in ICC
                Test Rankings behind Steven Smith of Australia and Joe Root of
                England
              </p>
              <p>What is Virat Kohli's Ranking in ODIs?</p>
              <p className="text-gray">
                At the time of scripting Virat Kohli stands at the top of the
                ICC ODI Rankings followed by archrival Babar Azam and his
                team-mate Rohit Sharma
              </p>
              <p>What is Virat Kohli's Ranking in T20Is?</p>
              <p className="text-gray">
                At the time of scripting Virat Kohli stands at number 2 in ICC
                T20I Rankings behind his countryman SuryaKumar Yadav.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="fw-semibold mb-4">General FAQs</h3>
            <div className="container">
              <p>
                How many centuries Virat has scored in International Cricket?
              </p>
              <p className="text-gray">
                At the time of scripting Virat has scored 104 International
                Hundreds which is greater than the Master Blater's 100 hundreds.
                Virat's Hundreds consists of 41 Test Hundreds, 61 ODI Hundreds
                and 2 T20I Hundreds
              </p>
              <p>How many centuries Virat has scored in IPL Cricket?</p>
              <p className="text-gray">
                At the time of scripting Virat has scored 17 IPL Hundreds and he
                has also won 2 IPl Trophies as a player and was orange cap
                holder in one of the successful campaigne.
              </p>
              <p>Who is the most successful captain of India?</p>
              <p className="text-gray">
                In tems of winning ICC events MS Dhoni is the most successful
                captain that India ever had followed by rohit sharma. In Tests
                and Bilaterals Virat has the better record than both of them,
                infact he stands at par with the likes of Ricky ponting, Steve
                Waugh and Graeme Smith
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQsPage;
