import React from "react";
import catsCoats from "../catsCoats.json";
import "./Coats.css";

const Coats = () => {
  return (
    <div className="coatsContainer">
      <h1 style={{ textAlign: "center" }}>
        Fur symphony: a melody of textures
      </h1>
      {catsCoats.map((catsCoat, index) => (
        <div className="coatListItem" key={index}>
          <div className="coatImageContainer">
            <img src={catsCoat.url} alt="" />
          </div>
          <ul className="coatCatagoryList">
            <li key={catsCoat.color}>
              <h1>{catsCoat.color}</h1>

              <ul className="coatsList">
                {catsCoat.colors.map((color, index) => (
                  <li key={index} className="subCoatColor">
                    {color}
                  </li>
                ))}
              </ul>
              <br />
              <div className="coatsDescription">
                <p>{catsCoat.description[0]}</p>
                <p>{catsCoat.description[1]}</p>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Coats;
