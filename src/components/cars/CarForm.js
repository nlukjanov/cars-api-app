import React from 'react'

function CarForm({ data, handleSubmit, handleChange }) {
  return (
    <div>
      <div className='columns'>
        <form
          onSubmit={handleSubmit}
          className='column is-half is-offset-one-quarter'
        >
          <div className='field'>
            <label className='label'>Make</label>
            <div className='control'>
              <input
                onChange={handleChange}
                type='text'
                name='make'
                placeholder='Make'
                className='input'
                value={data.make}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Model</label>
            <div className='control'>
              <input
                onChange={handleChange}
                type='text'
                name='carModel'
                placeholder='Model'
                className='input'
                value={data.carModel}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Image</label>
            <div className='control'>
              <input
                onChange={handleChange}
                type='text'
                name='image'
                placeholder='Image'
                className='input'
                value={data.image}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Safety Rating</label>
            <div className='control'>
              <input
                onChange={handleChange}
                type='text'
                name='safetyRating'
                placeholder='Safety Rating'
                className='input'
                value={data.safetyRating}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Description</label>
            <div className='control'>
              <textarea
                onChange={handleChange}
                type='text'
                name='description'
                placeholder='Description'
                className='textarea'
                value={data.description}
              ></textarea>
            </div>
          </div>
          <div className='field'>
            <button className='button is-fullwidth is-info has-text-black'>
              Make Car
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CarForm
