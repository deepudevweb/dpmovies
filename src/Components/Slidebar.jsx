import React, { useState, useEffect } from 'react';
// import Overlay from '../Pages/Overlay'
import axios from 'axios';
const Slider = () => {

  const [Slide, setSlide] = useState(null)
  
  function GetSlideList() {

    let text = window.location.href

    const myArray = text.split("/");
    console.log(myArray[4]);
    let id = myArray[4]
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
      .then(function (response) {
        setSlide(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }
  useEffect(() => {
    GetSlideList()
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    return () => {
      document.body.style.backgroundColor = 'black';
    };
  }, []);
  if (Slide === null) {
    return <h1>Loading...</h1>
  }
  else {
    return (
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {Slide.map((item, index) => {
            if (index == 0) {
              return (
                <div className="carousel-item active posrel" data-bs-interval="2000">
                  <img src={"https://image.tmdb.org/t/p/original" + item.backdrop_path} className="d-block w-100" />
                  <div className="posab">
                    <h1>movie name</h1>
                    <h1>movie detail</h1>
                  </div>
                </div>
              )
            }
            else {
              return (
                <div className="carousel-item posrel" data-bs-interval="2000">
                  <img src={"https://image.tmdb.org/t/p/original" + item.backdrop_path} className="d-block w-100" />
                  <div className="posab">
                    <h1>movie name</h1>
                    <h1>movie detail</h1>
                  </div>
                </div>
              )
            }


          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }

};

export default Slider;

