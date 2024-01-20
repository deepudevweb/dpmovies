import React, { useEffect, useState } from 'react'
import '../../Components/Card/Card'
import axios from 'axios'
// import '../Details/Details.css'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import EmblaCarousel from '../Emblacrouser/EmblaCarousel';
import '../Emblacrouser/Embla.css/embla.css'
import './Details.css'

const Details = () => {
  const [movieDetail, setMovieDetail] = useState(null)
  const OPTIONS = {}
  const SLIDE_COUNT = 10
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


  function GetMoviesDetail() {
    let text = window.location.href

    const myArray = text.split("/");
    console.log(myArray[4]);
    let id = myArray[4]
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(function (response) {
        setMovieDetail(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }


  useEffect(() => {
    GetMoviesDetail()
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    return () => {
      document.body.style.backgroundColor = 'black';
    };
  }, []);

  if (movieDetail == null) {
    return <h1>Loading...</h1>
  }
  else {
    return (
      <>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <section className="movie-main ">
          <div className="showcase">
            <div className="banner">
              <img src={"https://image.tmdb.org/t/p/original" + movieDetail.backdrop_path} alt="" />

            </div>
            <div className="movie-det">
              <div className="det-left">
                <div className="movie-poster">
                  <img src={"https://image.tmdb.org/t/p/original" + movieDetail.poster_path} alt="" />
                </div>
              </div>
              <div className="det-right">
                <div className="det-top">
                  <div className="movie-title">
                    {movieDetail.original_title}
                  </div>
                  <div className="tagline">
                    {movieDetail.tagline}
                  </div>
                  <div className="movie-rating">
                    {movieDetail.vote_average}
                    <i><FaStar /></i>
                    <span className="movie-vote">
                      ({movieDetail.vote_count}) votes
                    </span>
                  </div>
                  <div className="movie-runtime">
                    {movieDetail.runtime}min
                  </div>
                  <div className="movie-release">
                    release date: {movieDetail.release_date}
                  </div>
                  <div className="movie-critic">
                    {movieDetail.genres.map((genre) => (
                      <>
                        <span className="critic-array" id={genre.id}>
                          {genre.name}
                        </span>
                      </>
                    ))}
                  </div>
                </div>
                <div className="det-right-bottom">
                  <div className="synopsis">Synopsis</div>
                  <div className='oview'>{movieDetail.overview}</div>
                </div>
              </div>
            </div>
            <div className="movie-links">
              <div className="link-heading">Useful Links</div>
              <a href={movieDetail.homepage}
                target='_blank'
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="movie-home-button1">
                    Homepage <RiExternalLinkLine className='external-link1' />
                  </span>
                </p>
              </a>
              <a href={"https://www.imdb.com/title/" + movieDetail.imdb_id}
                target='_blank'
                style={{ textDecoration: "none" }}
              >
                <p>
                  <span className="movie-imdb-button2">
                    IMDb <RiExternalLinkLine className='external-link2' />
                  </span>
                </p>
              </a>
            </div>
            <div className="movie-heading">Production Companies</div>
            <div className="production-house">
              {movieDetail.production_companies.map((house) => (
                <>
                  {(
                    <span className="production-house-image">
                      <img className='house-image'
                        src={
                          "https://image.tmdb.org/t/p/original" + house.logo_path
                        }
                      />
                      <span className='house-name'>{house.name}</span>
                    </span>
                  )}
                </>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Details