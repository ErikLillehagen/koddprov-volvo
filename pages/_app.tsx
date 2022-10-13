import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker, Block } from "vcc-ui";
import cars from "../public/api/cars.json";
import Carousel from "../src/components/Carousel";
import CarCard from "../src/components/CarCard";
import { Slide } from "pure-react-carousel";

function HomePage() {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <Block>
          <Carousel totalSlides={cars.length}>
            {cars.map((car, index) => (
              <Slide key={index} index={index}>
                <CarCard car={car} />
              </Slide>
            ))}
          </Carousel>
        </Block>
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
