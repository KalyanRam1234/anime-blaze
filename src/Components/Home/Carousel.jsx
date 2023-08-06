import React, { useState , useEffect, useCallback} from "react";

function Carousel({images,showControls=true, showIndicators=true , effect='slide'}){

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext =useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrev =  useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrev();
    }
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [handleNext]);

  
    return (
        <div>
            <div className={`relative overflow-hidden w-full h-[100vh] ${effect}`} onKeyDown={handleKeyDown} tabIndex='0' aria-live="polite" aria-roledescription="carousel">
            {/* carousel-items */}
                <div className="flex w-full transition duration-500 ease-in-out">
                    {/* carousel-item */}
                    {images.map((image,index)=> (
                      <div key={index} className={`shrink-0 w-full h-[100vh] flex justify-center items-center ${index === activeIndex ? 'active' : ''} `} 
                      style={
                        effect === 'slide'
                          ? { transform: `translateX(-${activeIndex * 100}%)` }
                          : {}
                      }
                      >
                          <img src={image.src} alt={image.alt} className="object-cover h-[100vh] w-full"/>
  
                      </div>
                    ))}

                </div>
            </div>

            {showControls && (
          <>
            <button
              className='absolute top-[50%] translate-y-[-50%] text-white border-none cursor-pointer outline-none bg-[#0000004d] left-0 '
              onClick={handlePrev}
              aria-label='Previous slide'
            >
              Previous
            </button>
            <button
              className='absolute top-[50%] translate-y-[-50%] text-white border-none cursor-pointer outline-none bg-[#0000004d] right-0 '
              onClick={handleNext}
              aria-label='Next slide'
            >
              Next
            </button>
          </>
      )} 
         {showIndicators && (
        <div className='absolute bottom-0 left-[50%] translate-x-[-50%] flex gap-2 p-4'>
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 bg-[#ffffff80] border-none rounded-[50%] cursor-pointer outline-none ${
                index === activeIndex ? 'active1' : ''
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === activeIndex}
            ></button>
          ))}
        </div>
      )}
        </div> 
    )
}


export default Carousel