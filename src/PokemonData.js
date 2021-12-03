import React, {useState} from "react";
function PokemonData(props) {


  return (
    <div className="App">
      <h1>{props.name}</h1>
      <label>Catch pokemon</label>
    <div className="json-col">
    </div>
    </div>
  );
}

export default PokemonData;
