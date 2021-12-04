import React, {useState} from "react";
import PokeDat from './pokedat.css';
function PokemonData(props) {


  return (
    <div className="App">
    <div class="stuff">
      <h1>{props.name}</h1>
      <h2>Health: {props.hp}</h2>
      <h2>Attack: {props.attk}</h2>
      <h2>Defence: {props.def}</h2>
      <h2>Special attack: {props.spattk}</h2>
      <h2>Special defence: {props.spdef}</h2>
      <h2>Speed: {props.spd}</h2>
    </div>
    <div className="json-col">
    </div>
    </div>
  );
}

export default PokemonData;
