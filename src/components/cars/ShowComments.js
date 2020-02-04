import React from 'react'
const moment = require('moment')

function ShowComments({ _id, user, text, createdAt, handleCommentDelete }) {
  return (
    <div key={_id} className='box'>
      <article className='media'>
        <div className='media-content'>
          <div className='content'>
            <strong>{user.username}</strong>{' '}
            <small>{moment(createdAt).format('MMM Do YYYY')}</small>
            <p>{text}</p>
          </div>
        </div>
        <div className='media-right'>
          <button onClick={handleCommentDelete} className='delete'></button>
        </div>
      </article>
    </div>
  )
}

export default ShowComments
