import Image from "next/image";
import { useEffect, useState } from "react";

import { carouselData } from "../../utils";

interface Props {
  iconSelected: number;
}

export const Carousel = ({ iconSelected }: Props) => {
  const IMAGES_CHUNK_SIZE = 9;

  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentImagesOffset, setCurrentImagesOffset] = useState(0);

  const goLeft = () => {
    let nextImagesOffset;

    if (IMAGES_CHUNK_SIZE >= carouselData[iconSelected].length) {
      nextImagesOffset = 0;
    } else if (currentImagesOffset - IMAGES_CHUNK_SIZE >= 0) {
      nextImagesOffset = currentImagesOffset - IMAGES_CHUNK_SIZE;
    } else if (carouselData[iconSelected].length % IMAGES_CHUNK_SIZE === 0) {
      nextImagesOffset = carouselData[iconSelected].length - IMAGES_CHUNK_SIZE;
    } else {
      nextImagesOffset =
        carouselData[iconSelected].length -
        (carouselData[iconSelected].length % IMAGES_CHUNK_SIZE);
    }

    setCurrentImages(
      carouselData[iconSelected].slice(
        nextImagesOffset,
        nextImagesOffset + IMAGES_CHUNK_SIZE
      )
    );
    setCurrentImagesOffset(nextImagesOffset);
  };

  const goRight = () => {
    const nextImagesOffset =
      currentImagesOffset + IMAGES_CHUNK_SIZE >=
      carouselData[iconSelected].length
        ? 0
        : currentImagesOffset + IMAGES_CHUNK_SIZE;

    setCurrentImages(
      carouselData[iconSelected].slice(
        nextImagesOffset,
        nextImagesOffset + IMAGES_CHUNK_SIZE
      )
    );

    setCurrentImagesOffset(nextImagesOffset);
  };

  useEffect(() => {
    setCurrentImages(carouselData[iconSelected].slice(0, IMAGES_CHUNK_SIZE));
  }, [iconSelected]);

  return (
    <div className="w-full row-center px-4 sm:px-8">
      <div className="relative row-center">
        <div className="lg:w-[900px] flex-1 row-center flex-wrap gap-2 lg:gap-8 sm:mx-12 mb-12 sm:mb-0 p-4">
          {currentImages.map((image) => (
            <div key={image} className="w-40 md:w-64 h-40 md:h-64">
              <Image
                src={`/images${image}`}
                alt="bakery product"
                width={1200}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="w-12 mr-16 absolute sm:left-0 bottom-0 sm:bottom-auto">
          <button
            onClick={goLeft}
            className="w-12 h-12 bg-pink-20 rounded-full text-white"
          >
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
        </div>
        <div className="w-12 ml-16 absolute sm:right-0 bottom-0 sm:bottom-auto">
          <button
            onClick={goRight}
            className="w-12 h-12 bg-pink-20 rounded-full text-white"
          >
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
