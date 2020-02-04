import React from 'react'

const NewComment = ({ handleCommentSubmit, handleChange, text }) => {
  return (
    <form onSubmit={handleCommentSubmit} className='media'>
      <div className='media-content'>
        <div className='field'>
          <p className='control'>
            <textarea
              name='text'
              onChange={handleChange}
              className='textarea'
              placeholder='Add a comment...'
              value={text}
            ></textarea>
          </p>
        </div>
        <nav className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <button type='submit' className='button is-info'>
                Submit
              </button>
            </div>
          </div>
        </nav>
      </div>
    </form>
  )
}

export default NewComment
