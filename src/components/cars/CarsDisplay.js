import React from 'react'
import CarCard from './CarCard'

function CarsDisplay({ cars }) {
  return (
    <div className='container'>
      <div className='columns is-mobile is-multiline'>
        {cars.map(car => {
          return <CarCard key={car._id} {...car} />
        })}
      </div>
    </div>
  )
}
export default CarsDisplay
