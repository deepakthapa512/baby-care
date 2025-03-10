/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Navbar() {
  return (
    <>
        <div className="container-fluid border-bottom bg-light wow fadeIn" data-wow-delay="0.1s">
            <div className="container topbar bg-primary d-none d-lg-block py-2">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                     <p href="#" className="text-white ms-1">Girls Clothing</p>
                     <p href="#" className="text-white ms-3">Boys Clothing</p>
                     <p href="#" className="text-white ms-3 ">Toys & Accessories</p>
                    </div>
                    <div className="top-info pe-2">
                        <small className="me-3"><i className="fas fa-envelope me-2 text-pink"></i><a href="#" className="text-white  text-decoration-none">Email@Example.com |</a></small>
                        <small className="me-3"><i className="fas fa-envelope me-2 text-pink"></i><a href="#" className="text-white  text-decoration-none">+91 8859806972</a></small>
                    </div>
                </div>
            </div>
                    {/* <div className="top-link pe-2">
                        <a href="" className="btn btn-light btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-secondary"></i></a>
                        <a href="" className="btn btn-light btn-sm-square rounded-circle"><i className="fab fa-twitter text-secondary"></i></a>
                        <a href="" className="btn btn-light btn-sm-square rounded-circle"><i className="fab fa-instagram text-secondary"></i></a>
                        <a href="" className="btn btn-light btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-secondary"></i></a>
                    </div> */}
            <div className="container px-0">
                <nav className="navbar navbar-light navbar-expand-xl py-3">
                    <a href="" className="navbar-brand"><h1 className="text-primary display-6">Baby<span className="text-secondary">Care</span></h1></a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/home" className="nav-item nav-link">Shop</a>
                            <a href="/blog" className="nav-item nav-link">Blog</a>
                            <a href="/products" className="nav-item nav-link">LookBook</a>
                            <div className="nav-item dropdown">
                                <a href="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="/girlsection" className="nav-item nav-link">Features</a>
                        </div>
                        <div className="d-flex me-4">
                            <div id="phone-tada" className="d-flex align-items-center justify-content-center">
                                <a href="" className="position-relative wow tada" data-wow-delay=".9s" >
                                    <i className="fa fa-phone-alt text-primary fa-2x me-4"></i>
                                    <div className="position-absolute" style={{top: "-7px" , left: "20px"}}>
                                        <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div className="d-flex flex-column pe-3 border-end border-primary">
                                <span className="text-primary">Have any questions?</span>
                                <a href="#"><span className="text-secondary">+91:8859809672</span></a>
                            </div>
                        </div>
                        <button className="btn-search btn btn-primary btn-md-square rounded-circle" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-white"></i></button>
                    </div>
                </nav>
            </div>
        </div>
    </>
  )
}
