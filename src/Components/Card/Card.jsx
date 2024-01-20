/* eslint-disable react/prop-types */
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Card = ({poster, name, detail, id, dat}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  function Tunicate (string) {
    return string.slice(0, 90) + "..."
  }

  //  { isLoading == null ?
  //  <div className="cards">
  //   <SkeletonTheme color="#202020" highlightColor="#444">
  //     <Skeleton height={300} duration={2} />
  //   </SkeletonTheme>
  // </div>
  // } :
  return (
    <>
    <Link 
    to={`details/${id}`}
    style={{ textDecoration: "none", color: "white" }}
    >
      <div className="box">
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="card">
          <div className="overlay"></div>
          <img src={poster} alt="" />
          <div className="movie-name">
            <h4 className="">{name}</h4>
            <p className="">{Tunicate(detail)}</p>
            <div className="da-la">
            <div className="date">{dat}</div>
          </div>
          </div>
          </div>
)}
      </div>
      </Link>
    </>
  )
}

export default Card
