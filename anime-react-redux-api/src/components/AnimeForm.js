import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../actions";
import axios from "axios";

const AnimeForm = props => {
  const handleClick = e => {
    e.preventDefault();
    props.getCharacters();
  };

  return (
    <>
      <h2>Let's find an anime!</h2>
      <form>
        <button type="submit" onClick={handleClick}>
          Get characters from anime
        </button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.characters
  };
};

export default connect(mapStateToProps, { getCharacters })(AnimeForm);

// object.data.characters
