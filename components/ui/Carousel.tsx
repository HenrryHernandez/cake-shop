import { useEffect, useRef, useState } from "react";

import { BAKERY_OPTIONS } from "../../utils";
import { CarouselImage } from "./CarouselImage";

interface Props {
  iconSelected: number;
}

export const Carousel = ({ iconSelected }: Props) => {
  const cakeCarousel = useRef<HTMLDivElement>(null);
  const cupcakeCarousel = useRef<HTMLDivElement>(null);
  const donutCarousel = useRef<HTMLDivElement>(null);
  const pieCarousel = useRef<HTMLDivElement>(null);

  const [currentCarouselLength, setCurrentCarouselLength] = useState(0);
  const [currentCarouselCount, setCurrentCarouselCount] = useState(0);

  const goLeft = () => {
    let currentElement;

    switch (iconSelected) {
      case BAKERY_OPTIONS.CAKE:
        currentElement = cakeCarousel.current;
        break;
      case BAKERY_OPTIONS.CUPCAKE:
        currentElement = cupcakeCarousel.current;
        break;
      case BAKERY_OPTIONS.DONUT:
        currentElement = donutCarousel.current;
        break;
      case BAKERY_OPTIONS.PIE:
        currentElement = pieCarousel.current;
        break;
    }

    currentElement?.children[currentCarouselCount].classList.remove("shown");

    if (currentCarouselCount - 1 < 0) {
      currentElement?.children[currentCarouselLength - 1].classList.add(
        "shown"
      );
      setCurrentCarouselCount(currentCarouselLength - 1);
    } else {
      currentElement?.children[currentCarouselCount - 1].classList.add("shown");
      setCurrentCarouselCount((prev) => prev - 1);
    }
  };

  const goRight = () => {
    let currentElement;

    switch (iconSelected) {
      case BAKERY_OPTIONS.CAKE:
        currentElement = cakeCarousel.current;
        break;
      case BAKERY_OPTIONS.CUPCAKE:
        currentElement = cupcakeCarousel.current;
        break;
      case BAKERY_OPTIONS.DONUT:
        currentElement = donutCarousel.current;
        break;
      case BAKERY_OPTIONS.PIE:
        currentElement = pieCarousel.current;
        break;
    }

    currentElement?.children[currentCarouselCount].classList.remove("shown");

    if (currentCarouselCount + 1 >= currentCarouselLength) {
      currentElement?.children[0].classList.add("shown");
      setCurrentCarouselCount(0);
    } else {
      currentElement?.children[currentCarouselCount + 1].classList.add("shown");
      setCurrentCarouselCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (cakeCarousel.current) {
      setCurrentCarouselLength(cakeCarousel.current.children.length);
    }
  }, [cakeCarousel]);

  useEffect(() => {
    cakeCarousel.current?.classList.remove("shown");
    cupcakeCarousel.current?.classList.remove("shown");
    donutCarousel.current?.classList.remove("shown");
    pieCarousel.current?.classList.remove("shown");

    setCurrentCarouselCount(0);

    switch (iconSelected) {
      case BAKERY_OPTIONS.CAKE:
        cakeCarousel.current?.classList.add("shown");
        setCurrentCarouselLength(cakeCarousel.current?.children.length || 0);
        break;
      case BAKERY_OPTIONS.CUPCAKE:
        cupcakeCarousel.current?.classList.add("shown");
        setCurrentCarouselLength(cupcakeCarousel.current?.children.length || 0);
        break;
      case BAKERY_OPTIONS.DONUT:
        donutCarousel.current?.classList.add("shown");
        setCurrentCarouselLength(donutCarousel.current?.children.length || 0);
        break;
      case BAKERY_OPTIONS.PIE:
        pieCarousel.current?.classList.add("shown");
        setCurrentCarouselLength(pieCarousel.current?.children.length || 0);
        break;
    }
  }, [iconSelected]);

  return (
    <div className="carousel">
      <div className="carousel__left">
        <button onClick={goLeft} className="carousel__btn">
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
      </div>

      <div className="carousel__images-container">
        <div ref={cakeCarousel} className="carousel__images shown">
          <div className="carousel__images-grid shown">
            <CarouselImage subpath="cake" name="cake1.jpg" />
            <CarouselImage subpath="cake" name="cake2.png" />
            <CarouselImage subpath="cake" name="cake3.jpg" />
            <CarouselImage subpath="cake" name="cake4.jpeg" />
            <CarouselImage subpath="cake" name="cake5.jpg" />
            <CarouselImage subpath="cake" name="cake6.jpg" />
            <CarouselImage subpath="cake" name="cake7.jpg" />
            <CarouselImage subpath="cake" name="cake8.jpg" />
            <CarouselImage subpath="cake" name="cake9.jpg" />
            <CarouselImage subpath="cake" name="cake10.jpg" />
            <CarouselImage subpath="cake" name="cake11.png" />
            <CarouselImage subpath="cake" name="cake12.jpg" />
          </div>
          <div className="carousel__images-grid">
            <CarouselImage subpath="cake" name="cake12.jpg" />
            <CarouselImage subpath="cake" name="cake11.png" />
            <CarouselImage subpath="cake" name="cake10.jpg" />
            <CarouselImage subpath="cake" name="cake9.jpg" />
            <CarouselImage subpath="cake" name="cake8.jpg" />
            <CarouselImage subpath="cake" name="cake7.jpg" />
            <CarouselImage subpath="cake" name="cake6.jpg" />
            <CarouselImage subpath="cake" name="cake5.jpg" />
            <CarouselImage subpath="cake" name="cake4.jpeg" />
            <CarouselImage subpath="cake" name="cake3.jpg" />
            <CarouselImage subpath="cake" name="cake2.png" />
            <CarouselImage subpath="cake" name="cake1.jpg" />
          </div>
        </div>
        <div ref={cupcakeCarousel} className="carousel__images">
          <div className="carousel__images-grid shown">
            <CarouselImage subpath="cupcake" name="cupcake1.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake2.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake3.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake4.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake5.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake6.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake7.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake8.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake9.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake10.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake11.jpeg" />
            <CarouselImage subpath="cupcake" name="cupcake12.jpg" />
          </div>
          <div className="carousel__images-grid">
            <CarouselImage subpath="cupcake" name="cupcake12.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake11.jpeg" />
            <CarouselImage subpath="cupcake" name="cupcake10.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake9.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake8.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake7.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake6.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake5.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake4.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake3.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake2.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake1.jpg" />
          </div>
          <div className="carousel__images-grid">
            <CarouselImage subpath="cupcake" name="cupcake12.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake2.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake10.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake9.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake8.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake7.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake3.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake5.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake4.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake6.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake1.jpg" />
            <CarouselImage subpath="cupcake" name="cupcake11.jpeg" />
          </div>
        </div>
        <div ref={donutCarousel} className="carousel__images">
          <div className="carousel__images-grid shown">
            <CarouselImage subpath="donut" name="donut1.jpg" />
            <CarouselImage subpath="donut" name="donut2.png" />
            <CarouselImage subpath="donut" name="donut3.jpg" />
            <CarouselImage subpath="donut" name="donut4.jpg" />
            <CarouselImage subpath="donut" name="donut5.jpg" />
            <CarouselImage subpath="donut" name="donut6.png" />
            <CarouselImage subpath="donut" name="donut7.jpg" />
            <CarouselImage subpath="donut" name="donut8.jpeg" />
            <CarouselImage subpath="donut" name="donut9.jpg" />
            <CarouselImage subpath="donut" name="donut10.jpg" />
            <CarouselImage subpath="donut" name="donut11.png" />
            <CarouselImage subpath="donut" name="donut12.jpg" />
          </div>
        </div>
        <div ref={pieCarousel} className="carousel__images">
          <div className="carousel__images-grid shown">
            <CarouselImage subpath="pie" name="pie1.jpg" />
            <CarouselImage subpath="pie" name="pie2.jpg" />
            <CarouselImage subpath="pie" name="pie3.jpg" />
            <CarouselImage subpath="pie" name="pie4.jpg" />
            <CarouselImage subpath="pie" name="pie5.jpg" />
            <CarouselImage subpath="pie" name="pie6.jpg" />
            <CarouselImage subpath="pie" name="pie7.jpg" />
            <CarouselImage subpath="pie" name="pie8.jpg" />
            <CarouselImage subpath="pie" name="pie9.jpeg" />
            <CarouselImage subpath="pie" name="pie10.jpg" />
            <CarouselImage subpath="pie" name="pie11.jpg" />
            <CarouselImage subpath="pie" name="pie12.jpg" />
          </div>
          <div className="carousel__images-grid">
            <CarouselImage subpath="pie" name="pie12.jpg" />
            <CarouselImage subpath="pie" name="pie2.jpg" />
            <CarouselImage subpath="pie" name="pie3.jpg" />
            <CarouselImage subpath="pie" name="pie9.jpeg" />
            <CarouselImage subpath="pie" name="pie5.jpg" />
            <CarouselImage subpath="pie" name="pie6.jpg" />
            <CarouselImage subpath="pie" name="pie7.jpg" />
            <CarouselImage subpath="pie" name="pie8.jpg" />
            <CarouselImage subpath="pie" name="pie4.jpg" />
            <CarouselImage subpath="pie" name="pie10.jpg" />
            <CarouselImage subpath="pie" name="pie11.jpg" />
            <CarouselImage subpath="pie" name="pie1.jpg" />
          </div>
          <div className="carousel__images-grid">
            <CarouselImage subpath="pie" name="pie9.jpeg" />
            <CarouselImage subpath="pie" name="pie2.jpg" />
            <CarouselImage subpath="pie" name="pie12.jpg" />
            <CarouselImage subpath="pie" name="pie3.jpg" />
            <CarouselImage subpath="pie" name="pie5.jpg" />
            <CarouselImage subpath="pie" name="pie6.jpg" />
            <CarouselImage subpath="pie" name="pie7.jpg" />
            <CarouselImage subpath="pie" name="pie8.jpg" />
            <CarouselImage subpath="pie" name="pie1.jpg" />
            <CarouselImage subpath="pie" name="pie10.jpg" />
            <CarouselImage subpath="pie" name="pie11.jpg" />
            <CarouselImage subpath="pie" name="pie4.jpg" />
          </div>
          <div className="carousel__images-grid">
            <CarouselImage subpath="pie" name="pie9.jpeg" />
            <CarouselImage subpath="pie" name="pie2.jpg" />
            <CarouselImage subpath="pie" name="pie3.jpg" />
            <CarouselImage subpath="pie" name="pie4.jpg" />
            <CarouselImage subpath="pie" name="pie5.jpg" />
            <CarouselImage subpath="pie" name="pie6.jpg" />
            <CarouselImage subpath="pie" name="pie7.jpg" />
            <CarouselImage subpath="pie" name="pie8.jpg" />
            <CarouselImage subpath="pie" name="pie11.jpg" />
            <CarouselImage subpath="pie" name="pie1.jpg" />
            <CarouselImage subpath="pie" name="pie10.jpg" />
            <CarouselImage subpath="pie" name="pie12.jpg" />
          </div>
        </div>
      </div>

      <div className="carousel__right">
        <button onClick={goRight} className="carousel__btn">
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  );
};
