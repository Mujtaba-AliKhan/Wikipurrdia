import React from "react";
import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  return (
    <div
      className="notFoundContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src="../src/assets/PageNotFound.png"
        alt=""
        style={{ filter: "drop-shadow(1px 1px 10px #e28862)", height: "300px" }}
      />
      <h2>{error.error.message}</h2>
      <h3>
        <a href="/">Back to Home?</a>
      </h3>
    </div>
  );
}

export default NotFound;
