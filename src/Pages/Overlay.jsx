import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Overlay = () => {
  const [movieData, setMovieData] = useState(null);
//   const id = "927107"; // Replace with your movie ID

  useEffect(() => {
    const fetchMovieData = async () => {
        let text = window.location.href

        const myArray = text.split("/");
        console.log(myArray[4]);
        let id = myArray[4]
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
        setMovieData(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, []);

  if (!movieData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="overlay">
      <div className="title">
        <h1>{movieData.original_title}</h1>
      </div>
      {/* Add more details or components to display movie information */}
    </div>
  );
};

export default Overlay;
