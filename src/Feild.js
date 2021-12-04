import React, {useState} from "react";
import Axios from 'axios';
function Feild() {

  const [pkmnName, addPokemon] = useState("");
  const [jsonDat, setJson] = useState("");

  const addPKMN = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/' + pkmnName)
    .then(function(response) {
      console.log(response.data);
      var jsonFile = response.data;
      setJson(JSON.stringify(jsonFile, null, 2));

      var Cname = jsonFile['name'];
      var Chp = 0;
      var Catk = 0;
      var Cdef = 0;
      var Csp_atk = 0;
      var Csp_def = 0;
      var Cspd = 0;
      var Cabilites = [];
      var CType1 = jsonFile['types'][0]['type']['name'];
      var CType2 = "None";

      if(jsonFile['types'][1]){
          CType2 = jsonFile['types'][1]['type']['name'];
          console.log("Type 2: " + jsonFile['types'][1]['type']['name']);
      }
      const abilityFunc = function (item, index) {
          var abName =  item['ability']['name'];
          var abHidden = item['is_hidden'];
          Cabilites.push({name: abName, hidden: abHidden});
      };
      const statFunc = function (item, index) {
          var str = item['stat']['name'];
          console.log(str);
          
          switch(str){
            default:
              break;
              case "attack":
                  Catk = item['base_stat'];
              break;
              case "defense":
                  Cdef = item['base_stat'];
              break;
              case "special-attack":
                  Csp_atk = item['base_stat'];
              break;
              case "special-defense":
                  Csp_def = item['base_stat'];
              break;
              case "hp":
                  Chp = item['base_stat'];
              break;
              case "speed":
                  Cspd = item['base_stat'];
              break;
          }
          
          console.log(str);
      };

      jsonFile['abilities'].forEach(abilityFunc);
      //console.log("Stats: ");
      jsonFile['stats'].forEach(statFunc);

      Axios.post(
      //http://localhost:3001
      'https://oaks-pc-severside5.herokuapp.com/insert', 
      {
        name : Cname,
        health : Chp,
        attack : Catk,
        defense: Cdef,
        special_attack : Csp_atk,
        special_defense: Csp_def,
        speed: Cspd,
        abilites: Cabilites,
        types: {type1 : CType1, type2 : CType2}
      }
      );
    })
    .catch(function (error){ 
      console.log(error);
    })
  }

  return (
    <div className="App">
      <h1>Feild</h1>
      <label>Catch pokemon</label>
      <input type="text" 
      onChange={(event) => 
        addPokemon(event.target.value)
        }/>
      <button onClick={addPKMN}>Add to list</button>
    <div className="json-col">
      <ul>
        {jsonDat}
      </ul>
    </div>
    </div>
  );
}

export default Feild;
