import React from 'react'

const TextComponent = ({title, description}) => {
  return <div className='text-card'>
    <h2>{ title}</h2> <p>{description}</p>
    </div>
}

export default TextComponent