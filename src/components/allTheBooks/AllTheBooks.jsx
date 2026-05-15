import React, { useState } from 'react'
import FantasyBooks from '../../books/fantasy.json'
import SingleBook from '../singleBook/SingleBook'
import ErrorAlert from '../errorAlert/ErrorAlert'

const AllTheBooks = () => {

  const [searchInput, setSearchInput] = useState('')
  const filterBook = FantasyBooks.filter(book => book.title.toLowerCase().includes(searchInput.toLowerCase()))

  console.log(filterBook)

  return (
    <div className='row'>
      <form className=' mb-4'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='form-control'
          placeholder='cerca libro'
          type="text"
        />
      </form>

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
