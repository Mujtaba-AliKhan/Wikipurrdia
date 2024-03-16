import React, { useState } from "react";
import "./Breeds.css";
import BreedsPopup from "./BreedsPopup";
import catsData from "../catsData.json";

const Breeds = () => {
  const [searchItem, setSearchItem] = useState("");
  const [isPopup, setIsPopup] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  const filteredCats = catsData.filter((cat) =>
    cat.tags.some((tag) => tag.toLowerCase().includes(searchItem.toLowerCase()))
  );

  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  const openPopup = (cat) => {
    setSelectedCat(cat);
    setIsPopup(true);
  };

  return (
    <div className="breedsContainer">
      <div className="breedsSearchContainer">
        <h1>Whisker Wonders: Exploring the World of Cats! </h1>
        <input
          type="text"
          className="breedsSearchBox"
          name="breedSearchBox"
          placeholder="Search..."
          value={searchItem}
          onChange={handleSearchChange}
        />
      </div>
      <div className="breedGrid">
        {filteredCats.map((cat) => (
          <div
            key={cat.id}
            className="breedGridItem"
            onClick={() => openPopup(cat)}
          >
            <img src={cat.urlLink} alt={cat.name} />
            <h1>{cat.name}</h1>
          </div>
        ))}
      </div>
      {isPopup && <BreedsPopup setIsPopup={setIsPopup} cat={selectedCat} />}
    </div>
  );
};

export default Breeds;
