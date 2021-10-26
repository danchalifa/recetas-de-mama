import React, { useState } from "react";
import { useHistory } from "react-router";
import recipe from "../recipe";

import './searchlookahead.css'


// TODO: Make this a standard component
function SearchLookahead({ data, setSearchedRecipes }) {
  const history = useHistory();
  var handleClick = (recipe) => {
    var recipeParsed = recipe.Name.replace(/[^\w\s]/gi, "");
    var route = "/recipe/" + recipeParsed;
    setSearchedRecipes([]);
    history.push({
      pathname: route,
      state: { recipe: recipe },
    });
  };

  return (
    <div className="lookahead">
      {data.length != 0 && (
        <div className="dataResult">
          {data.slice(0, 15).map((value, key) => {
            return (
              <div className="recipe" onClick={() => handleClick(value)}>
                <p>{value.Name_English} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchLookahead;