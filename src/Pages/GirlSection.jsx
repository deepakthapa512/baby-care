/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function GirlSection() {
  return (
    <>
       <div style={{display: "flex",flexWrap: "wrap",width: "100%",maxWidth: "1200px",margin: "0 auto",marginTop: "40px",  marginBottom: "40px",}}>
      {/* Left Section - Text */}
      <div
        style={{
          width: "50%",
          backgroundColor: "#1E3351",
          color: "white",
          padding: "60px",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h6 style={{ color: "#5EC3E6", marginBottom: "10px" }}>BACK TO SCHOOL</h6>
        <h2 style={{ fontWeight: "bold", fontSize: "36px", marginBottom: "20px" }}>Girls Collection</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px" }}>
          We celebrate childhood by supporting babies, children, and families with thoughtful designs, quality
          materials, and construction, and convenient shopping options.
        </p>
        <a
          href="#"
          style={{
            backgroundColor: "#FF6B6B",
            color: "white",
            padding: "12px 30px",
            borderRadius: "30px",
            fontSize: "16px",
            textDecoration: "none",
            fontWeight: "bold",
            border: "2px solid white",
            display: "inline-block",
            width: "200px",
            textAlign: "center",
          }}
        >
          Shop Collection
        </a>
      </div>

      {/* Right Section - Image */}
      <div style={{ width: "50%", position: "relative" }}>
        <img
          src="img/girls-collection.jpg"
          alt="Girls Collection"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
    </>
  )
}
