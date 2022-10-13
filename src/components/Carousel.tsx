import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, { useEffect, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";

interface CarouselProps {
  children: React.ReactNode;
  totalSlides: number;
}

const Carousel = (props: CarouselProps) => {
  const isMobile = useIsMobile();
  const [visibleSlides, setVisibleSlides] = useState(2);
  useEffect(() => {
    if (isMobile) {
      setVisibleSlides(1.3);
    } else {
      setVisibleSlides(4);
    }
  }, [isMobile]);

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={150}
      totalSlides={props.totalSlides}
      visibleSlides={visibleSlides}
      infinite
    >
      <Slider>{props.children}</Slider>
      {isMobile && <DotGroup />}
      {!isMobile && (
        <div style={{ display: "flex", flexGrow: 0, justifyContent: "end" }}>
          <ButtonBack
            style={{
              appearance: "none",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Image
              style={{ transform: "scaleX(-1)" }}
              src="/icons/chevron-circled.svg"
              alt="next"
              width="30"
              height="30"
            />
          </ButtonBack>
          <ButtonNext
            style={{
              appearance: "none",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Image
              src="/icons/chevron-circled.svg"
              alt="next"
              width="30"
              height="30"
            />
          </ButtonNext>
        </div>
      )}
    </CarouselProvider>
  );
};

export default Carousel;
