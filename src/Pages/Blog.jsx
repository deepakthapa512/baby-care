/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React from 'react'

export default function Blog() {
    return (
        <>
            <div class="container-fluid blog py-5">
                <div class="container py-5">
                    <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                        <h3 class="text-danger mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius display-6">
                            From The Blog
                        </h3>
                        <h5 class="mb-5 display-7">
                            We celebrate childhood by supporting babies, children, and families with thoughtful designs and quality materials
                        </h5>
                    </div>
                    <div class="row g-5 justify-content-center">
                        <div class="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                            <div class="blog-item rounded-bottom" style={{border: "4px dashed #ccc", borderRadius: "10px; padding: 10px; transition: all 0.3s ease-in-out;"}}>
                                <div class="blog-img overflow-hidden position-relative" style={{borderBottom: "4px dashed #ccc;"}}>
                                    <img src="img/blog-1.jpg" class="img-fluid w-100" alt="Image" />
                                </div>
                                <div class="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                                    <small class="text-dark"><i class="fas fa-calendar me-1 text-dark"></i>11 March 2025</small>
                                    <small class="text-dark"><i class="fas fa-comment-alt me-1 text-dark"></i> Comments (15)</small>
                                </div>
                                <div class="px-4 pb-4 bg-light rounded-bottom">
                                    <div class="blog-text-inner">
                                        <a href="#" class="h3 text-decoration-none">Why February Babies Are Extra Special</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                            <div class="blog-item rounded-bottom" style={{border: "4px dashed #ccc", borderRadius: "10px; padding: 10px; transition: all 0.3s ease-in-out;"}}>
                                <div class="blog-img overflow-hidden position-relative" style={{borderBottom: "4px dashed #ccc;"}}>
                                    <img src="img/blog-1.jpg" class="img-fluid w-100" alt="Image" />
                                </div>
                                <div class="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                                    <small class="text-dark"><i class="fas fa-calendar me-1 text-dark"></i> 11 March 2025</small>
                                    <small class="text-dark"><i class="fas fa-comment-alt me-1 text-dark"></i> Comments (15)</small>
                                </div>
                                <div class="px-4 pb-4 bg-light rounded-bottom">
                                    <div class="blog-text-inner">
                                        <a href="#" class="h3 text-decoration-none">The Surprising Way Motherhood Changed Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                            <div class="blog-item rounded-bottom" style={{border: "4px dashed #ccc", borderRadius: "10px; padding: 10px; transition: all 0.3s ease-in-out;"}}>
                                <div class="blog-img overflow-hidden position-relative" style={{borderBottom: "4px dashed #ccc;"}}>
                                    <img src="img/blog-1.jpg" class="img-fluid w-100" alt="Image" />
                                </div>
                                <div class="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                                    <small class="text-dark"><i class="fas fa-calendar me-1 text-dark"></i>11 March 2025</small>
                                    <small class="text-dark"><i class="fas fa-comment-alt me-1 text-dark"></i> Comments (15)</small>
                                </div>
                                <div class="px-4 pb-4 bg-light rounded-bottom">
                                    <div class="blog-text-inner">
                                        <a href="#" class="h3 text-decoration-none">How Aromatherapy Can Impact NICU Babies</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
