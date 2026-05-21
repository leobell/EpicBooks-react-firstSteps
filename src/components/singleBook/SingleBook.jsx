import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CommentArea from '../commentArea/CommentArea'
import { ThemeContext } from '../../contexts/themeContext/ThemeContext'

const SingleBook = ({img, title, category, asin, setIsSelectedAsin}) => {
  const [selected, setSelected] = useState(false)
  const { isDarkMode } = useContext(ThemeContext)
  const computedTheme = isDarkMode ? 'bg-light text-dark' : 'bg-dark text-light'
  const computedThemeBorder = isDarkMode ? 'black' : 'white' 
  const onSelected = () => {
    setSelected(!selected)
    if(selected){
      setIsSelectedAsin('')
    } else {
      setIsSelectedAsin(asin)
    }
    
  }

  return (
    <div className="col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4">
      <Card 
        style={{ width: '100%' , border: selected ? `4px solid ${computedThemeBorder}` : "none"}}
        className={`${computedTheme} p-3`}
      >
        <Card.Img onClick={onSelected} variant="top" src={img} style={{aspectRatio: '1', objectFit: 'contain'}}/>
        <Card.Body>
          <Card.Title 
            style={{display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: "1.4em",
              minHeight: "2.8em"}}
            >{title}
          </Card.Title>
          <Card.Text>
            {category}
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleBook
