import React from 'react'

const UserCard = (props) => {
    const { name, title, imageLink } = props;

  return (
      <div className='user-card'>
          <img src={imageLink} alt={`${name} Photo`} />
          <h3>{name}</h3>
          <p><i>{title}</i></p>
    </div>
  )
}

export default UserCard