import React, { useState } from "react";
import './searchlookahead.css'

function SearchLookahead({event,data}){
    return (
      <div className="lookahead">
        {data.length != 0 && (
          <div className="dataResult">
            {data.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p>{value.title} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
}

export default SearchLookahead;