/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'


const Card = ({poster, name, detail, id, dat}) => {

  function Tunicate (string) {
    return string.slice(0, 90) + "..."
  }
  return (
    <>
    <Link 
    to={`details/${id}`}
    style={{ textDecoration: "none", color: "white" }}
    >
      <div className="box">
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
      </div>
      </Link>
    </>
  )
}

export default Card