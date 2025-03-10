/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Products from './Products'
import Blog from './Blog'
import GirlSection from './GirlSection'

export default function Home() {
    return (
        <>
            <div className="container-fluid py-5 hero-header wow fadeIn text-center" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7 col-md-12">
                            <h1 className="mb-3 text-pink">We Care Your Baby</h1>
                            <h1 className="mb-5 display-1 text-white">The Best Play Area For Your Kids</h1>

                            {/* Button with Inline Dashed Border */}
                            <a
                                href=""
                                style={{
                                    border: "2px dashed white",
                                    backgroundColor: "#D63384",
                                    color: "white",
                                    padding: "12px 24px",
                                    textDecoration: "none",
                                    borderRadius: "8px",
                                    display: "inline-block",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    marginRight: "16px"
                                }}
                            >
                                Shop Girls
                            </a>

                            <a
                                href=""
                                style={{
                                    border: "2px dashed white",
                                    backgroundColor: "#D63384",
                                    color: "white",
                                    padding: "12px 24px",
                                    textDecoration: "none",
                                    borderRadius: "8px",
                                    display: "inline-block",
                                    fontSize: "16px",
                                    fontWeight: "bold"
                                }}
                            >
                                Shop Boys
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row g-4 justify-content-center">

                    {/* Girls Clothing */}
                    <div className="col-md-4">
                        <div className="position-relative overflow-hidden rounded-3 p-3"
                            style={{ border: "2px dashed white", backgroundColor: "#f8a5c2" }}>
                            <img src="img/event-1.jpg" className="img-fluid w-100" alt="Girls Clothing" />
                            <div className="position-absolute bottom-0 start-0 w-100 text-white px-4 pb-3"
                                style={{ background: "rgba(0, 0, 0, 0.3)" }}>
                                <h3 className="fw-bold mb-1">Girls</h3>
                                <h5 className="mb-1">Clothing</h5>
                                <p className="small">World's Best Brands</p>
                            </div>
                        </div>
                    </div>

                    {/* Boys Clothing */}
                    <div className="col-md-4">
                        <div className="position-relative overflow-hidden rounded-3 p-3"
                            style={{ border: "2px dashed white", backgroundColor: "#74b9ff" }}>
                            <img src="img/event-2.jpg" className="img-fluid w-100" alt="Boys Clothing" />
                            <div className="position-absolute bottom-0 start-0 w-100 text-white px-4 pb-3"
                                style={{ background: "rgba(0, 0, 0, 0.3)" }}>
                                <h3 className="fw-bold mb-1">Boys</h3>
                                <h5 className="mb-1">Clothing</h5>
                                <p className="small">Incredible Quality</p>
                            </div>
                        </div>
                    </div>

                    {/* Toys & Games */}
                    <div className="col-md-4">
                        <div className="position-relative overflow-hidden rounded-3 p-3"
                            style={{ border: "2px dashed white", backgroundColor: "#55efc4" }}>
                            <img src="img/event-3.jpg" className="img-fluid w-100" alt="Toys & Games" />
                            <div className="position-absolute bottom-0 start-0 w-100 text-white px-4 pb-3"
                                style={{ background: "rgba(0, 0, 0, 0.3)" }}>
                                <h3 className="fw-bold mb-1">Toys</h3>
                                <h5 className="mb-1">& Games</h5>
                                <p className="small">For all ages</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Products />
            <GirlSection />
            <Blog />
        </>
    )
}
