import React from 'react'
import "./app.scss"
import UserForm from './nabin/form';
import LetterLayout from './nabin/letterLayout';

const App = () => {
  
  return (
    
    <>
      <div className='page-layout'>
        <h2>Input Form</h2>
        <UserForm />
        <hr />
        <LetterLayout />

    </div>
    
    </>
  )
}

export default App