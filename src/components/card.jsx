import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Main particulars</h5>
          <img
            class="card-img-top"
            src="http://writingexercises.co.uk/images2/randomimage/pipe-sculpture.jpg"
            alt="card image cap"
          />
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p class="tags">Some tags here</p>
        </div>
      </div>
    );
  }
}

export default Card;
