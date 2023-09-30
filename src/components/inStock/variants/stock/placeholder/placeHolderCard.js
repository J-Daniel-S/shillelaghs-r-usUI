import React from "react";

const PlaceHolderCard = (props) => {
  return (
    <React.Fragment>
      <div class="card" aria-hidden="true">
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          
          <a
            href="#"
            tabindex="-1"
            class="btn btn-dark disabled placeholder col-4"
          ></a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlaceHolderCard;