import React from 'react'
import FantasyBooks from '../../books/fantasy.json'
import MyBookCard from '../myBookCard/MyBookCard'

const AllTheBooks = () => {
  return (
    <div className='row'>
      {
        FantasyBooks.map((book) => (
            <MyBookCard 
                key={book.asin}
                img={book.img}
                title={book.title}
                category={book.category}
            />
        ))
      }
    </div>
  )
}

export default AllTheBooks
