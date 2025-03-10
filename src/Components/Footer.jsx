/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="footer mt-5">
        {/* Newsletter & Search Section */}
        <div className="newsletter bg-info text-white py-4">
          <div className="container">
            <div className="row align-items-center">
              {/* Newsletter Left Side */}
              <div className="col-md-6 text-center text-md-start">
                <h3 className="fw-bold">Subscribe to our Newsletter</h3>
                <p>Be the first to know about new products, sales, and promotions.</p>
                <div className="d-flex">
                  <input
                    type="email"
                    className="form-control me-2"
                    placeholder="Your email"
                  />
                  <button className="btn btn-danger px-4">Subscribe</button>
                </div>
              </div>

              {/* Search Box Right Side */}
              <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
                <h3 className="fw-bold">Search Our Store</h3>
                <p>Find your favorite products quickly.</p>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Search products..."
                  />
                  <button className="btn btn-secondary px-4">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="container py-5 ">
          <div className="row">
            {/* Information */}
            <div className="col-md-3">
              <h5 className="fw-bold">Information</h5>
              <ul className="list-unstyled">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">BabyStreet Shop</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            {/* Extras */}
            <div className="col-md-3">
              <h5 className="fw-bold">Extras</h5>
              <ul className="list-unstyled">
                <li><a href="#">My Account</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Order Tracking</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="col-md-3">
              <h5 className="fw-bold">Have a Question?</h5>
              <p><i className="fa fa-clock text-primary"></i> Mon - Fri: 09:00 - 18:30</p>
              <p><i className="fa fa-map-marker-alt text-primary"></i> 164 7th Avenue, Seattle, WA</p>
              <p><i className="fa fa-phone text-primary"></i> +1 888 292 7171</p>
              <p><i className="fa fa-envelope text-primary"></i> shop@baby.store</p>
            </div>

            {/* Payment Options */}
            <div className="col-md-3">
              <h5 className="fw-bold">Payment Options</h5>
              <div className="d-flex flex-wrap">
                <img src="img/visa.png" alt="Visa" className="payment-icon me-2" />
                <img src="img/MC.png" alt="Mastercard" className="payment-icon me-2" />
                <img src="img/pp.png" alt="PayPal" className="payment-icon" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid copyright bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-decoration-none">
              <span className="text-light "><a href="#"><i className="fas fa-copyright text-light me-2 "></i>Deepak Thapa</a> , All right reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
