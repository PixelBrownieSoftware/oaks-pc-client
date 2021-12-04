import React, {useState, useEffect} from "react";
import Axios from 'axios';
import PokemonData from './PokemonData.js';
function OakPc() {

  const [listPokemon, setPokemon] = useState([]);

  useEffect(() => {
    Axios.get('https://oaks-pc-severside5.herokuapp.com/fetch').then((response) => {
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
                  <PokemonData 
                  name ={pkmn.name}
                  hp ={pkmn.hp}
                  attk ={pkmn.attack}
                  def ={pkmn.defence}
                  spattk ={pkmn.special_attack}
                  spdef ={pkmn.special_defence}
                  spd ={pkmn.speed}
                  type1 ={pkmn.types.type1}
                  type2 ={pkmn.types.type2}
                  />
                </div>
              );
            })
          }
        </div>
    </div>
  );
}

export default OakPc;
