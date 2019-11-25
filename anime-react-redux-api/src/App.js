import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AnimeCard from "./components/AnimeCard.js";
import AnimeForm from "./components/AnimeForm.js";
import { connect } from "react-redux";
import { getCharacters } from "./actions";

function App(props) {
  return (
    <div className="app">
      <AnimeForm />
      <div className="characters-display">
        {props.characters.map(char => {
          return <AnimeCard name={char.name} img={char.img} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { getCharacters })(App);
