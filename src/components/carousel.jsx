import React, { Component } from "react";

class Carousel extends Component {
  render() {
    // TODO: ensure that pictures are auto resized before they get here
    return (
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-10"
              src="https://t1.ftcdn.net/jpg/00/89/68/46/400_F_89684624_F5qxUjEEIcuXtXYVGjPE82gheEUbnF5t.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-10"
              src="https://i.pinimg.com/originals/b4/fd/44/b4fd4479457d483bbe4e81c9e12f1255.png"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-10"
              src="https://2.bp.blogspot.com/-y74wEPS8Sjk/V0YSARc67FI/AAAAAAAAFYM/OiKZdsh-DHcATfctP9gpatZRa_DaIYztwCLcB/s1600/1406296945663.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default Carousel;
