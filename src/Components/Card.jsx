import React from 'react'

const Card = ({
  poster, name, language
}) => {
  return (
    <>
      <div className="box">
        <div className="card">
          <img src={poster} alt="" />
          <h3 className="movie-name">{name}</h3>
          <div className="starContainer">
              <input type="radio" aria-hidden name="star-rating" value="" checked disabled />

              <input id="star-1" type="radio" name="star-rating" value="1" />

              <label for="star-1" aria-label="1 star">
                <span className="star">☆</span>
              </label>

              <input id="star-2" type="radio" name="star-rating" value="2" />
              <label for="star-2" aria-label="2 stars">
                <span className="star">☆</span>
              </label>

              <input id="star-3" type="radio" name="star-rating" value="3" />
              <label for="star-3" aria-label="3 stars">
                <span className="star">☆</span>
              </label>

              <input id="star-4" type="radio" name="star-rating" value="4" />
              <label for="star-4" aria-label="4 stars">
                <span className="star">☆</span>
              </label>

              <input id="star-5" type="radio" name="star-rating" value="5" />
              <label for="star-5" aria-label="5 stars">
                <span className="star">☆</span>
              </label>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
