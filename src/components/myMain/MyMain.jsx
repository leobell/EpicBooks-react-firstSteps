import React from 'react'
import Welcome from '../welcome/Welcome'
import AllTheBooks from '../allTheBooks/AllTheBooks'

const MyMain = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col">
               <Welcome /> 
            </div>
        </div>
        <AllTheBooks />
    </div>
)}

export default MyMain
