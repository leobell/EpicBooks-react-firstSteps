import React, { useState } from 'react'
import Welcome from '../welcome/Welcome'
import AllTheBooks from '../allTheBooks/AllTheBooks'
import CommentArea from '../commentArea/CommentArea'

const MyMain = ( {searchBook} ) => {
    const [isSelectedAsin, setIsSelectedAsin] = useState('')

  return (
    <div className='container'>
        <div className="row">
            <div className="col">
               <Welcome /> 
            </div>
        </div>
        <div className='row'>
            <div className="col-8">
                <AllTheBooks
                    searchBook={searchBook}
                    setIsSelectedAsin={setIsSelectedAsin}
                />
            </div>
            <div className="col-4">
                <h2 className='mb-4'>Recensioni</h2>
                {isSelectedAsin && <div>
                    <CommentArea 
                        key = {isSelectedAsin}
                        asin = {isSelectedAsin}
                    /> 
                </div>}
            </div>
        </div>
        
    </div>
)}

export default MyMain
