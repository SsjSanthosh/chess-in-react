import React from "react";
import { connect } from "react-redux";
import { PROMOTION_CHOICES } from "../../constants";
import { promotePawn } from "../../Redux/actions";

import "./style.scss";
function Promotion({ color, promotePawn }) {
  return (
    <div className="promotion">
      Please choose a piece to promote your pawn to:
      <div className="promotion-container">
        {PROMOTION_CHOICES.map((prom) => {
          const image = require(`../../assets/img/${prom}_${color}.png`);
          return (
            <div className="promotion-piece" onClick={() => promotePawn(prom)}>
              <img src={image} alt={prom} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default connect(null, { promotePawn })(Promotion);
