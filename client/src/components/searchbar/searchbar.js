import React, { useState } from "react";
import "./searchbar.css";
import SearchLookAhead from './searchlookahead.js'

function SearchBar({ placeholder }) {
  const [wordEntered, setWordEntered] = useState("");
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    //localhost:9000/api/dynamicsearch?searchTerm=green%20

    const hostname = window.location.hostname;
    const uri =
      "http://" + hostname + ":9000/api/dynamicsearch?searchTerm=" + searchWord;

    fetch(uri)
      .then((res) => res.json())
      .then((res) => {

        const mappedRecipes = res.map((value) => (value._source));
        
        setSearchedRecipes(mappedRecipes)
      })
      .catch((err) => err);

  };


  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      <SearchLookAhead
        data={searchedRecipes}
        setSearchedRecipes={setSearchedRecipes}
      />
    </div>
  );
}

export default SearchBar;
