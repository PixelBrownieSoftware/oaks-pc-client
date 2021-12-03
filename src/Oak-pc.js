import React, {useState, useEffect} from "react";
import Axios from 'axios';
import PokemonData from './PokemonData.js';
function OakPc() {

  const [listPokemon, setPokemon] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/fetch').then((response) => {
      setPokemon(response.data);
    })
    .catch( (error) => { 
      console.log(error);
    })
  }, [])

  return (
    <div className="OakPC">
      <h1>Oak's PC</h1>
      <label>Get pokemon from Oak's PC</label>
        <div className="pokeDisplay">
          {
            listPokemon.map((pkmn) => {
              return(
                <div>
                  <PokemonData name ={pkmn.name}/>
                </div>
              );
            })
          }
        </div>
    </div>
  );
}

export default OakPc;
