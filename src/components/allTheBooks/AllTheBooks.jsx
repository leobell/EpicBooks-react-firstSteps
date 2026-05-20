import React, { useState } from 'react'
import FantasyBooks from '../../books/fantasy.json'
import SingleBook from '../singleBook/SingleBook'
import ErrorAlert from '../errorAlert/ErrorAlert'

const AllTheBooks = ( {searchBook} ) => {

  const filterBook = FantasyBooks.filter(book => book.title.toLowerCase().includes(searchBook.toLowerCase()))

  console.log(filterBook)

  return (
    <div className='row'>
      {(filterBook.length === 0) && 
        <ErrorAlert 
          descriptionError = "A quanto pare non c'è il libro che cerchi."
        />
      }

      {
        filterBook.map((book) => (
            
            <SingleBook 
                key={book.asin}
                img={book.img}
                title={book.title}
                category={book.category}
                asin={book.asin}
            />
        ))
      }
    </div>
  )
}

export default AllTheBooks
