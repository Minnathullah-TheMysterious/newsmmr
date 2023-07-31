import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">
            © 2023 Company, Inc
          </p>
          <Link
            to="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img src="favicon.ico" alt="" className="img-fluid"/>
          </Link>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link to={'/'} className="nav-link px-2 text-body-secondary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/about'} className="nav-link px-2 text-body-secondary">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/contact'} className="nav-link px-2 text-body-secondary">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/faqs'} className="nav-link px-2 text-body-secondary">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/pricing'} className="nav-link px-2 text-body-secondary">
                Pricing
              </Link>
            </li>
          </ul>
        </footer>
      </div>
  )
}

export default Footer
