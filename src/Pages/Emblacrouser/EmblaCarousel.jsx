import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import axios from 'axios';
import './Embla.css/embla.css'

const EmblaCarousel = (props) => {
  let text = window.location.href

  const myArray = text.split("/");
  console.log(myArray[4]);
  let id = myArray[4]
  const { options } = props;
  const [slides, setSlides] = useState([]);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US'
        );
        const movies = response.data.results;

        const newSlides = movies.map((movie) => movie.poster_path);
        setSlides(newSlides);

      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="embla">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {slides.map((image, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <img className="embla__slide__img" src={`https://image.tmdb.org/t/p/w500${image}`} alt={`Slide ${index + 1}`} />
               </div>
            ))}
          </div>
        </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((image, index) => (
              <Thumb
                onClick={() => emblaMainApi?.scrollTo(index)}
                selected={index === emblaMainApi?.selectedScrollSnap()}
                index={index}
                imgSrc={`https://image.tmdb.org/t/p/w500${image}`}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;



// const EmblaCarousel = (props) => {
//   const { slides, options } = props
//   const [selectedIndex, setSelectedIndex] = useState(0)
//   const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
//   const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
//     containScroll: 'keepSnaps',
//     dragFree: true
//   })

//   const onThumbClick = useCallback(
//     (index) => {
//       if (!emblaMainApi || !emblaThumbsApi) return
//       emblaMainApi.scrollTo(index)
//     },
//     [emblaMainApi, emblaThumbsApi]
//   )

//   const onSelect = useCallback(() => {
//     if (!emblaMainApi || !emblaThumbsApi) return
//     setSelectedIndex(emblaMainApi.selectedScrollSnap())
//     emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
//   }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

//   useEffect(() => {
//     if (!emblaMainApi) return
//     onSelect()
//     emblaMainApi.on('select', onSelect)
//     emblaMainApi.on('reInit', onSelect)
//   }, [emblaMainApi, onSelect])

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaMainRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__number">
//                 <span>{index + 1}</span>
//               </div>
//               <img
//                 className="embla__slide__img"
//                 src={imageByIndex(index)}
//                 alt="Your alt text"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla-thumbs">
//         <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
//           <div className="embla-thumbs__container">
//             {slides.map((index) => (
//               <Thumb
//                 onClick={() => onThumbClick(index)}
//                 selected={index === selectedIndex}
//                 index={index}
//                 imgSrc={imageByIndex(index)}
//                 key={index}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EmblaCarousel
