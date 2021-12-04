import React, {useState} from "react";
import PokeDat from './pokedat.css';
class PokemonData extends React.Component  {
  constructor (props){
    super(props);
    var type1Colour = ""; 
    var type2Colour = ""; 
    var typeName = "";

    const getTypeColour = (type) => {

      switch(type){
        default:
        break;
      case "normal":
        return "#A8A77A";
      case "fire":
        return "#EE8130";
      case "water":
        return "#6390F0";
      case "electric":
        return "#F7D02C";
      case "grass":
        return "#7AC74C";
      case "ice":
        return "#96D9D6";
      case "fighting":
        return "#C22E28";
      case "poison":
        return "#A33EA1";
      case "ground":
        return "#E2BF65";
      case "flying":
        return "#A98FF3";
      case "psychic":
        return "#F95587";
      case "bug":
        return "#A6B91A";
      case "rock":
        return "#B6A136";
      case "ghost":
        return "#735797";
      case "dragon":
        return "#6F35FC";
      case "dark":
        return "#705746";
      case "steel":
        return "#B7B7CE";
      case "fairy":
        return "#D685AD";
      }
    }
    type1Colour = getTypeColour(this.props.type1);
    typeName += this.props.type1;
    if(this.props.type2 !== "None"){
      typeName += "/ " + this.props.type2;
      type2Colour = getTypeColour(this.props.type2);
    } else{
      type2Colour = type1Colour;
    }
    this.state = {
      colour1 : type1Colour,
      colour2 : type2Colour,
      typeStrName : typeName
    };
  }
render(){
  const styleColour = {
    backgroundColor: this.state.colour1,
    borderColor: this.state.colour2
  };
  return (
    <section style={styleColour} id="stuff">
      <h1>Name: {this.props.name} (Type:{ this.state.typeStrName})</h1>
      <h2>Health: {this.props.hp}</h2>
      <h2>Attack: {this.props.attk}</h2>
      <h2>Defence: {this.props.def}</h2>
      <h2>Special attack: {this.props.spattk}</h2>
      <h2>Special defence: {this.props.spdef}</h2>
      <h2>Speed: {this.props.spd}</h2>
    </section>
  );}
}

export default PokemonData;
