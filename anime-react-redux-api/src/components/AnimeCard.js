import React from "react";
import { connect } from "react-redux";

const AnimeCard = props => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} />
    </div>
  );
};

export default connect(null, {})(AnimeCard);
