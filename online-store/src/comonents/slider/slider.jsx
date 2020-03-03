import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";

function ControlledCarousel() {
  //   const [index, setIndex] = useState(0);
  //   const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    // setIndex(selectedIndex);
    // setDirection(e.direction);
  };

  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item className="a">
          <img
            style={{ height: "450px" }}
            className="d-block w-100 h-80  "
            src="https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="a">
          <img
            className="d-block w-100"
            src="https://image.shutterstock.com/image-photo/washington-dc-usa-tidal-basin-600w-527729869.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 a"
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}

export default ControlledCarousel;
