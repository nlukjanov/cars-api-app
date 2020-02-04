import React from 'react'
import { Link } from 'react-router-dom'

function CarCard({ _id, make, carModel, image }) {
  return (
    <div
      key={_id}
      className='column is-one-quarter-desktop is-one-third-tablet is-half-mobile'
    >
      <Link to={`/cars/${_id}`}>
        <div className='card'>
          <div className='card-header'>
            <h4 className='card-header-title'>
              <div>{make}</div>
              <div>{carModel}</div>
            </h4>
          </div>
          <div className='card-image'>
            <figure className='image'>
              <img src={image} alt={name} />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default CarCard
