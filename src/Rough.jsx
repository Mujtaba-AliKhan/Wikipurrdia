import React from "react";
import "./Rough.css";

function Rough() {
  const catsData = [
    {
      className: "bengal cat",
      name: "Bengal Cat",
      urlLink: "./public/HomeApp Assets/BengalCat.jpg",
      id: 1,
    },
    {
      className: "ragDoll cat",
      name: "Ragdoll Cat",
      urlLink: "./public/HomeApp Assets/Ragdoll.jpg",
      id: 2,
    },
    {
      className: "maineCoon cat",
      name: "Maine Coon Cat",
      urlLink: "./public/HomeApp Assets/Mainecoon.jpg",
      id: 3,
    },
    {
      className: "siamese cat",
      name: "Siamese Cat",
      urlLink: "./public/HomeApp Assets/Siamese.png",
      id: 4,
    },
    {
      className: "russianBlue cat",
      name: "Russian Blue Cat",
      urlLink: "./public/HomeApp Assets/RussianBlue.jpg",
      id: 5,
    },
    {
      className: "Abyssinian cat",
      name: "Abyssinian Cat",
      urlLink: "./public/HomeApp Assets/Abyssinian.jpg",
      id: 6,
    },
    {
      className: "BritishShorthair cat",
      name: "British Shorthair Cat",
      urlLink: "./public/HomeApp Assets/BritishShorthair.jpg",
      id: 7,
    },
    {
      className: "Himalayan cat",
      name: "Himalayan Cat",
      urlLink: "./public/HomeApp Assets/Himalayan.jpg",
      id: 8,
    },
    {
      className: "Munchkin cat",
      name: "Munchkin Cat",
      urlLink: "./public/HomeApp Assets/Munchkin.jpg",
      id: 9,
    },
    {
      className: "NorwegianForest cat",
      name: "Norwegian Forest Cat",
      urlLink: "./public/HomeApp Assets/NorwegianForest.png",
      id: 10,
    },
    {
      className: "Oriental cat",
      name: "Oriental Cat",
      urlLink: "./public/HomeApp Assets/Oriental.jpg",
      id: 11,
    },
    {
      className: "Persian cat",
      name: "Persian Cat",
      urlLink: "./public/HomeApp Assets/Persian.jpg",
      id: 12,
    },
    {
      className: "Regular cat",
      name: "Regular Cat",
      urlLink: "./public/HomeApp Assets/RegularCat.jpg",
      id: 13,
    },
    {
      className: "ScottishFold cat",
      name: "Scottish Fold Cat",
      urlLink: "./public/HomeApp Assets/ScottishFold.jpg",
      id: 14,
    },
    {
      className: "Sphynx cat",
      name: "Sphynx Cat",
      urlLink: "./public/HomeApp Assets/Sphynx.jpg",
      id: 15,
    },
  ];

  return (
    <div className="carouselContainer">
      {catsData.map((cats) => {
        <div
          className="singleCarousel"
          key={cats.id}
          style={{ backgroundImage: `url(${cats.urlLink})` }}
        >
          <h1>{cats.name}</h1>
        </div>;
      })}
      {/* <div
        className="singleCarousel"
        style={{
          backgroundImage: 'url("./public/HomeApp Assets/Abyssinian.jpg")',
        }}
      ></div> */}
    </div>
  );
}

export default Rough;
