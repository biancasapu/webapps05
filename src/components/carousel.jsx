import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="data:image/jpeg;base64,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"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://lh3.googleusercontent.com/hTBqhZ0-K80O80CogmWv4zeSzoQQKWkuoxrWRHRQeRokIj0lSbvL2mw0BWIjMp4nxRTUlKdS1P3RSODmjboHLEGQTPuHGadEE7Oa-wxkq5O-Dltetn9Tf51jrGRkQV1y5QbH8iHEM9nfVUh7fgWtCgiPybNn_lyXymABT-_x9gGvXHXONYl0KGRkXTr1N2XNNVuUXu2P2FcxWhJjwUqpvXuqbt-Ua6ASyvjNNf-bVcG4jou8WWYqiSjmfEZsLZa9zo81Pvv1GWtk55juHgtEkguDJIAQbmtOomsRSX11ywVkOpSOX7EoepjfSk8S5JYNA9tOgfLQ4MniPVBwnpDB016EcvncSl285GPI_u7tHlykKVCXFiAbOW9QfRY_1NRjcEKYstNrz6xHblVNVQBiUOLjwBjSRSrNmplrufCygxMmSDstzKkXtDnMZQ75Uq2uHVH8fZuBFWkQzOlrEpL7i6mDy2AoXg0Gj59nOZP6AJ8RdrSLlmhFBGDCIBoDiLZIHVBdMAMJ4QQV4OlPm7xj22r6d_JGN5BUgwiTV4UVJ35yHjruGU_1HZIbS1YHiPk8sQ2JOg6niSxmXWH6rz3UEH8hrmoVmDWYXDVIapXwB9fTT-1z_8cQc9TfITgnsuAXYD6ehpl3zIUQeyegytpQqxEGUSJD-FE-=w998-h1330-no"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://bobandsuewilliams.com/images/random-18.jpg"
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
