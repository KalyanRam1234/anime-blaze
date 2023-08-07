import React, { useState, useEffect, useCallback } from "react";

function Carousel({
  images,
  showControls = true,
  showIndicators = true,
  effect = "slide",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [event, setEvent]=useState("next")
  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }, [images.length]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrev();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div>
      <div
        className={`relative overflow-hidden w-full h-[100vh] ${effect}`}
        onKeyDown={handleKeyDown}
        tabIndex="0"
        aria-live="polite"
        aria-roledescription="carousel"
      >
        {/* carousel-items */}
        <div className="flex w-full transition duration-500 ease-in-out ">
          {/* carousel-item */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`shrink-0 w-full h-[100vh] flex justify-center items-center  ${
                index === activeIndex ? "active" : ""
              } `}
              style={
                effect === "slide"
                  ? { transform: `translateX(-${activeIndex * 100}%)` }
                  : {}
              }
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover h-[100vh] w-full "
              />
              <div className="absolute h-full w-[70%] overflow-hidden bg-gradient-to-r from-black to-transparent left-0"></div>

              {/* Details */}
              <div className="absolute left-8 md:left-12 w-[50%]">

                <div className="text-xl text-green-150 font-semibold">
                  #{index + 1} Spotlight
                </div>

                <div className="text-white font-bold text-[8vw] sm:text-[6vw] md:text-[4.5vw] xl:text-[3.5vw] leading-tight mb-2">
                  {image.title} 
                </div>

                <div className="text-white mt-4 h-36 overflow-hidden">
                  <div dangerouslySetInnerHTML={{ __html: image.description }} >
                  </div>
                </div>

                <div className="mt-6">
                 <button className="md:text-lg text-white bg-green-150 border-none outline-none rounded-3xl px-4 md:px-5 py-2 mr-4 mb-3">
                  Watch Now
                  </button> 

                  <button className="md:text-lg text-white bg-[#35353d] border-none outline-none rounded-3xl px-4 md:px-5 py-2">
                  Details
                  </button> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <div className="absolute bottom-16 right-8 flex flex-col">
          <button
            className=" text-white border-none cursor-pointer outline-none mx-auto p-2 bg-[#3A3A3E] rounded-lg w-[90%] hover:bg-green-150 mb-2"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <img src="/images/next.png" />
          </button>

          <button
            className=" text-white border-none cursor-pointer outline-none mx-auto p-2 bg-[#3A3A3E] rounded-lg w-[90%]  hover:bg-green-150"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <img src="/images/prev.png" />
          </button>
        </div>
      )}

      {showIndicators && (
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] flex gap-2 p-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-8 h-1 bg-[#ffffff80] border-none  cursor-pointer outline-none ${
                index === activeIndex ? "active1" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === activeIndex}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
