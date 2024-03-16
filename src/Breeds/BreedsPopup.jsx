import "./Breeds.css";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const BreedsPopup = ({ setIsPopup, cat }) => {
  return (
    <div
      onClick={() => setIsPopup(false)}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          margin: "8rem 10rem",
          backgroundColor: "rgba(226, 136, 98, 0.9)",
          boxShadow: "0 0 10px white",
          borderRadius: "10px",
          padding: "1rem",
          position: "relative",
          animation: "scalePopup 0.3s linear ",
        }}
      >
        <h1 style={{ filter: "drop-shadow(4px 4px 0px black)" }}>{cat.name}</h1>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "2rem",
          }}
        >
          <IoIosCloseCircle
            onClick={() => setIsPopup(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div>
            <img
              src={cat.urlLink}
              alt={cat.name}
              style={{
                width: "500px",
                height: "300px",
                boxShadow: "0 0 10px white",
                borderRadius: "20px",
              }}
            />
          </div>
          <div>
            {cat.description.map((paragraph, index) => (
              <p key={index} style={{ fontSize: "1.2rem", textAlign: "left" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedsPopup;
